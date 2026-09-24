import {ArrowUp} from "lucide-react";

import {ShareLinks} from "@/components/share-links";
import {Wordmark} from "@/components/wordmark";
import {FOUNDED} from "@/lib/seo";
import {ALIAS, COMPANY, CONTACT_EMAIL, NAME, SITEMAP} from "@/lib/site";

/**
 * The footer indexes every section under its long name (the header uses the
 * short ones), carries the share row, and links nothing the hero already
 * links — the old footer repeated the header nav and every profile, which is
 * where the duplicate anchor texts and a third of the outbound links came from.
 */
export function SiteFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-b border-border">
            <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                <div className="grid gap-10 sm:grid-cols-[1fr_auto] sm:gap-16">
                    <div>
                        <Wordmark />
                        <p className="mt-4 max-w-sm text-pretty text-[13.5px] leading-7 text-muted-foreground">
                            {NAME} ({ALIAS}): software architect, product builder and founder
                            of {COMPANY.name}. Real problems in, real products out.
                        </p>
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="mt-4 inline-block font-mono text-[12.5px] break-all text-foreground underline decoration-signal decoration-2 underline-offset-4"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>

                    <nav aria-label="Sections">
                        <p className="field">On this page</p>
                        <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5">
                            {SITEMAP.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="font-mono text-[12px] text-muted-foreground transition-colors hover:text-foreground"
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
                    <p className="tabular font-mono text-[11px] text-faint">
                        © {FOUNDED}—{year} {NAME} · No trackers · No cookies
                    </p>
                    <a
                        href="#top"
                        className="group inline-flex w-fit items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                    >
                        Back to top
                        <ArrowUp className="size-3 transition-transform group-hover:-translate-y-px" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
