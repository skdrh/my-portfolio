import nodemailer from "nodemailer";
import {type NextRequest, NextResponse} from "next/server";

import {CONTACT_EMAIL, NAME, SITE_URL} from "@/lib/site";

export const runtime = "nodejs";

/**
 * Contact delivery over generic SMTP.
 *
 * The version this replaces used nodemailer's `service: "gmail"` shortcut with
 * a GMAIL_PASSWORD that was never set in the deployment. Every submission threw,
 * got swallowed by a catch that returned a bare 400, and the sender saw a toast
 * that vanished in four seconds. A year of enquiries went nowhere.
 *
 * What changed:
 *   - Generic host/port/user/pass, so any provider works. Gmail app passwords
 *     still work through smtp.gmail.com; so do Mailgun, Resend SMTP and SES.
 *   - Missing configuration is detected *before* connecting and returns a
 *     specific, actionable message instead of a generic failure.
 *   - `replyTo` is the sender, so hitting reply in the inbox actually reaches
 *     them. The old version replied to yourself.
 *   - Every failure path names the direct address, so a message is never lost
 *     silently again.
 */

interface ContactBody {
    name?: string;
    email?: string;
    company?: string;
    projectType?: string;
    message?: string;
    /** Honeypot — always empty for a real person. */
    website?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FALLBACK = `Please email ${CONTACT_EMAIL} directly.`;

export async function POST(request: NextRequest) {
    let body: ContactBody;

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({message: "Invalid request body."}, {status: 400});
    }

    const {name, email, company, projectType, message, website} = body;

    // Bot trap: accept it, look successful, drop it on the floor.
    if (website) {
        return NextResponse.json({message: "Thanks."}, {status: 200});
    }

    // Server-side validation. The client checks too, but the client is not
    // the one that has to be right.
    if (!name || name.trim().length < 2) {
        return NextResponse.json({message: "Please add your name."}, {status: 400});
    }
    if (!email || !EMAIL_RE.test(email.trim())) {
        return NextResponse.json({message: "That email address looks wrong."}, {status: 400});
    }
    if (!message || message.trim().length < 10) {
        return NextResponse.json(
            {message: "Please add a little more detail — a sentence or two is plenty."},
            {status: 400},
        );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO ?? user;
    const from = process.env.CONTACT_FROM ?? user;

    if (!host || !user || !pass || !to) {
        // Loud in the server log, honest to the sender. This is the exact
        // condition that silently ate a year of enquiries.
        console.error(
            "[contact] SMTP is not configured. Missing:",
            [
                !host && "SMTP_HOST",
                !user && "SMTP_USER",
                !pass && "SMTP_PASS",
                !to && "CONTACT_TO",
            ]
                .filter(Boolean)
                .join(", "),
        );

        return NextResponse.json(
            {message: `The contact form is not configured right now. ${FALLBACK}`},
            {status: 503},
        );
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // 465 = implicit TLS, 587 = STARTTLS
        auth: {user, pass},
    });

    const subjectType = projectType?.trim() || "General enquiry";

    const submittedAt = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Karachi",
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date());

    const text = [
        `New enquiry — ${subjectType}`,
        "",
        `Name:    ${name}`,
        `Email:   ${email}`,
        company && `Company: ${company}`,
        `Type:    ${subjectType}`,
        `Sent:    ${submittedAt} (PKT)`,
        "",
        "Message:",
        message,
    ]
        .filter(Boolean)
        .join("\n");

    try {
        await transporter.sendMail({
            from: `${NAME} portfolio <${from}>`,
            to,
            replyTo: `${name} <${email}>`,
            subject: `New enquiry — ${subjectType} (${name})`,
            text,
            html: renderEmail({name, email, company, subjectType, message, submittedAt}),
        });

        return NextResponse.json({message: "Sent."}, {status: 200});
    } catch (error) {
        console.error("[contact] sendMail failed.", error);
        return NextResponse.json(
            {message: `Something went wrong sending that. ${FALLBACK}`},
            {status: 502},
        );
    }
}

function escapeHtml(input: string) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/**
 * A plain, table-based email. Deliberately light-only and inline-styled —
 * every mail client mangles something, and this set survives all of them.
 */
function renderEmail(d: {
    name: string;
    email: string;
    company?: string;
    subjectType: string;
    message: string;
    submittedAt: string;
}) {
    const safeName = escapeHtml(d.name);
    const safeEmail = escapeHtml(d.email);

    const row = (label: string, value: string) => `
        <tr>
            <td style="padding:12px 0;border-bottom:1px solid #ececea;width:110px;color:#8b9098;font-size:12px;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:1px;vertical-align:top">${label}</td>
            <td style="padding:12px 0;border-bottom:1px solid #ececea;color:#0b0c0e;font-size:15px;font-family:Helvetica,Arial,sans-serif">${value}</td>
        </tr>`;

    return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>New enquiry</title></head>
<body style="margin:0;padding:0;background:#f4f4f1;-webkit-font-smoothing:antialiased">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#f4f4f1">${safeName} — ${escapeHtml(d.subjectType)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f1;padding:32px 12px">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border:1px solid #e3e3de">
    <tr><td style="height:4px;background:#b4f03c;font-size:0;line-height:0">&nbsp;</td></tr>
    <tr><td style="background:#08090a;padding:24px 32px">
        <div style="font-size:18px;color:#f2f3f1;font-family:Helvetica,Arial,sans-serif;font-weight:700;letter-spacing:-0.5px">salman khan</div>
        <div style="margin-top:4px;color:#9298a1;font-size:12px;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:1.5px">New enquiry</div>
    </td></tr>
    <tr><td style="padding:28px 32px 4px">
        <p style="margin:0 0 4px;font-size:12px;color:#8b9098;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:1.5px">From</p>
        <p style="margin:0;font-size:22px;font-weight:700;color:#0b0c0e;font-family:Helvetica,Arial,sans-serif">${safeName}</p>
    </td></tr>
    <tr><td style="padding:16px 32px 0">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row("Email", `<a href="mailto:${safeEmail}" style="color:#0b0c0e">${safeEmail}</a>`)}
            ${d.company ? row("Company", escapeHtml(d.company)) : ""}
            ${row("Type", escapeHtml(d.subjectType))}
            ${row("Sent", `${escapeHtml(d.submittedAt)} PKT`)}
        </table>
    </td></tr>
    <tr><td style="padding:24px 32px 8px">
        <p style="margin:0 0 10px;font-size:12px;color:#8b9098;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;letter-spacing:1.5px">Message</p>
        <div style="border-left:3px solid #b4f03c;padding:4px 0 4px 16px;color:#0b0c0e;font-size:15px;line-height:1.7;font-family:Helvetica,Arial,sans-serif;white-space:pre-wrap">${escapeHtml(d.message)}</div>
    </td></tr>
    <tr><td style="padding:24px 32px 32px">
        <a href="mailto:${safeEmail}?subject=Re:%20your%20message" style="display:inline-block;padding:12px 24px;background:#0b0c0e;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;font-family:Helvetica,Arial,sans-serif;letter-spacing:1px;text-transform:uppercase">Reply to ${safeName}</a>
    </td></tr>
    <tr><td style="padding:16px 32px;border-top:1px solid #ececea;background:#fbfbf9">
        <p style="margin:0;color:#8b9098;font-size:11px;font-family:Helvetica,Arial,sans-serif">Sent from the contact form at <a href="${SITE_URL}" style="color:#8b9098">${SITE_URL.replace(/^https?:\/\//, "")}</a></p>
    </td></tr>
</table>
</td></tr></table>
</body></html>`;
}
