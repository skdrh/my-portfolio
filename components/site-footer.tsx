import {ArrowUpRight} from "lucide-react";

import {COMPANY, CONTACT_EMAIL, HANDLE, NAME, NAV, SOCIALS} from "@/lib/site";
import {FOUNDED} from "@/lib/seo";

export function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-b border-border">
            <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <div className="flex items-baseline gap-2.5">
                            <span className="font-display text-[15px] leading-none font-semibold tracking-[-0.03em] text-foreground">
                                {HANDLE}
                            </span>
                            <span aria-hidden className="dimension w-5" />
                        </div>
                        <p className="mt-4 max-w-sm text-pretty text-[13.5px] leading-7 text-muted-foreground">
                            Full-stack product engineer. Offline-first systems, multi-tenant
                            platforms and bilingual commerce — built end to end.
                        </p>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="mt-4 inline-block font-mono text-[12.5px] break-all text-foreground underline decoration-signal decoration-2 underline-offset-4"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>

                    <nav aria-label="Footer">
                        <p className="field">Sections</p>
                        <ul className="mt-4 space-y-2.5">
                            {NAV.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="font-mono text-[12px] text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <p className="field">Elsewhere</p>
                        <ul className="mt-4 space-y-2.5">
                            {[
                                {label: "LinkedIn", href: SOCIALS.linkedin},
                                {label: "GitHub", href: SOCIALS.github},
                                {label: "X", href: SOCIALS.x},
                                {label: COMPANY.name, href: COMPANY.url},
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="group inline-flex items-center gap-1.5 font-mono text-[12px] text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="tabular font-mono text-[11px] text-faint">
                        © {FOUNDED}—{year} {NAME}
                    </p>
                    <p className="font-mono text-[11px] text-faint">
                        Built with Next.js · No trackers · No cookies
                    </p>
                </div>
            </div>
        </footer>
    );
}
