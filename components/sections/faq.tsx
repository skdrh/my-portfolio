import {Section} from "@/components/section";
import {FAQS} from "@/data/faq";

/**
 * Plain <details> elements — no accordion library, no client component.
 *
 * The first is open by default so the section never reads as an empty list,
 * and every answer is real text in the DOM whether it is expanded or not,
 * which is what makes the FAQPage markup on this page legitimate. The
 * question is the <summary> itself rather than a heading inside it.
 */
export function Faq() {
    return (
        <Section
            id="faq"
            layout="split"
            title="Quick answers."
            intro="If yours is not here, ask me directly. The form is right below."
        >
            <div className="border-t border-border">
                {FAQS.map((item, i) => (
                    <details key={item.q} open={i === 0} className="group border-b border-border">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                            <span className="font-display text-[18px] leading-snug font-semibold tracking-[-0.025em] text-foreground transition-colors group-hover:text-signal-ink sm:text-[19px]">
                                {item.q}
                            </span>
                            {/* A plus that becomes a minus. Two rules, rotated — no icon
                                dependency and it animates for free. */}
                            <span aria-hidden className="relative mt-2 size-3.5 shrink-0">
                                <span className="absolute top-1/2 left-0 h-[1.5px] w-3.5 -translate-y-1/2 bg-signal" />
                                <span className="absolute top-0 left-1/2 h-3.5 w-[1.5px] -translate-x-1/2 bg-signal transition-transform duration-200 group-open:rotate-90 group-open:opacity-0" />
                            </span>
                        </summary>

                        <p className="max-w-2xl pr-10 pb-7 text-pretty text-[15.5px] leading-[1.75] text-muted-foreground">
                            {item.a}
                        </p>
                    </details>
                ))}
            </div>
        </Section>
    );
}
