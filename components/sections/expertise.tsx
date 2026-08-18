import {Section} from "@/components/section";
import {CAPABILITIES} from "@/data/expertise";

/**
 * Six capabilities, each naming the systems it came from.
 *
 * A two-column grid of hairline-separated blocks — no card fills, no icons.
 * Icons on a list like this are decoration standing in for specificity; the
 * evidence line does the job an icon pretends to.
 */
export function Expertise() {
    return (
        <Section
            id="expertise"
            index={2}
            label="Expertise"
            title="What I am actually good at."
            intro="Stated specifically enough that you can check it. Every claim names the system it came from — the ones above, with the write-ups to match."
        >
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {CAPABILITIES.map((cap, i) => (
                    <article
                        key={cap.title}
                        className="reveal flex flex-col bg-background p-6 sm:p-7"
                    >
                        <div className="flex items-center gap-3">
                            <span className="index-mark">{String(i + 1).padStart(2, "0")}</span>
                            <span aria-hidden className="h-px flex-1 bg-border" />
                        </div>

                        <h3 className="mt-4 font-display text-[17px] leading-snug font-semibold tracking-[-0.025em] text-foreground">
                            {cap.title}
                        </h3>

                        <p className="mt-3 flex-1 text-pretty text-[13.5px] leading-7 text-muted-foreground">
                            {cap.body}
                        </p>

                        <p className="mt-5 flex items-center gap-2 font-mono text-[10.5px] tracking-[0.08em] text-faint uppercase">
                            <span aria-hidden className="h-[3px] w-4 shrink-0 bg-signal" />
                            {cap.evidence}
                        </p>
                    </article>
                ))}
            </div>
        </Section>
    );
}
