import type {ReactNode} from "react";

import {cn} from "@/lib/utils";

/**
 * Every section opens with a title block, the way a drawing sheet does.
 *
 * A rule runs the full width with the sheet reference sitting on it — number,
 * then the bracketed callout — and the heading hangs below at full measure.
 * The content then gets the entire column rather than being pushed into a
 * narrow track by a sticky gutter, which is what lets the project register and
 * the stack table breathe at the widths they actually need.
 */
export function Section({
    id,
    index,
    label,
    title,
    intro,
    children,
    className,
}: {
    id: string;
    /** Zero-padded on render — pass 1, get "01". */
    index: number;
    label: string;
    title: string;
    intro?: ReactNode;
    children: ReactNode;
    className?: string;
}) {
    return (
        <section id={id} className={cn("scroll-mt-16 border-b border-border", className)}>
            <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
                {/* Title block: reference on the rule, heading beneath it. */}
                <header className="reveal">
                    <div className="flex items-center gap-4">
                        <span className="ref shrink-0">
                            {String(index).padStart(2, "0")}
                        </span>
                        <span className="callout shrink-0">{label}</span>
                        <span aria-hidden className="h-px flex-1 bg-border" />
                    </div>

                    <div className="mt-7 grid gap-x-12 gap-y-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
                        <h2 className="font-display text-[28px] leading-[1.06] font-semibold tracking-[-0.04em] text-foreground sm:text-[38px]">
                            {title}
                        </h2>
                        {intro ? (
                            <p className="text-pretty text-[14.5px] leading-7 text-muted-foreground sm:text-[15px]">
                                {intro}
                            </p>
                        ) : null}
                    </div>
                </header>

                <div className="mt-12">{children}</div>
            </div>
        </section>
    );
}
