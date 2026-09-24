import {Section} from "@/components/section";
import {TOOLBOX} from "@/data/toolbox";

/**
 * The toolbox as a specification table, not a wall of logos. Set in mono and
 * grouped by job, it reads faster than thirty icons and costs nothing to load.
 */
export function Toolbox() {
    return (
        <Section id="toolbox" index={4} label="Toolbox" title="What I build with.">
            <dl className="border-t border-border">
                {TOOLBOX.map((group) => (
                    <div
                        key={group.label}
                        className="reveal grid gap-3 border-b border-border py-5 sm:grid-cols-[160px_1fr] sm:gap-8"
                    >
                        <dt className="field pt-1">{group.label}</dt>
                        <dd className="flex flex-wrap gap-x-5 gap-y-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-2 font-mono text-[13px] text-foreground"
                                >
                                    <span aria-hidden className="size-1.5 shrink-0 bg-signal" />
                                    {item}
                                </span>
                            ))}
                        </dd>
                    </div>
                ))}
            </dl>
        </Section>
    );
}
