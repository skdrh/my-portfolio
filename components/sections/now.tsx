import {ArrowDown, ArrowUpRight} from "lucide-react";

import {Section} from "@/components/section";
import {NOW, type NowItem} from "@/data/now";

/**
 * What is on the bench, three blocks wide. Names are set as display type
 * rather than as headings — three one-line items do not need to sit in the
 * page outline, and the page used to carry far more headings than its text
 * could justify.
 */
export function Now() {
    return (
        <Section
            id="now"
            title="Currently shipping."
            intro="Products of my own, built alongside the client work."
        >
            <ul className="grid gap-px border border-border bg-border md:grid-cols-3">
                {NOW.map((item) => (
                    <li key={item.title} className="flex flex-col bg-background p-6 sm:p-8">
                        <p className="flex items-center gap-2.5 text-[13px] font-medium text-muted-foreground">
                            <StageMark stage={item.kind} />
                            {item.kind}
                        </p>
                        <p className="mt-5 font-display text-[24px] leading-tight font-semibold tracking-[-0.035em] text-foreground">
                            {item.title}
                        </p>
                        <p className="mt-3 flex-1 text-pretty text-[15px] leading-[1.7] text-muted-foreground">
                            {item.blurb}
                        </p>
                        {item.href ? (
                            <a
                                href={item.href}
                                {...(item.href.startsWith("#")
                                    ? {}
                                    : {target: "_blank", rel: "noreferrer noopener"})}
                                className="group mt-6 inline-flex w-fit items-center gap-1.5 font-display text-[15px] font-medium text-foreground underline decoration-signal decoration-2 underline-offset-[5px]"
                            >
                                {item.linkLabel}
                                {item.href.startsWith("#") ? (
                                    <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-px" />
                                ) : (
                                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                                )}
                            </a>
                        ) : (
                            <p className="mt-6 text-[14px] text-faint">Not public yet</p>
                        )}
                    </li>
                ))}
            </ul>
        </Section>
    );
}

/**
 * How far along a thing is, as a mark rather than a colour: live pulses, in
 * development is half drawn, in the lab is an outline.
 */
function StageMark({stage}: {stage: NowItem["kind"]}) {
    if (stage === "Product") return <span className="pulse-dot" aria-hidden />;

    return (
        <span
            aria-hidden
            className={
                stage === "In development"
                    ? "size-[7px] shrink-0 border border-signal bg-[linear-gradient(to_right,var(--signal)_50%,transparent_50%)]"
                    : "size-[7px] shrink-0 border border-faint"
            }
        />
    );
}
