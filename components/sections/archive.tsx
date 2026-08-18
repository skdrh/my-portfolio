import {ArrowUpRight, Github} from "lucide-react";

import {Section} from "@/components/section";
import {ARCHIVE} from "@/data/archive";
import {SOCIALS} from "@/lib/site";

/**
 * The learning years, kept but demoted.
 *
 * These used to sit alongside the client systems with equal weight and nine
 * screenshots each, which flattened everything into one undifferentiated pile.
 * Here they are one text line apiece — present, honest about what they are,
 * and impossible to mistake for the work above.
 */
export function Archive() {
    return (
        <Section
            id="archive"
            index={5}
            label="Archive"
            title="Earlier work, 2020 — 2024."
            intro="The self-taught years. Not client systems and not pretending to be — these are the repositories where the habits behind everything above were formed. Most are open source."
        >
            <ul className="border-t border-border">
                {ARCHIVE.map((item) => (
                    <li key={item.title} className="reveal group border-b border-border">
                        <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                            <div className="min-w-0 flex-1">
                                <h3 className="font-display text-[15px] font-semibold tracking-[-0.02em] text-foreground">
                                    {item.title}
                                </h3>
                                <p className="mt-1.5 text-pretty text-[13.5px] leading-6 text-muted-foreground">
                                    {item.blurb}
                                </p>
                                <p className="mt-2.5 font-mono text-[11px] text-faint">
                                    {item.stack.join("  ·  ")}
                                </p>
                            </div>

                            <div className="flex shrink-0 items-center gap-4">
                                {item.repo ? (
                                    <a
                                        href={item.repo}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="group/link inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                                    >
                                        <Github className="size-3.5" />
                                        Source
                                    </a>
                                ) : null}
                                {item.live ? (
                                    <a
                                        href={item.live}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="group/link inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                                    >
                                        Live
                                        <ArrowUpRight className="size-3 transition-transform group-hover/link:-translate-y-px group-hover/link:translate-x-px" />
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
                <Github className="size-3.5" />
                More on GitHub
                <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
            </a>
        </Section>
    );
}
