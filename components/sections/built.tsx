import {Section} from "@/components/section";
import {BUILT} from "@/data/built";
import {GITHUB_HANDLE} from "@/lib/site";

/**
 * The earlier projects as a register: name, the short version, the stack.
 * The same shape as the table in the GitHub profile README, and deliberately
 * lighter than the case studies above it — no drawings, just the record.
 */
export function Built() {
    return (
        <Section
            id="built"
            title="Earlier builds, most of them open source."
            intro="Where the habits behind the case studies were formed. Smaller, scrappier, and every one of them shipped."
        >
            <ul className="border-t border-border">
                {BUILT.map((item) => (
                    <li
                        key={item.title}
                        className="grid gap-2 border-b border-border py-6 sm:grid-cols-[220px_minmax(0,1fr)_auto] sm:items-baseline sm:gap-10"
                    >
                        <p className="font-display text-[18px] font-semibold tracking-[-0.025em] text-foreground">
                            {item.title}
                        </p>
                        <p className="text-pretty text-[15px] leading-[1.7] text-muted-foreground">
                            {item.blurb}
                        </p>
                        <p className="font-mono text-[12px] text-faint sm:text-right">
                            {item.stack.join(", ")}
                        </p>
                    </li>
                ))}
            </ul>

            <p className="mt-7 text-[14.5px] text-muted-foreground">
                …plus 20+ more on GitHub, as{" "}
                <span className="font-mono text-[13.5px] text-foreground">{GITHUB_HANDLE}</span>.
            </p>
        </Section>
    );
}
