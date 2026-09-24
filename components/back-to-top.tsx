"use client";

import {ArrowUp} from "lucide-react";
import {useEffect, useState} from "react";

/**
 * Floating back-to-top, shown once the hero has scrolled out of view.
 *
 * Visibility comes from an IntersectionObserver on the hero rather than a
 * scroll listener, so nothing runs while the page scrolls. It is a <button>,
 * not a link: the footer already has a "Back to top" link to #top, and a
 * second link with the same text is exactly what SEO auditors flag. The
 * click scrolls up and moves focus to the hero, so keyboard users land where
 * the page begins rather than back at the bottom.
 */
export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById("top");
        if (!hero) return;

        const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting));
        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    function toTop() {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({top: 0, behavior: reduce ? "auto" : "smooth"});
        document.getElementById("top")?.focus({preventScroll: true});
    }

    return (
        <button
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            title="Back to top"
            className={`group ticked fixed right-4 bottom-4 z-30 inline-flex size-11 items-center justify-center border border-border-strong bg-background/75 text-muted-foreground shadow-[0_12px_32px_-18px_rgb(4_10_24/0.55)] backdrop-blur-xl transition-[opacity,translate,visibility,color] duration-300 hover:text-foreground sm:right-6 sm:bottom-6 ${
                visible ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"
            }`}
        >
            <ArrowUp className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>
    );
}
