import {Section} from "@/components/section";
import {EXPERIENCE, STORY} from "@/data/experience";
import {CAREER_START} from "@/lib/site";

/**
 * The story on the left, pinned while the timeline scrolls past on the
 * right — newest first, one node per role on a single drawn line, with the
 * current one live. Roles are not headings: six job titles in the page
 * outline added nothing a reader or a crawler needed.
 */
export function Experience() {
    return (
        <Section
            id="experience"
            layout="split"
            title={`Building since ${CAREER_START}.`}
            intro={STORY.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        >
            <ol className="relative">
                {/* The line the nodes sit on. */}
                <span aria-hidden className="absolute top-2 bottom-2 left-[3.5px] w-px bg-border-strong" />

                {EXPERIENCE.map((role) => (
                    <li key={`${role.from}-${role.company}`} className="relative pb-10 pl-9 last:pb-0">
                        <span
                            aria-hidden
                            className={
                                role.current
                                    ? "pulse-dot absolute top-[7px] left-px"
                                    : "absolute top-[6px] left-0 size-2 border border-border-strong bg-background"
                            }
                        />
                        <time className="tabular font-mono text-[12px] text-muted-foreground">
                            {role.from} — {role.to}
                        </time>
                        <p className="mt-2 font-display text-[19px] leading-snug font-semibold tracking-[-0.025em] text-foreground">
                            {role.title}
                            <span className="font-normal text-muted-foreground">, {role.company}</span>
                        </p>
                        <p className="mt-1.5 max-w-xl text-pretty text-[15px] leading-[1.7] text-muted-foreground">
                            {role.note}
                        </p>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
