import {ArrowUpRight, Github, Linkedin, Mail} from "lucide-react";

import {
    COMPANY,
    CONTACT_EMAIL,
    FACTS,
    LOCATION,
    NAME,
    SOCIALS,
} from "@/lib/site";

/**
 * Where the old portfolio put a cut-out photograph, this puts a specification
 * panel: the four facts a hiring manager or a prospective client actually
 * scans for, set as mono rows. It carries the same visual weight the photo did
 * and says considerably more.
 */
const SPEC: {label: string; value: string}[] = [
    {label: "Based", value: `${LOCATION.city}, ${LOCATION.country} · ${LOCATION.timezone}`},
    {label: "Focus", value: "Offline-first systems · Multi-tenant SaaS · Commerce"},
    {label: "Depth", value: "Architecture, interface and code — end to end"},
    {label: "Company", value: "Founder, dragondevs"},
];

const PROOF = ["Offline-first", "Multi-tenant", "Bilingual / RTL", "Cross-platform"];

export function Hero() {
    return (
        <>
            <section id="top" className="border-b border-border">
                <div className="mx-auto w-full max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
                    <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                        <div className="min-w-0 animate-rise">
                            <p className="eyebrow">{NAME} — Full-stack Product Engineer</p>

                            <h1 className="mt-6 font-display text-[36px] leading-[1.02] font-semibold tracking-[-0.04em] text-foreground sm:text-[52px] lg:text-[60px]">
                                I build production systems end to end.
                            </h1>

                            <p className="mt-6 max-w-xl text-pretty text-[15px] leading-7 text-muted-foreground sm:text-[16.5px] sm:leading-8">
                                From designing signage in the UAE to architecting the software
                                businesses run on. I build the kind of system that has
                                to keep working when the conditions are not ideal — offline,
                                bilingual, multi-tenant, on whatever device is in front of the
                                person using it. Architecture, interface and code, usually all
                                three.
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
                                    className="inline-flex h-11 items-center gap-2 border border-foreground bg-foreground px-5 font-mono text-[11px] tracking-[0.08em] text-background uppercase transition-opacity hover:opacity-85"
                                >
                                    See the work
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex h-11 items-center gap-2 border border-border px-5 font-mono text-[11px] tracking-[0.08em] text-foreground uppercase transition-colors hover:border-border-strong hover:bg-muted"
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

                        {/* The spec panel — the photograph's replacement. */}
                        <div
                            className="min-w-0 animate-rise lg:pl-6"
                            style={{animationDelay: "120ms"}}
                        >
                            <div className="border border-border bg-surface">
                                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                                    <span className="spec-label">Profile</span>
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
                                            <dt className="spec-label pt-0.5">{row.label}</dt>
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

            {/* The four figures the rest of the page keeps coming back to. */}
            <section aria-label="At a glance" className="border-b border-border">
                <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-7 py-9 sm:gap-x-12 lg:grid-cols-4">
                        {FACTS.map((fact) => (
                            <div key={fact.label} className="flex flex-col gap-2.5">
                                <span aria-hidden className="h-[3px] w-6 bg-signal" />
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
