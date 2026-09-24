import {cn} from "@/lib/utils";
import {HANDLE} from "@/lib/site";

/**
 * "skdrh_" with its underscore set in the signal colour (see
 * `.wordmark-caret` in globals.css). The underscore is the handle's real last
 * character, so the text still reads and copies as the handle; it blinks when
 * an enclosing `.group` is hovered or focused.
 */
export function Wordmark({className}: {className?: string}) {
    const stem = HANDLE.replace(/_$/, "");

    return (
        <span
            className={cn(
                "font-display text-[15px] leading-none font-semibold tracking-[-0.03em] text-foreground",
                className,
            )}
        >
            {stem}
            <span className="wordmark-caret">_</span>
        </span>
    );
}
