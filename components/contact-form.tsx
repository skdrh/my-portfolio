"use client";

import {ArrowRight, Check, Loader2} from "lucide-react";
import {useState} from "react";

import {CONTACT_EMAIL} from "@/lib/site";

const PROJECT_TYPES = [
    "Product build",
    "Web app",
    "Offline-first / desktop",
    "E-commerce",
    "API / backend",
    "Full-time role",
    "Something else",
];

type Status =
    | {kind: "idle"}
    | {kind: "sending"}
    | {kind: "sent"}
    | {kind: "error"; message: string};

/**
 * The previous version of this form silently failed for a year.
 *
 * It POSTed to a route that used Gmail's `service` transport with credentials
 * that were never set in the deployment, so every submission hit the catch
 * block, flashed a red toast, and dropped the message. Three things changed:
 *
 *   1. The route now tells the client *why* it failed, and the failure text
 *      always includes the direct address so a message is never lost.
 *   2. Status is rendered inline in an aria-live region rather than a toast
 *      that disappears in four seconds — a failure the sender may not have
 *      seen is the same as no failure at all.
 *   3. The submitted values are kept on failure. Retyping a paragraph because
 *      an SMTP host was down is not the sender's problem to solve.
 */
export function ContactForm() {
    const [status, setStatus] = useState<Status>({kind: "idle"});
    const [projectType, setProjectType] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        setStatus({kind: "sending"});

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({...data, projectType}),
            });

            const payload = await response.json().catch(() => ({}));

            if (response.ok) {
                setStatus({kind: "sent"});
                form.reset();
                setProjectType("");
            } else {
                setStatus({
                    kind: "error",
                    message:
                        payload.message ??
                        `Could not send your message. Please email ${CONTACT_EMAIL} directly.`,
                });
            }
        } catch {
            setStatus({
                kind: "error",
                message: `Could not reach the server. Please email ${CONTACT_EMAIL} directly.`,
            });
        }
    }

    if (status.kind === "sent") {
        return (
            <div className="border border-signal-line bg-signal-soft p-6 sm:p-8">
                <p className="flex items-center gap-2.5 font-mono text-[10.5px] tracking-[0.14em] text-muted-foreground uppercase">
                    <Check className="size-3.5 text-signal-ink dark:text-signal" />
                    Message sent
                </p>
                <p className="mt-4 font-display text-[19px] leading-snug font-semibold tracking-[-0.025em] text-foreground">
                    Thanks — it landed.
                </p>
                <p className="mt-2 text-[14px] leading-7 text-muted-foreground">
                    I read everything myself and usually reply within a day. If it is urgent,{" "}
                    <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-foreground underline decoration-signal decoration-2 underline-offset-4"
                    >
                        email me directly
                    </a>
                    .
                </p>
                <button
                    type="button"
                    onClick={() => setStatus({kind: "idle"})}
                    className="mt-6 font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase underline underline-offset-4 transition-colors hover:text-foreground"
                >
                    Send another
                </button>
            </div>
        );
    }

    const sending = status.kind === "sending";

    return (
        <form onSubmit={handleSubmit} className="border border-border bg-surface">
            <div className="border-b border-border px-5 py-3.5 sm:px-6">
                <span className="spec-label">New enquiry</span>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
                {/* Bot trap. Off-screen rather than display:none — some bots skip
                    hidden fields, and none of them read aria-hidden. */}
                <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" required autoComplete="name" />
                    <Field
                        label="Email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@company.com"
                    />
                </div>

                <Field label="Company" name="company" autoComplete="organization" optional />

                <fieldset>
                    <legend className="spec-label">What is it about</legend>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                        {PROJECT_TYPES.map((type) => {
                            const active = projectType === type;
                            return (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setProjectType(active ? "" : type)}
                                    aria-pressed={active}
                                    className={
                                        active
                                            ? "border border-foreground bg-foreground px-3 py-2 font-mono text-[11px] text-background transition-colors"
                                            : "border border-border px-3 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                                    }
                                >
                                    {type}
                                </button>
                            );
                        })}
                    </div>
                </fieldset>

                <div>
                    <label htmlFor="message" className="spec-label">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        minLength={10}
                        placeholder="What are you building, and what is in the way?"
                        className="mt-2.5 w-full resize-y border border-input bg-background px-3.5 py-3 text-[14px] leading-7 text-foreground placeholder:text-faint focus:border-ring focus:outline-none"
                    />
                </div>

                {status.kind === "error" ? (
                    <p
                        role="alert"
                        className="border-l-2 border-destructive bg-destructive-soft px-4 py-3 text-[13px] leading-6 text-foreground"
                    >
                        {status.message}
                    </p>
                ) : null}

                <div aria-live="polite" className="sr-only">
                    {sending ? "Sending your message" : ""}
                </div>

                <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex h-11 w-full items-center justify-center gap-2 border border-foreground bg-foreground px-5 font-mono text-[11px] tracking-[0.08em] text-background uppercase transition-opacity hover:opacity-85 disabled:opacity-60 sm:w-auto"
                >
                    {sending ? (
                        <>
                            <Loader2 className="size-3.5 animate-spin" />
                            Sending
                        </>
                    ) : (
                        <>
                            Send message
                            <ArrowRight className="size-3.5" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}

function Field({
    label,
    name,
    type = "text",
    required,
    optional,
    placeholder,
    autoComplete,
}: {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    optional?: boolean;
    placeholder?: string;
    autoComplete?: string;
}) {
    return (
        <div>
            <label htmlFor={name} className="spec-label">
                {label}
                {optional ? <span className="ml-1.5 normal-case">(optional)</span> : null}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className="mt-2.5 h-11 w-full border border-input bg-background px-3.5 text-[14px] text-foreground placeholder:text-faint focus:border-ring focus:outline-none"
            />
        </div>
    );
}
