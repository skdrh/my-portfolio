import {ArrowUpRight} from "lucide-react";

import {Section} from "@/components/section";
import {WorkDiagram} from "@/components/work-diagrams";
import {WORK, type WorkItem} from "@/data/work";
import {cn} from "@/lib/utils";

/**
 * Four entries, each a drawing of the system beside what it is.
 *
 * What a stranger can evaluate is the problem and what was built for it, so
 * that is what a row holds: the drawing, the claim, a sentence or two, the
 * stack, and one link out to the full case study. The drawings alternate
 * sides down the page so the section reads as a sequence of plates rather
 * than a table. They continue the portrait's numbering — FIG. 01 is the
 * hero — because together they are one set of drawings.
 */
export function Work() {
    return (
        <Section
            id="work"
            title="Four systems people depend on."
            intro="Products and client platforms, delivered end to end. Each one has a full case study, with the architecture and the decisions behind it."
        >
            <ol className="space-y-20 sm:space-y-28">
                {WORK.map((item, i) => (
                    <li
                        key={item.slug}
                        id={item.slug}
                        className="grid scroll-mt-24 items-center gap-x-14 gap-y-8 lg:grid-cols-2"
                    >
                        <div className="min-w-0">
                            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-muted-foreground">
                                <span className="font-medium text-foreground">{item.category}</span>
                                <span aria-hidden className="h-3 w-px bg-border-strong" />
                                <span className="tabular font-mono text-[12px]">{item.year}</span>
                                <span aria-hidden className="h-3 w-px bg-border-strong" />
                                <span className="inline-flex items-center gap-2">
                                    <StatusMark status={item.status} />
                                    {item.status}
                                </span>
                            </p>

                            <h3 className="mt-5 font-display text-[30px] leading-[1.05] font-semibold tracking-[-0.04em] text-foreground sm:text-[38px]">
                                {item.title}
                            </h3>
                            <p className="mt-3 max-w-xl text-pretty font-display text-[18px] leading-[1.4] font-medium tracking-[-0.02em] text-foreground/85 sm:text-[20px]">
                                {item.headline}
                            </p>
                            <p className="mt-4 max-w-xl text-pretty text-[15px] leading-[1.75] text-muted-foreground">
                                {item.summary}
                            </p>
                            <ul className="mt-6 flex flex-wrap gap-1.5">
                                {item.stack.map((tech) => (
                                    <li key={tech} className="tag">
                                        {tech}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={item.caseStudy}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="group/link btn btn-secondary mt-8"
                            >
                                {/* The label reads the same on all four; the project
                                    name rides along as screen-reader text, so each
                                    link still says where it goes when read out of
                                    context and no two share an anchor text. */}
                                <span>
                                    Read the case study
                                    <span className="sr-only"> — {item.title}</span>
                                </span>
                                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover/link:-translate-y-px group-hover/link:translate-x-px group-hover/link:text-foreground" />
                            </a>
                        </div>

                        {/* On a phone the drawing leads, like a plate above its
                            notes; on a wide screen the plates alternate sides. */}
                        <figure
                            className={cn(
                                "plate ticked order-first min-w-0 border border-border-strong bg-background",
                                i % 2 === 0 ? "lg:order-first" : "lg:order-last",
                            )}
                        >
                            <div className="relative overflow-hidden px-1 py-3 sm:px-5 sm:py-6">
                                <div
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_70%_40%,color-mix(in_oklab,var(--signal)_9%,transparent),transparent)]"
                                />
                                <div className="relative">
                                    <WorkDiagram slug={item.slug} />
                                </div>
                            </div>
                            <figcaption className="flex items-baseline gap-3 border-t border-border-strong bg-surface px-4 py-3">
                                <span className="ref shrink-0">FIG. {String(i + 2).padStart(2, "0")}</span>
                                <span className="text-pretty text-[13.5px] leading-snug text-muted-foreground">
                                    {item.diagram}
                                </span>
                            </figcaption>
                        </figure>
                    </li>
                ))}
            </ol>
        </Section>
    );
}

/** Live and active pulse; in development is half drawn, like the Now cards. */
function StatusMark({status}: {status: WorkItem["status"]}) {
    if (status === "In development") {
        return (
            <span
                aria-hidden
                className="size-[7px] shrink-0 border border-signal bg-[linear-gradient(to_right,var(--signal)_50%,transparent_50%)]"
            />
        );
    }

    return <span className="pulse-dot" aria-hidden />;
}
