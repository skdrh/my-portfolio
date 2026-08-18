import Link from "next/link";

import {MobileNav} from "@/components/mobile-nav";
import {ThemeToggle} from "@/components/theme-toggle";
import {HANDLE, NAV} from "@/lib/site";

/**
 * Opaque, not glass. At any transparency the hairline rules between sections
 * ghost through as they slide underneath, which reads as a second, crooked
 * border chasing the header down the page.
 */
export function SiteHeader() {
    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
                <Link
                    href="/"
                    className="group flex items-baseline gap-2.5"
                    aria-label={`${HANDLE} — home`}
                >
                    <span className="font-display text-[15px] leading-none font-semibold tracking-[-0.03em] text-foreground">
                        {HANDLE}
                    </span>
                    <span
                        aria-hidden
                        className="hidden h-[3px] w-4 bg-signal transition-all duration-300 group-hover:w-7 sm:block"
                    />
                </Link>

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
