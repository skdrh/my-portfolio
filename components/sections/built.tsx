import {Section} from "@/components/section";
import {BUILT} from "@/data/built";
import {GITHUB_HANDLE} from "@/lib/site";

/**
 * The earlier projects as a two-column register: name, then the short
 * version. The same shape as the table in the GitHub profile README, and
 * deliberately lighter than the case studies above it.
 */
export function Built() {
    return (
        <Section
            id="built"
            index={3}
            label="Things I've built"
            title="Earlier builds, most of them open source."
            intro="Where the habits behind the case studies were formed. Smaller, scrappier, and every one of them shipped."
        >
            <ul className="border-t border-border">
                {BUILT.map((item) => (
                    <li
                        key={item.title}
                        className="reveal grid gap-1.5 border-b border-border py-5 sm:grid-cols-[200px_minmax(0,1fr)_auto] sm:items-baseline sm:gap-8"
                    >
                        <p className="font-display text-[16px] font-semibold tracking-[-0.02em] text-foreground">
                            {item.title}
                        </p>
                        <p className="text-pretty text-[14px] leading-6 text-muted-foreground">
                            {item.blurb}
                        </p>
                        <p className="font-mono text-[11px] text-faint sm:text-right">
                            {item.stack.join(" · ")}
                        </p>
                    </li>
                ))}
            </ul>

            <p className="mt-6 font-mono text-[11px] tracking-[0.06em] text-muted-foreground uppercase">
                …plus 20+ more on GitHub, as {GITHUB_HANDLE}
            </p>
        </Section>
    );
}
