import {BackToTop} from "@/components/back-to-top";
import {JsonLd} from "@/components/json-ld";
import {Built} from "@/components/sections/built";
import {Contact} from "@/components/sections/contact";
import {Experience} from "@/components/sections/experience";
import {Faq} from "@/components/sections/faq";
import {Hero} from "@/components/sections/hero";
import {HowIWork} from "@/components/sections/how-i-work";
import {Now} from "@/components/sections/now";
import {Toolbox} from "@/components/sections/toolbox";
import {Work} from "@/components/sections/work";
import {SiteFooter} from "@/components/site-footer";
import {SiteHeader} from "@/components/site-header";
import {
    builtSchema,
    faqSchema,
    jsonLdGraph,
    organizationSchema,
    worksSchema,
} from "@/lib/seo";

/**
 * The page reads in the order of the GitHub profile README: who I am, what I
 * am building right now, what I have built, what I build it with, how I work,
 * and how to reach me. The title and description come from the root layout.
 */
export default function Home() {
    return (
        <>
            <SiteHeader />

            <main id="content" className="w-full overflow-x-hidden">
                <Hero />
                <Now />
                <Work />
                <Built />
                <Toolbox />
                <Experience />
                <HowIWork />
                <Faq />
                <Contact />
            </main>

            <SiteFooter />
            <BackToTop />

            <JsonLd
                data={jsonLdGraph(organizationSchema(), worksSchema(), builtSchema(), faqSchema())}
            />
        </>
    );
}
