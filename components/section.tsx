import type {ReactNode} from "react";

import {cn} from "@/lib/utils";

/**
 * Every section opens with its heading, large, and nothing stacked on top of
 * it. The numbered, bracketed label that used to sit above each one said the
 * same thing as the header nav in smaller type; the heading is the label.
 *
 * Two layouts. `stacked` puts the heading and its intro side by side above
 * full-width content, which is what the drawings and the register need.
 * `split` pins the heading in a left column while a list scrolls past it on
 * the right — for the sections that are read top to bottom, like the
 * timeline and the questions.
 *
 * The section is named by its heading (`aria-labelledby`), so each one is a
 * labelled region a screen reader can jump between.
 */
export function Section({
    id,
    title,
    intro,
    children,
    layout = "stacked",
    className,
}: {
    id: string;
    title: string;
    intro?: ReactNode;
    children: ReactNode;
    layout?: "stacked" | "split";
    className?: string;
}) {
    const titleId = `${id}-title`;
    const split = layout === "split";

    const header = (
        <header
            className={
                split
                    ? "lg:sticky lg:top-28 lg:self-start"
                    : "grid gap-x-12 gap-y-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end"
            }
        >
            <h2
                id={titleId}
                className="font-display text-[32px] leading-[1.04] font-semibold tracking-[-0.045em] text-foreground sm:text-[42px] lg:text-[46px]"
            >
                {title}
            </h2>
            {intro ? (
                <div
                    className={cn(
                        "max-w-xl space-y-4 text-pretty text-[15.5px] leading-[1.75] text-muted-foreground",
                        split && "mt-6",
                    )}
                >
                    {intro}
                </div>
            ) : null}
        </header>
    );

    return (
        <section
            id={id}
            aria-labelledby={titleId}
            className={cn("scroll-mt-20 border-b border-border", className)}
        >
            <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
                {split ? (
                    <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
                        {header}
                        <div className="min-w-0">{children}</div>
                    </div>
                ) : (
                    <>
                        {header}
                        <div className="mt-12 sm:mt-16">{children}</div>
                    </>
                )}
            </div>
        </section>
    );
}
