import {Section} from "@/components/section";
import {EXPERIENCE} from "@/data/experience";
import {CAREER_START} from "@/lib/site";

/**
 * The timeline, newest first, as hairline rows with the years in a mono gutter.
 *
 * No vertical connector line, no dots-on-a-string, no alternating sides. The
 * years are already a sequence; drawing a rail beside them just repeats in
 * pixels what the numbers say in text.
 */
export function Experience() {
    return (
        <Section
            id="experience"
            index={4}
            label="Experience"
            title={`Building since ${CAREER_START}.`}
            intro="Graphic design, then freelance code, then three years of deliberate self-teaching, then products. The early entries are kept because they are where the eye and the habits came from."
        >
            <ol className="border-t border-border">
                {EXPERIENCE.map((role) => (
                    <li
                        key={`${role.from}-${role.company}`}
                        className="reveal grid gap-3 border-b border-border py-7 sm:grid-cols-[160px_1fr] sm:gap-8"
                    >
                        <div className="flex items-center gap-2 sm:block">
                            <time className="tabular block font-mono text-[11px] tracking-[0.06em] text-foreground">
                                {role.from} — {role.to}
                            </time>
                            {role.current ? (
                                <span className="mt-2 hidden items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase sm:inline-flex">
                                    <span className="pulse-dot" aria-hidden />
                                    Current
                                </span>
                            ) : null}
                        </div>

                        <div className="min-w-0">
                            <h3 className="font-display text-[17px] leading-snug font-semibold tracking-[-0.025em] text-foreground">
                                {role.title}
                            </h3>
                            <p className="mt-1 font-mono text-[11.5px] text-muted-foreground">
                                {role.company}
                            </p>
                            <p className="mt-3 max-w-2xl text-pretty text-[13.5px] leading-7 text-muted-foreground">
                                {role.description}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-1.5">
                                {role.tags.map((tag) => (
                                    <li key={tag} className="chip">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
