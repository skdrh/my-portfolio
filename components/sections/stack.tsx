import {Section} from "@/components/section";
import {STACK} from "@/data/stack";

/**
 * The stack as a specification table, not a wall of logos.
 *
 * The previous portfolio rendered thirty framework icons at 100px, which cost
 * a dependency, a lot of bytes, and told the reader nothing they could not get
 * from the words. Set in mono and grouped by job, the same information reads
 * faster and says something the icons could not: which of these I reach for by
 * default, marked with the signal rule.
 */
export function Stack() {
    return (
        <Section
            id="stack"
            index={3}
            label="Stack"
            title="What I build with."
            intro="Everything here appears in shipped work — either in a case study above or a repository in the archive below. Marked entries are what I reach for by default."
        >
            <dl className="border-t border-border">
                {STACK.map((group) => (
                    <div
                        key={group.label}
                        className="reveal grid gap-3 border-b border-border py-6 sm:grid-cols-[160px_1fr] sm:gap-8"
                    >
                        <dt className="field pt-1.5">{group.label}</dt>
                        <dd className="flex flex-wrap gap-x-5 gap-y-2.5">
                            {group.items.map((item) => (
                                <span
                                    key={item.name}
                                    className={
                                        item.core
                                            ? "inline-flex items-center gap-2 font-mono text-[13px] text-foreground"
                                            : "inline-flex items-center gap-2 font-mono text-[13px] text-muted-foreground"
                                    }
                                >
                                    {item.core ? (
                                        <span aria-hidden className="size-1.5 shrink-0 bg-signal" />
                                    ) : (
                                        <span
                                            aria-hidden
                                            className="size-1.5 shrink-0 border border-border-strong"
                                        />
                                    )}
                                    {item.name}
                                </span>
                            ))}
                        </dd>
                    </div>
                ))}
            </dl>

            <p className="mt-5 flex items-center gap-2.5 font-mono text-[10.5px] tracking-[0.08em] text-faint uppercase">
                <span aria-hidden className="size-1.5 shrink-0 bg-signal" />
                Default choice
                <span aria-hidden className="mx-1 h-3 w-px bg-border" />
                <span aria-hidden className="size-1.5 shrink-0 border border-border-strong" />
                Used in production
            </p>
        </Section>
    );
}
