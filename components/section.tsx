import type {ReactNode} from "react";

import {cn} from "@/lib/utils";

/**
 * The page is one long specification document, and this is its section rule.
 *
 * Every section carries a number and a mono label in a narrow left gutter,
 * with the content in the wide column beside it — the layout of a datasheet.
 * Below `lg` the gutter collapses and the label sits above the content, which
 * is the only responsive behaviour any section needs.
 */
export function Section({
    id,
    index,
    label,
    title,
    intro,
    children,
    className,
    bare = false,
}: {
    id: string;
    /** Zero-padded on render — pass 1, get "01". */
    index: number;
    label: string;
    title?: string;
    intro?: ReactNode;
    children: ReactNode;
    className?: string;
    /** Skip the heading block entirely and render only the gutter + children. */
    bare?: boolean;
}) {
    return (
        <section id={id} className={cn("scroll-mt-16 border-b border-border", className)}>
            <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
                <div className="grid gap-8 lg:grid-cols-[168px_1fr] lg:gap-12">
                    {/* Gutter: index above label, both mono, both quiet. */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-3">
                            <span className="index-mark">{String(index).padStart(2, "0")}</span>
                            <span aria-hidden className="h-3 w-px bg-border lg:hidden" />
                            <span className="eyebrow">{label}</span>
                        </div>
                    </div>

                    <div className="min-w-0">
                        {!bare && title ? (
                            <div className="reveal mb-10 max-w-2xl">
                                <h2 className="font-display text-[26px] leading-[1.1] font-semibold tracking-[-0.035em] text-foreground sm:text-[34px]">
                                    {title}
                                </h2>
                                {intro ? (
                                    <p className="mt-4 text-pretty text-[14.5px] leading-7 text-muted-foreground sm:text-[15px]">
                                        {intro}
                                    </p>
                                ) : null}
                            </div>
                        ) : null}

                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
