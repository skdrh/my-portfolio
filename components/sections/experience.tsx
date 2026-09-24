import {Section} from "@/components/section";
import {EXPERIENCE} from "@/data/experience";
import {CAREER_START} from "@/lib/site";

/**
 * The timeline, newest first, one hairline row per role with the years in a
 * mono gutter. Roles are not headings: six job titles in the page outline
 * added nothing a reader or a crawler needed.
 */
export function Experience() {
    return (
        <Section id="experience" index={5} label="Experience" title={`Building since ${CAREER_START}.`}>
            <ol className="border-t border-border">
                {EXPERIENCE.map((role) => (
                    <li
                        key={`${role.from}-${role.company}`}
                        className="reveal grid gap-2 border-b border-border py-5 sm:grid-cols-[160px_1fr] sm:gap-8"
                    >
                        <p className="flex items-center gap-2.5">
                            <time className="tabular font-mono text-[11px] tracking-[0.06em] text-foreground">
                                {role.from} — {role.to}
                            </time>
                            {role.current ? <span className="pulse-dot" aria-hidden /> : null}
                        </p>
                        <div className="min-w-0">
                            <p className="font-display text-[16px] leading-snug font-semibold tracking-[-0.02em] text-foreground">
                                {role.title}
                                <span className="font-mono text-[12px] font-normal text-muted-foreground">
                                    {" "}
                                    · {role.company}
                                </span>
                            </p>
                            <p className="mt-1 text-pretty text-[14px] leading-6 text-muted-foreground">
                                {role.note}
                            </p>
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
