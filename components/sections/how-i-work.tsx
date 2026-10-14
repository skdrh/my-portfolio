import {Section} from "@/components/section";
import {PRINCIPLES} from "@/data/principles";

/**
 * Three rules, set as large as they deserve — the rule as a display line
 * across the page, the reason beside it in the reading face. Rows rather than
 * cards: they are one list read top to bottom, not three things to compare.
 */
export function HowIWork() {
    return (
        <Section id="how-i-work" title="Three rules, every project." className="bg-surface/60">
            <ul className="border-t border-border-strong">
                {PRINCIPLES.map((item) => (
                    <li
                        key={item.rule}
                        className="grid gap-3 border-b border-border-strong py-8 sm:py-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-baseline lg:gap-12"
                    >
                        <p className="font-display text-[34px] leading-[1.02] font-semibold tracking-[-0.045em] text-foreground sm:text-[50px] lg:text-[58px]">
                            {item.rule}
                        </p>
                        <p className="max-w-md text-pretty text-[16px] leading-[1.7] text-muted-foreground sm:text-[17px]">
                            {item.why}
                        </p>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
