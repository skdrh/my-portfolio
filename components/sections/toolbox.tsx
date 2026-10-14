import {Section} from "@/components/section";
import {TOOLBOX} from "@/data/toolbox";

/**
 * The toolbox as a set of labelled trays, not a wall of logos. Grouped by the
 * job each tool does, it reads faster than thirty icons and costs nothing to
 * load. Two columns on a wide screen, so the groups can be compared side by
 * side; the last tray takes the full width when the count is odd.
 */
export function Toolbox() {
    return (
        <Section
            id="toolbox"
            title="What I build with."
            intro="My tech stack, grouped by the job each part does."
        >
            <dl className="grid gap-px border border-border bg-border md:grid-cols-2">
                {TOOLBOX.map((group, i) => (
                    <div
                        key={group.label}
                        className={`bg-background p-6 sm:p-7 ${
                            i === TOOLBOX.length - 1 && TOOLBOX.length % 2 === 1 ? "md:col-span-2" : ""
                        }`}
                    >
                        <dt className="font-display text-[16px] font-semibold tracking-[-0.02em] text-foreground">
                            {group.label}
                        </dt>
                        <dd className="mt-4 flex flex-wrap gap-1.5">
                            {group.items.map((item) => (
                                <span key={item} className="tag text-[12px] text-foreground/90">
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
