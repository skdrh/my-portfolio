import {ArrowDown, ArrowUpRight} from "lucide-react";

import {Section} from "@/components/section";
import {NOW} from "@/data/now";

/**
 * What is on the bench, three blocks wide. Names are set as display type
 * rather than as headings — three one-line items do not need to sit in the
 * page outline, and the page used to carry far more headings than its text
 * could justify.
 */
export function Now() {
    return (
        <Section id="now" index={1} label="Right now" title="Currently shipping.">
            <ul className="grid gap-px border border-border bg-border md:grid-cols-3">
                {NOW.map((item) => (
                    <li key={item.title} className="reveal flex flex-col bg-background p-6 sm:p-7">
                        <p className="field">{item.kind}</p>
                        <p className="mt-3 font-display text-[20px] leading-snug font-semibold tracking-[-0.03em] text-foreground">
                            {item.title}
                        </p>
                        <p className="mt-2 flex-1 text-pretty text-[14px] leading-7 text-muted-foreground">
                            {item.blurb}
                        </p>
                        {item.href ? (
                            <a
                                href={item.href}
                                {...(item.href.startsWith("#")
                                    ? {}
                                    : {target: "_blank", rel: "noreferrer noopener"})}
                                className="group mt-5 inline-flex w-fit items-center gap-1.5 font-mono text-[11.5px] text-foreground underline decoration-signal decoration-2 underline-offset-4"
                            >
                                {item.linkLabel}
                                {item.href.startsWith("#") ? (
                                    <ArrowDown className="size-3 transition-transform group-hover:translate-y-px" />
                                ) : (
                                    <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                                )}
                            </a>
                        ) : (
                            <p className="mt-5 flex items-center gap-2 font-mono text-[10.5px] tracking-[0.08em] text-faint uppercase">
                                <span aria-hidden className="size-1.5 shrink-0 bg-faint" />
                                Not public yet
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </Section>
    );
}
