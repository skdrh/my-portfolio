import {MobileNav} from "@/components/mobile-nav";
import {ThemeToggle} from "@/components/theme-toggle";
import {Wordmark} from "@/components/wordmark";
import {HANDLE, NAV} from "@/lib/site";

/**
 * A floating bar: inset from the viewport edges, frosted rather than opaque,
 * so the hero's drawing ground runs underneath it and the page reads as one
 * sheet instead of a sheet with a lid on it.
 *
 * The frost is its own layer behind the bar's contents, not a class on the
 * bar. `backdrop-filter` makes an element the containing block for every
 * `position: fixed` descendant, and the mobile menu is one — on the bar
 * itself it would open as a 56px strip instead of a full-screen sheet.
 */
export function SiteHeader() {
    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4">
            <div className="pointer-events-auto relative isolate mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 border border-border pr-2.5 pl-4 shadow-[0_12px_32px_-20px_rgb(4_10_24/0.55)] sm:pl-6">
                <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-background/70 backdrop-blur-xl backdrop-saturate-150"
                />

                {/* Back to the hero rather than a reload of the same page. */}
                <a
                    href="#top"
                    className="group -m-2 flex items-baseline p-2"
                    aria-label={`${HANDLE} — back to the top`}
                >
                    <Wordmark />
                </a>

                <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
                    {NAV.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="hidden h-9 items-center bg-signal-solid px-4 font-mono text-[11px] tracking-[0.08em] text-signal-on-solid uppercase transition-opacity hover:opacity-90 sm:inline-flex"
                    >
                        Get in touch
                    </a>
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
