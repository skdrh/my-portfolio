"use client";

import {Menu, X} from "lucide-react";
import {useEffect, useState} from "react";

import {CONTACT_EMAIL, SITEMAP} from "@/lib/site";

/**
 * A full-height sheet rather than a dropdown — there is no dialog library on
 * this site and none is needed for eight links. Escape closes it, the body
 * scroll locks while it is open, and every link closes it on the way out.
 *
 * It lists every section, not just the header's five: there is room here,
 * and on a phone this is the only index there is. It renders nothing until
 * opened, so none of it duplicates the footer in the server HTML.
 */
export function MobileNav() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("keydown", onKey);
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previous;
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="inline-flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-foreground lg:hidden"
            >
                <Menu className="size-[15px]" />
            </button>

            {open ? (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden">
                    <div className="flex h-16 items-center justify-between border-b border-border px-4 sm:px-6">
                        <span className="callout">Menu</span>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                            className="inline-flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <X className="size-[15px]" />
                        </button>
                    </div>

                    <nav aria-label="Mobile" className="flex flex-col">
                        {SITEMAP.map((item, i) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="flex items-baseline gap-4 border-b border-border px-4 py-4 transition-colors hover:bg-muted sm:px-6"
                            >
                                <span className="ref">{String(i + 1).padStart(2, "0")}</span>
                                <span className="font-display text-[20px] font-semibold tracking-[-0.03em] text-foreground">
                                    {item.label}
                                </span>
                            </a>
                        ))}
                    </nav>

                    <div className="px-4 py-6 sm:px-6">
                        <p className="field">Direct</p>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="mt-2 block font-mono text-[13px] break-all text-foreground underline decoration-signal decoration-2 underline-offset-4"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>
                </div>
            ) : null}
        </>
    );
}
