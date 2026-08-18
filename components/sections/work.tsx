import {ArrowUpRight} from "lucide-react";

import {Section} from "@/components/section";
import {WORK} from "@/data/work";
import {COMPANY} from "@/lib/site";

/**
 * Four entries, each a full-width register row rather than a card in a grid.
 *
 * The old portfolio showed nine projects behind carousels of screenshots. A
 * screenshot of a dashboard proves nothing — every dashboard looks like every
 * other dashboard at thumbnail size. What a stranger can actually evaluate is
 * the problem, the decision, and the outcome, so that is all a row contains.
 */
export function Work() {
    return (
        <Section
            id="work"
            index={1}
            label="Selected work"
            title="Four systems people depend on."
            intro={
                <>
                    Products and client platforms delivered end to end. Each links to the full
                    write-up on{" "}
                    <a
                        href={COMPANY.caseStudies}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-foreground underline decoration-signal decoration-2 underline-offset-4"
                    >
                        dragondevs.co
                    </a>
                    , where the architecture and the decisions behind it are written up properly.
                </>
            }
        >
            <ol className="border-t border-border">
                {WORK.map((item, i) => (
                    <li key={item.slug} className="reveal group border-b border-border">
                        <div className="grid gap-5 py-8 lg:grid-cols-[1fr_260px] lg:gap-10">
                            <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                    <span className="index-mark">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span aria-hidden className="h-3 w-px bg-border" />
                                    <span className="font-mono text-[10.5px] tracking-[0.12em] text-muted-foreground uppercase">
                                        {item.category}
                                    </span>
                                    <span aria-hidden className="h-3 w-px bg-border" />
                                    <span className="tabular font-mono text-[10.5px] tracking-[0.08em] text-faint">
                                        {item.year}
                                    </span>
                                </div>

                                <h3 className="mt-4 font-display text-[24px] leading-tight font-semibold tracking-[-0.035em] text-foreground sm:text-[30px]">
                                    {item.title}
                                </h3>

                                <p className="mt-2 max-w-2xl text-pretty font-display text-[16px] leading-[1.45] font-medium tracking-[-0.02em] text-foreground/85 sm:text-[18px]">
                                    {item.headline}
                                </p>

                                <p className="mt-4 max-w-2xl text-pretty text-[14px] leading-7 text-muted-foreground">
                                    {item.summary}
                                </p>

                                {/* The outcome, marked with the signal rule so the eye finds it
                                    even when the paragraph above is skipped — which it will be. */}
                                <div className="mt-5 max-w-2xl border-l-2 border-signal pl-4">
                                    <p className="spec-label">Outcome</p>
                                    <p className="mt-1.5 text-pretty text-[14px] leading-7 text-foreground">
                                        {item.outcome}
                                    </p>
                                </div>

                                <ul className="mt-5 flex flex-wrap gap-1.5">
                                    {item.stack.map((tech) => (
                                        <li key={tech} className="chip">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right rail: status, my role, and the two links out. */}
                            <div className="flex flex-col gap-5 lg:border-l lg:border-border lg:pl-8">
                                <div>
                                    <p className="spec-label">Status</p>
                                    <p className="mt-2 flex items-center gap-2 font-mono text-[11.5px] tracking-[0.06em] text-foreground uppercase">
                                        {item.status === "In development" ? (
                                            <span
                                                aria-hidden
                                                className="size-1.5 shrink-0 bg-faint"
                                            />
                                        ) : (
                                            <span className="pulse-dot" aria-hidden />
                                        )}
                                        {item.status}
                                    </p>
                                </div>

                                <div>
                                    <p className="spec-label">My role</p>
                                    <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
                                        {item.role}
                                    </p>
                                </div>

                                <div className="mt-auto flex flex-col gap-2 pt-1">
                                    <a
                                        href={item.caseStudy}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="group/link inline-flex items-center justify-between gap-2 border border-border px-3 py-2.5 font-mono text-[11px] tracking-[0.06em] text-foreground uppercase transition-colors hover:border-border-strong hover:bg-muted"
                                    >
                                        Read the case study
                                        <ArrowUpRight className="size-3.5 shrink-0 text-faint transition-transform group-hover/link:-translate-y-px group-hover/link:translate-x-px group-hover/link:text-foreground" />
                                    </a>

                                    {item.liveUrl ? (
                                        <a
                                            href={item.liveUrl}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="group/link inline-flex items-center justify-between gap-2 px-3 py-2 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                                        >
                                            {item.liveUrl.replace(/^https?:\/\//, "")}
                                            <ArrowUpRight className="size-3.5 shrink-0 transition-transform group-hover/link:-translate-y-px group-hover/link:translate-x-px" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
