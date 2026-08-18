import {ArrowUpRight, Github, Linkedin, Mail} from "lucide-react";

import {COMPANY, CONTACT_EMAIL, FACTS, NAME, SOCIALS, TIMEZONE} from "@/lib/site";

/**
 * Where the old portfolio put a cut-out photograph, this puts the drawing's
 * title block. Every row answers something a serious reader wants to know,
 * which is why the location row that used to sit at the top is gone — where
 * someone lives is the least interesting fact about them, and pinning it above
 * the work invited the wrong kind of filtering.
 */
const SPEC: {label: string; value: string}[] = [
    {label: "Scope", value: "Architecture → engineering → business → marketing"},
    {label: "Focus", value: "Scalable systems · Offline-first · Multi-tenant SaaS"},
    {label: "Proof", value: "Bizstock — designed, built and taken to market alone"},
    {label: "Company", value: "Founder, dragondevs"},
];

const PROOF = ["Scalable architecture", "Offline-first", "Multi-tenant", "Solo delivery"];

export function Hero() {
    return (
        <>
            <section id="top" className="relative overflow-hidden border-b border-border">
                {/* The sheet the page is drawn on. Masked so it dissolves before
                    it reaches the edges rather than stopping at a hard line. */}
                <div
                    aria-hidden
                    className="sheet-grid sheet-grid-fade pointer-events-none absolute inset-0"
                />

                <div className="relative mx-auto w-full max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
                    <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                        <div className="min-w-0 animate-rise">
                            <p className="callout">{NAME} — Full-stack Product Engineer</p>

                            <h1 className="mt-6 font-display text-[36px] leading-[1.02] font-semibold tracking-[-0.04em] text-foreground sm:text-[52px] lg:text-[60px]">
                                I take products from architecture to market.
                            </h1>

                            <p className="mt-6 max-w-xl text-pretty text-[15px] leading-7 text-muted-foreground sm:text-[16.5px] sm:leading-8">
                                I am an end-to-end product builder. That means the
                                architecture and the scaling decisions first, then the
                                engineering, then the business around it and the marketing that
                                puts it in front of people — done by one person rather than
                                handed between four. Bizstock is the proof: every line of it,
                                every screen, and every customer, mine.
                            </p>

                            {/* The dividers are hidden below `sm`: once this strip wraps
                                onto a second line, a leading separator is left dangling at
                                the start of it. Plain gaps read fine at that width. */}
                            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-3">
                                {PROOF.map((item, i) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase"
                                    >
                                        {i > 0 ? (
                                            <span
                                                aria-hidden
                                                className="hidden h-3 w-px bg-border sm:block"
                                            />
                                        ) : null}
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-9 flex flex-wrap items-center gap-3">
                                <a
                                    href="#work"
                                    className="inline-flex h-11 items-center gap-2 bg-signal-solid px-5 font-mono text-[11px] tracking-[0.08em] text-signal-on-solid uppercase transition-opacity hover:opacity-90"
                                >
                                    See the work
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex h-11 items-center gap-2 border border-border-strong px-5 font-mono text-[11px] tracking-[0.08em] text-foreground uppercase transition-colors hover:bg-muted"
                                >
                                    Start a conversation
                                </a>
                            </div>

                            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                                <a
                                    href={SOCIALS.linkedin}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <Linkedin className="size-3.5" />
                                    LinkedIn
                                    <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                                </a>
                                <a
                                    href={SOCIALS.github}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <Github className="size-3.5" />
                                    GitHub
                                    <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                                </a>
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="group inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    <Mail className="size-3.5" />
                                    Email
                                </a>
                            </div>
                        </div>

                        {/* Title block — the photograph's replacement. */}
                        <div
                            className="min-w-0 animate-rise lg:pl-6"
                            style={{animationDelay: "120ms"}}
                        >
                            <div className="ticked border border-border-strong bg-surface">
                                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                                    <span className="field">Profile</span>
                                    <span className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase">
                                        <span className="pulse-dot" aria-hidden />
                                        Open to select work
                                    </span>
                                </div>

                                <dl className="divide-y divide-border">
                                    {SPEC.map((row) => (
                                        <div
                                            key={row.label}
                                            className="grid grid-cols-[76px_1fr] gap-3 px-4 py-3.5 sm:grid-cols-[88px_1fr]"
                                        >
                                            <dt className="field pt-0.5">{row.label}</dt>
                                            <dd className="text-[13.5px] leading-6 text-foreground">
                                                {row.value}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>

                                <a
                                    href={COMPANY.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group flex items-center justify-between border-t border-border px-4 py-3.5 transition-colors hover:bg-muted"
                                >
                                    <span className="font-mono text-[11px] text-muted-foreground">
                                        dragondevs.co
                                    </span>
                                    <ArrowUpRight className="size-3.5 text-faint transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-foreground" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The four figures the rest of the page keeps coming back to,
                each under the same plain dash the wordmark carries. */}
            <section aria-label="At a glance" className="border-b border-border bg-muted/40">
                <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-7 py-9 sm:gap-x-12 lg:grid-cols-4">
                        {FACTS.map((fact) => (
                            <div key={fact.label} className="flex flex-col gap-3">
                                <span aria-hidden className="h-[3px] w-8 bg-signal" />
                                <span className="tabular font-mono text-[21px] leading-none font-bold text-foreground">
                                    {fact.figure}
                                </span>
                                <span className="text-[12.5px] leading-snug text-muted-foreground">
                                    {fact.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
