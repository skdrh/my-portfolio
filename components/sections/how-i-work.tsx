import {Section} from "@/components/section";
import {PRINCIPLES} from "@/data/principles";

/**
 * Three rules, set as large as they deserve. The rule is the display line;
 * the reason sits under it in the reading face.
 */
export function HowIWork() {
    return (
        <Section id="how-i-work" index={6} label="How I work" title="Three rules, every project.">
            <ol className="grid gap-px border border-border bg-border md:grid-cols-3">
                {PRINCIPLES.map((item, i) => (
                    <li key={item.rule} className="reveal flex flex-col bg-background p-6 sm:p-8">
                        <span className="ref">{String(i + 1).padStart(2, "0")}</span>
                        <p className="mt-5 font-display text-[26px] leading-[1.1] font-semibold tracking-[-0.035em] text-foreground sm:text-[30px]">
                            {item.rule}
                        </p>
                        <p className="mt-3 text-pretty text-[14px] leading-7 text-muted-foreground">
                            {item.why}
                        </p>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
