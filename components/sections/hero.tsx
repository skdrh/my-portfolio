import {ArrowUpRight, Mail} from "lucide-react";
import Image from "next/image";

import {GitHubIcon, LinkedInIcon, XIcon} from "@/components/brand-icons";
import {
    ALIAS,
    COMPANY,
    CONTACT_EMAIL,
    FACTS,
    GITHUB_HANDLE,
    LINKEDIN_HANDLE,
    NAME,
    PORTRAIT,
    ROLE,
    SOCIALS,
    X_HANDLE,
} from "@/lib/site";

/**
 * The profiles, each shown by its username — the logo already says which
 * platform; the label says who to look for. `rel="me"` tells crawlers that
 * understand it that these accounts belong to the person this page is about.
 *
 * This is the only place on the page the profiles are linked. They used to
 * appear here, in the contact list and again in the footer — three outbound
 * links per profile, and most of the reason the page carried 34.
 */
const PROFILES = [
    {href: SOCIALS.x, label: `@${X_HANDLE}`, network: "X", icon: XIcon},
    {href: SOCIALS.linkedin, label: `in/${LINKEDIN_HANDLE}`, network: "LinkedIn", icon: LinkedInIcon},
    {href: SOCIALS.github, label: `github.com/${GITHUB_HANDLE}`, network: "GitHub", icon: GitHubIcon},
];

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
                    <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                        <div className="min-w-0 animate-rise">
                            <p className="callout">{ROLE}</p>

                            {/* Two sentences, one line each: the name on its own line
                                is the point of the heading, so it never breaks after
                                "Salman" the way a single balanced run did. */}
                            <h1 className="mt-6 font-display text-[32px] leading-[1.05] font-semibold tracking-[-0.04em] text-foreground min-[400px]:text-[36px] sm:text-[50px] lg:text-[54px] xl:text-[58px]">
                                <span className="block">Hey, I&apos;m {NAME}.</span>{" "}
                                <span className="block text-muted-foreground">
                                    I build products end to end.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-pretty text-[15px] leading-7 text-muted-foreground sm:text-[16.5px] sm:leading-8">
                                The idea, the scalable architecture, the UI, the API, the
                                database, the AI, even the deploy script.{" "}
                                <strong className="font-semibold text-foreground">
                                    Bring me a real problem and I&apos;ll hand you back a real
                                    product, fast.
                                </strong>
                            </p>

                            <p className="mt-4 max-w-xl text-pretty text-[15px] leading-7 text-muted-foreground sm:text-[16.5px] sm:leading-8">
                                8+ years and 30+ projects in, I&apos;m now building{" "}
                                <a
                                    href={COMPANY.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="font-medium text-foreground underline decoration-signal decoration-2 underline-offset-4"
                                >
                                    dragondevs
                                </a>
                                , a company that makes useful digital products and takes them
                                global.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="#work"
                                    className="inline-flex h-11 items-center gap-2 bg-signal-solid px-5 font-mono text-[11px] tracking-[0.08em] text-signal-on-solid uppercase transition-opacity hover:opacity-90"
                                >
                                    See my work
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex h-11 items-center gap-2 border border-border-strong px-5 font-mono text-[11px] tracking-[0.08em] text-foreground uppercase transition-colors hover:bg-muted"
                                >
                                    Let&apos;s talk
                                </a>
                            </div>

                            <ul
                                aria-label={`${NAME} online`}
                                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
                            >
                                {PROFILES.map((profile) => (
                                    <li key={profile.network}>
                                        <a
                                            href={profile.href}
                                            target="_blank"
                                            rel="me noreferrer noopener"
                                            title={`${NAME} on ${profile.network}`}
                                            className="group inline-flex items-center gap-2 font-mono text-[11.5px] text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            <profile.icon className="size-3.5" />
                                            {profile.label}
                                            <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="inline-flex items-center gap-2 font-mono text-[11.5px] text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        <Mail className="size-3.5" />
                                        Email me
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* The portrait, set as a figure on the sheet: registration
                            ticks on the frame and a title strip underneath, the way a
                            plate is captioned on a drawing. */}
                        <figure
                            className="mx-auto w-full max-w-[440px] min-w-0 animate-rise lg:max-w-none"
                            style={{animationDelay: "120ms"}}
                        >
                            <div className="ticked border border-border-strong bg-surface p-1.5">
                                <Image
                                    src={PORTRAIT.src}
                                    width={PORTRAIT.width}
                                    height={PORTRAIT.height}
                                    alt={PORTRAIT.alt}
                                    sizes="(min-width: 1152px) 440px, (min-width: 1024px) 38vw, (min-width: 480px) 440px, 100vw"
                                    loading="eager"
                                    fetchPriority="high"
                                    className="block h-auto w-full bg-muted"
                                />
                            </div>
                            <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border border-t-0 border-border-strong bg-surface px-4 py-3">
                                <span className="flex items-baseline gap-3">
                                    <span className="ref">FIG. 01</span>
                                    <span className="font-display text-[14px] font-semibold tracking-[-0.02em] text-foreground">
                                        {NAME}
                                        <span className="font-mono text-[12px] font-normal text-muted-foreground">
                                            {" "}
                                            · {ALIAS}
                                        </span>
                                    </span>
                                </span>
                                <span className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase">
                                    <span className="pulse-dot" aria-hidden />
                                    Open to select work
                                </span>
                            </figcaption>
                        </figure>
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
