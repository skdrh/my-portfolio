"use client";

import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";

/**
 * No mounted flag and no effect.
 *
 * The usual next-themes toggle keeps a `mounted` boolean so it can avoid
 * rendering the wrong icon before hydration — but that means calling setState
 * inside an effect on every single mount, which React 19 flags as a cascading
 * render, and it leaves a blank square in the header until JS arrives.
 *
 * Both icons are rendered instead and CSS picks the visible one off the `dark`
 * class that next-themes puts on <html> before paint. The server and client
 * emit identical markup, so there is nothing to reconcile, and the correct icon
 * is on screen even if hydration never happens. The current theme is read from
 * that same class at click time rather than tracked in React state.
 */
export function ThemeToggle() {
    const {setTheme} = useTheme();

    return (
        <button
            type="button"
            onClick={() =>
                setTheme(
                    document.documentElement.classList.contains("dark") ? "light" : "dark",
                )
            }
            aria-label="Toggle colour theme"
            className="inline-flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
        >
            <Sun className="hidden size-[15px] dark:block" />
            <Moon className="size-[15px] dark:hidden" />
        </button>
    );
}
