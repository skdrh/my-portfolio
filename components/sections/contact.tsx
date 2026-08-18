import {ArrowUpRight, Github, Linkedin, Mail, MessageCircle} from "lucide-react";

import {ContactForm} from "@/components/contact-form";
import {Section} from "@/components/section";
import {CONTACT_EMAIL, LOCATION, SOCIALS, WHATSAPP_E164} from "@/lib/site";

const CHANNELS = [
    {
        label: "Email",
        value: CONTACT_EMAIL,
        href: `mailto:${CONTACT_EMAIL}`,
        icon: Mail,
    },
    {
        label: "LinkedIn",
        value: "in/skdrh",
        href: SOCIALS.linkedin,
        icon: Linkedin,
        external: true,
    },
    {
        label: "WhatsApp",
        value: WHATSAPP_E164,
        href: `https://wa.me/${WHATSAPP_E164.replace(/[^\d]/g, "")}`,
        icon: MessageCircle,
        external: true,
    },
    {
        label: "GitHub",
        value: "github.com/skdrh",
        href: SOCIALS.github,
        icon: Github,
        external: true,
    },
];

/**
 * Direct channels first, form second.
 *
 * A form is a promise that something on the far end is working. Listing the
 * real address, profile and number above it means the page still does its job
 * on the day the promise is broken — which, on the previous site, was every
 * day for a year.
 */
export function Contact() {
    return (
        <Section
            id="contact"
            index={6}
            label="Contact"
            title="Tell me what you are building."
            intro="Serious enquiries only get serious answers, and I read every message myself. Whether it is a product to build, a system to rescue, or a role worth talking about — the fastest route is the one that suits you."
        >
            <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
                <div>
                    <ul className="border-t border-border">
                        {CHANNELS.map((channel) => (
                            <li key={channel.label}>
                                <a
                                    href={channel.href}
                                    {...(channel.external
                                        ? {target: "_blank", rel: "noreferrer noopener"}
                                        : {})}
                                    className="group flex items-center gap-3.5 border-b border-border py-4 transition-colors hover:bg-muted"
                                >
                                    <channel.icon className="size-4 shrink-0 text-faint transition-colors group-hover:text-foreground" />
                                    <span className="min-w-0 flex-1">
                                        <span className="spec-label block">{channel.label}</span>
                                        <span className="mt-1 block truncate font-mono text-[12.5px] text-foreground">
                                            {channel.value}
                                        </span>
                                    </span>
                                    <ArrowUpRight className="size-3.5 shrink-0 text-faint transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-foreground" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 space-y-3">
                        <p className="flex items-center gap-2.5 font-mono text-[10.5px] tracking-[0.1em] text-muted-foreground uppercase">
                            <span className="pulse-dot" aria-hidden />
                            Open to select work
                        </p>
                        <p className="text-[13px] leading-6 text-muted-foreground">
                            Based in {LOCATION.city} ({LOCATION.timezone}), with delivered work
                            across Pakistan, Saudi Arabia and the UAE. Remote engagements
                            anywhere. I read every message myself.
                        </p>
                    </div>
                </div>

                <ContactForm />
            </div>
        </Section>
    );
}
