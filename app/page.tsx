import type {Metadata} from "next";

import {JsonLd} from "@/components/json-ld";
import {Archive} from "@/components/sections/archive";
import {Contact} from "@/components/sections/contact";
import {Experience} from "@/components/sections/experience";
import {Faq} from "@/components/sections/faq";
import {Expertise} from "@/components/sections/expertise";
import {Hero} from "@/components/sections/hero";
import {Stack} from "@/components/sections/stack";
import {Work} from "@/components/sections/work";
import {SiteFooter} from "@/components/site-footer";
import {SiteHeader} from "@/components/site-header";
import {
    archiveSchema,
    faqSchema,
    jsonLdGraph,
    organizationSchema,
    worksSchema,
} from "@/lib/seo";
import {NAME, ROLE} from "@/lib/site";

export const metadata: Metadata = {
    title: `${NAME} — ${ROLE}`,
    alternates: {canonical: "/"},
};

export default function Home() {
    return (
        <>
            <SiteHeader />

            <main id="content" className="w-full overflow-x-hidden">
                <Hero />
                <Work />
                <Expertise />
                <Stack />
                <Experience />
                <Archive />

                {/* Philosophy — three lines, set as large as they deserve. The
                    quote the old site buried under an about-paragraph, given
                    the room it was always worth. */}
                <section className="border-b border-border">
                    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
                        <p className="callout">Philosophy</p>
                        <div className="reveal mt-8 max-w-3xl space-y-1 font-display text-[26px] leading-[1.15] font-semibold tracking-[-0.035em] text-foreground sm:text-[42px]">
                            <p>Find the real problem.</p>
                            <p className="text-muted-foreground">Build the smallest thing that solves it.</p>
                            <p>Make it work when conditions do not.</p>
                        </div>
                        <p className="mt-8 font-mono text-[11.5px] text-muted-foreground">
                            &ldquo;Simplicity is the key to brilliance&rdquo; — Bruce Lee
                        </p>
                    </div>
                </section>

                <Faq />
                <Contact />
            </main>

            <SiteFooter />

            <JsonLd
                data={jsonLdGraph(
                    organizationSchema(),
                    worksSchema(),
                    archiveSchema(),
                    faqSchema(),
                )}
            />
        </>
    );
}
