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
            index={7}
            label="FAQ"
            title="Quick answers."
            intro="If yours is not here, ask me directly. The form is right below."
        >
            <div className="border-t border-border">
                {FAQS.map((item, i) => (
                    <details
                        key={item.q}
                        open={i === 0}
                        className="group reveal border-b border-border"
                    >
                        <summary className="flex cursor-pointer list-none items-baseline gap-4 py-5 [&::-webkit-details-marker]:hidden">
                            <span className="ref shrink-0 pt-1">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 font-display text-[16px] leading-snug font-semibold tracking-[-0.02em] text-foreground sm:text-[17px]">
                                {item.q}
                            </span>
                            {/* A plus that becomes a minus. Two rules, rotated — no icon
                                dependency and it animates for free. */}
                            <span aria-hidden className="relative mt-1.5 size-3 shrink-0">
                                <span className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-signal" />
                                <span className="absolute top-0 left-1/2 h-3 w-px -translate-x-1/2 bg-signal transition-transform duration-200 group-open:rotate-90 group-open:opacity-0" />
                            </span>
                        </summary>

                        <p className="max-w-3xl pr-8 pb-6 pl-[calc(1rem+1.5ch)] text-pretty text-[14px] leading-7 text-muted-foreground">
                            {item.a}
                        </p>
                    </details>
                ))}
            </div>
        </Section>
    );
}
