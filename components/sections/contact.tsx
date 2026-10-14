import {ArrowUpRight, Mail} from "lucide-react";
import Image from "next/image";

import {WhatsAppIcon} from "@/components/brand-icons";
import {ContactForm} from "@/components/contact-form";
import {Section} from "@/components/section";
import {ALIAS, CONTACT_EMAIL, NAME, PORTRAIT, SOCIALS, TIMEZONE, WHATSAPP_E164} from "@/lib/site";

/**
 * The two direct lines. The profiles are linked once, at the top of the
 * page — repeating them here is how the old page ended up with every profile
 * linked three times.
 */
const CHANNELS = [
    {
        label: "Email",
        value: CONTACT_EMAIL,
        href: `mailto:${CONTACT_EMAIL}`,
        icon: Mail,
    },
    {
        label: "WhatsApp",
        value: WHATSAPP_E164,
        href: SOCIALS.whatsapp,
        icon: WhatsAppIcon,
        external: true,
    },
];

/**
 * Direct channels first, form second — and a face beside them, because the
 * person who answers is the person in the photo.
 *
 * A form is a promise that something on the far end is working. Listing the
 * real address and number beside it means the page still does its job on the
 * day the promise is broken — which, on the previous site, was every day for
 * a year.
 */
export function Contact() {
    return (
        <Section
            id="contact"
            title="Got an idea? Let's build it."
            intro="Tell me what you are building and what is in the way. I read every message myself and usually reply within a day."
        >
            <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-14">
                <div>
                    <div className="flex items-center gap-4">
                        <div className="ticked shrink-0 border border-border-strong bg-surface p-1">
                            <Image
                                src={PORTRAIT.src}
                                width={PORTRAIT.width}
                                height={PORTRAIT.height}
                                alt={`${NAME} (${ALIAS})`}
                                sizes="64px"
                                className="block size-14 bg-muted object-cover object-top"
                            />
                        </div>
                        <div className="min-w-0">
                            <p className="font-display text-[17px] font-semibold tracking-[-0.025em] text-foreground">
                                {NAME}
                            </p>
                            <p className="mt-1 flex items-center gap-2 text-[13.5px] text-muted-foreground">
                                <span className="pulse-dot" aria-hidden />
                                Open to select work
                            </p>
                        </div>
                    </div>

                    <ul className="mt-7 border-t border-border">
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
                                        <span className="field block">{channel.label}</span>
                                        <span className="mt-0.5 block truncate font-mono text-[13px] text-foreground">
                                            {channel.value}
                                        </span>
                                    </span>
                                    <ArrowUpRight className="size-3.5 shrink-0 text-faint transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-foreground" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 text-pretty text-[14px] leading-[1.7] text-muted-foreground">
                        Working {TIMEZONE}, which overlaps a normal day across the Gulf, Europe
                        and most of Asia. Every engagement so far has been remote.
                    </p>
                </div>

                <ContactForm />
            </div>
        </Section>
    );
}
