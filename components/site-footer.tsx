import {ArrowUp} from "lucide-react";

import {ShareLinks} from "@/components/share-links";
import {Wordmark} from "@/components/wordmark";
import {FOUNDED} from "@/lib/seo";
import {ALIAS, COMPANY, CONTACT_EMAIL, HANDLE, NAME, SITEMAP} from "@/lib/site";

/**
 * The footer indexes every section under its long name (the header uses the
 * short ones), carries the share row, and links nothing the hero already
 * links — the old footer repeated the header nav and every profile, which is
 * where the duplicate anchor texts and a third of the outbound links came from.
 *
 * It signs off with the handle set large and quiet: the last thing on the
 * sheet is the name in the title block.
 */
export function SiteFooter() {
    const year = new Date().getFullYear();
    const stem = HANDLE.replace(/_$/, "");

    return (
        <footer className="relative overflow-hidden">
            <div className="mx-auto w-full max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20">
                <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:gap-16">
                    <div>
                        <Wordmark className="text-[17px]" />
                        <p className="mt-4 max-w-sm text-pretty text-[14.5px] leading-[1.75] text-muted-foreground">
                            {NAME} ({ALIAS}): software architect, product builder and founder
                            of {COMPANY.name}. Real problems in, real products out.
                        </p>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="mt-4 inline-block font-mono text-[13px] break-all text-foreground underline decoration-signal decoration-2 underline-offset-4"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>

                    <nav aria-label="Sections">
                        <p className="field">On this page</p>
                        <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3">
                            {SITEMAP.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="text-[14px] text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="mt-12 border-t border-border pt-6">
                    <ShareLinks />
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="tabular text-[13px] text-faint">
                        © {FOUNDED}–{year} {NAME}. No trackers, no cookies.
                    </p>
                    <a
                        href="#top"
                        className="group inline-flex w-fit items-center gap-1.5 text-[13.5px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Back to top
                        <ArrowUp className="size-3.5 transition-transform group-hover:-translate-y-px" />
                    </a>
                </div>
            </div>

            {/* The sign-off: the handle, large and very quiet, sliced through
                the middle by the bottom of the page. The box is 0.6em tall
                and the line box is tight enough that the ascenders sit at its
                top edge, so the cut lands mid-bowl at every width. Decoration
                only — see `.footer-mark`. */}
            <div
                aria-hidden
                data-mark={stem}
                className="footer-mark pointer-events-none mt-2 h-[0.6em] overflow-hidden text-center font-display text-[length:min(28vw,440px)] leading-[0.75] font-semibold tracking-[-0.06em] whitespace-nowrap text-foreground/[0.06] select-none sm:mt-4"
            />
        </footer>
    );
}
