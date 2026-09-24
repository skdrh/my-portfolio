import {ArrowUpRight} from "lucide-react";

import {Section} from "@/components/section";
import {WORK} from "@/data/work";

/**
 * Four entries, each a full-width register row rather than a card in a grid.
 *
 * What a stranger can evaluate is the problem and what was built for it, so
 * that is all a row holds: the claim, a sentence or two, the stack, and one
 * link out to the full case study. The live-site links that used to sit
 * beside it are one click further on, inside the write-up.
 */
export function Work() {
    return (
        <Section
            id="work"
            index={2}
            label="Selected work"
            title="Four systems people depend on."
            intro="Products and client platforms, delivered end to end. Each one is written up in full, architecture and decisions included."
        >
            <ol className="border-t border-border">
                {WORK.map((item, i) => (
                    <li key={item.slug} className="reveal border-b border-border py-8">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <span className="ref">{String(i + 1).padStart(2, "0")}</span>
                            <span aria-hidden className="h-3 w-px bg-border" />
                            <span className="font-mono text-[10.5px] tracking-[0.12em] text-muted-foreground uppercase">
                                {item.category}
                            </span>
                            <span aria-hidden className="h-3 w-px bg-border" />
                            <span className="tabular font-mono text-[10.5px] tracking-[0.08em] text-faint">
                                {item.year}
                            </span>
                            <span aria-hidden className="h-3 w-px bg-border" />
                            <span className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.08em] text-muted-foreground uppercase">
                                {item.status === "In development" ? (
                                    <span aria-hidden className="size-1.5 shrink-0 bg-faint" />
                                ) : (
                                    <span className="pulse-dot" aria-hidden />
                                )}
                                {item.status}
                            </span>
                        </div>

                        <div className="mt-4 grid gap-x-10 gap-y-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                            <div className="min-w-0">
                                <h3 className="font-display text-[24px] leading-tight font-semibold tracking-[-0.035em] text-foreground sm:text-[30px]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 max-w-2xl text-pretty font-display text-[16px] leading-[1.45] font-medium tracking-[-0.02em] text-foreground/85 sm:text-[18px]">
                                    {item.headline}
                                </p>
                                <p className="mt-3 max-w-2xl text-pretty text-[14px] leading-7 text-muted-foreground">
                                    {item.summary}
                                </p>
                                <ul className="mt-5 flex flex-wrap gap-1.5">
                                    {item.stack.map((tech) => (
                                        <li key={tech} className="tag">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href={item.caseStudy}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="group/link inline-flex w-fit items-center justify-between gap-3 border border-border px-3.5 py-2.5 font-mono text-[11px] tracking-[0.06em] text-foreground uppercase transition-colors hover:border-border-strong hover:bg-muted"
                            >
                                {/* The project name is part of the link text, so four
                                    links never share one label and each still says
                                    where it goes when read out of context. */}
                                Read the {item.title} case study
                                <ArrowUpRight className="size-3.5 shrink-0 text-faint transition-transform group-hover/link:-translate-y-px group-hover/link:translate-x-px group-hover/link:text-foreground" />
                            </a>
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
