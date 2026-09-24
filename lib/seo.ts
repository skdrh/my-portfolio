import {BUILT} from "@/data/built";
import {FAQS} from "@/data/faq";
import {WORK} from "@/data/work";
import {
    ALIAS,
    CAREER_START,
    COMPANY,
    CONTACT_EMAIL,
    HANDLE,
    NAME,
    PORTRAIT,
    ROLE,
    SITE_DESCRIPTION,
    SITE_TITLE,
    SITE_URL,
    SOCIALS,
} from "@/lib/site";

/**
 * Structured data for the site.
 *
 * The rule followed throughout: only emit a property that is true and
 * verifiable from the page itself. Google treats fabricated structured data
 * as spam, and a Person schema claiming awards or ratings that appear nowhere
 * on the page is exactly the pattern its spam systems look for. So there is no
 * `award` and no `aggregateRating`. There is no address either: the page
 * deliberately does not state a location, and a Person.address asserting a
 * locality the page never mentions is the kind of inconsistency that gets a
 * schema block discounted.
 */

const PERSON_ID = `${SITE_URL}/#person`;
const SITE_ID = `${SITE_URL}/#website`;
const PORTRAIT_ID = `${SITE_URL}/#portrait`;
const ORG_ID = `${COMPANY.url}/#organization`;

/** Absolute URL of the portrait — what crawlers and share cards fetch. */
export const PORTRAIT_URL = `${SITE_URL}${PORTRAIT.src}`;

/**
 * The portrait as its own node, so the Person (`image`) and the page
 * (`primaryImageOfPage`) point at one image rather than describing it twice.
 * The caption carries the full name and the handle: that pairing is what lets
 * an image search for "Salman Khan skdrh" resolve to this person.
 */
export function portraitSchema() {
    return {
        "@type": "ImageObject",
        "@id": PORTRAIT_ID,
        url: PORTRAIT_URL,
        contentUrl: PORTRAIT_URL,
        width: PORTRAIT.width,
        height: PORTRAIT.height,
        caption: PORTRAIT.caption,
        description: PORTRAIT.alt,
        representativeOfPage: true,
    };
}

export function personSchema() {
    return {
        "@type": "Person",
        "@id": PERSON_ID,
        name: NAME,
        givenName: "Salman",
        familyName: "Khan",
        alternateName: [ALIAS, HANDLE, `${NAME} (${ALIAS})`],
        url: SITE_URL,
        image: {"@id": PORTRAIT_ID},
        // Several titles rather than one: the work spans architecture,
        // engineering and running the company, and each is a distinct query.
        jobTitle: ["Software Architect", "Product Builder", "Full-stack Engineer", "Founder"],
        description: SITE_DESCRIPTION,
        email: `mailto:${CONTACT_EMAIL}`,
        // Profiles of the person only. The company is related through
        // `worksFor`, not claimed as another name for the same person.
        sameAs: [SOCIALS.x, SOCIALS.linkedin, SOCIALS.github],
        // Named inline as well as by @id: this node ships in the layout's
        // block and the full Organization in the page's, and a reader that
        // does not join the two should still know who the employer is.
        worksFor: {
            "@type": "Organization",
            "@id": ORG_ID,
            name: COMPANY.name,
            url: COMPANY.url,
        },
        // Each of these is backed by something on the page — a case study,
        // a current project, or the toolbox.
        knowsAbout: [
            "Software architecture",
            "Product development",
            "Full-stack web development",
            "Offline-first software",
            "Multi-tenant SaaS",
            "Inventory and point-of-sale software",
            "Headless e-commerce",
            "Bilingual and right-to-left interfaces",
            "Cross-platform app development",
            "Deployment and DevOps",
            "AI integration",
            "TypeScript",
            "Next.js",
            "React",
            "Node.js",
            "Python",
            "Django",
            "PostgreSQL",
            "Tauri",
            "Flutter",
        ],
        knowsLanguage: ["en", "ur"],
        hasOccupation: {
            "@type": "Occupation",
            name: ROLE,
        },
    };
}

/**
 * dragondevs as a node in this graph.
 *
 * `worksFor` above points at `${COMPANY.url}/#organization`, the same @id the
 * dragondevs site declares — and that site names this page's Person as its
 * founder under this page's @id. The two graphs reconcile in both directions.
 */
export function organizationSchema() {
    return {
        "@type": "Organization",
        "@id": ORG_ID,
        name: COMPANY.name,
        url: COMPANY.url,
        description:
            "dragondevs builds SEO-friendly websites, custom software and full-stack web apps, taking products from idea to deployment.",
        founder: {"@id": PERSON_ID},
        sameAs: COMPANY.sameAs,
    };
}

/**
 * FAQPage, generated from the same array the section renders.
 *
 * Google requires every answer marked up here to be visible on the page. It
 * is — the <details> elements ship their text in the DOM whether open or not —
 * so this is eligible rather than a manual-action risk.
 */
export function faqSchema() {
    return {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQS.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {"@type": "Answer", text: item.a},
        })),
    };
}

export function websiteSchema() {
    return {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE_URL,
        // The site name Google shows above the result. Short, and carrying the
        // handle so it cannot be read as anyone else's site.
        name: `${NAME} (${ALIAS})`,
        alternateName: [ALIAS, NAME],
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: {"@id": PERSON_ID},
    };
}

export function profilePageSchema() {
    return {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: SITE_TITLE,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        isPartOf: {"@id": SITE_ID},
        about: {"@id": PERSON_ID},
        mainEntity: {"@id": PERSON_ID},
        primaryImageOfPage: {"@id": PORTRAIT_ID},
        dateModified: new Date().toISOString().slice(0, 10),
    };
}

/**
 * The four case studies, as CreativeWork. `url` deliberately points at the
 * canonical write-up on dragondevs.co rather than at an anchor here — that is
 * where the full text lives, and pointing anywhere else would be a duplicate
 * content claim.
 */
export function worksSchema() {
    return {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#work`,
        name: "Selected work",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: WORK.length,
        itemListElement: WORK.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "CreativeWork",
                name: item.title,
                headline: item.headline,
                description: item.summary,
                url: item.caseStudy,
                dateCreated: item.year.slice(0, 4),
                creator: {"@id": PERSON_ID},
                keywords: item.stack.join(", "),
                genre: item.category,
            },
        })),
    };
}

/** The earlier projects with public source, as SoftwareSourceCode. */
export function builtSchema() {
    const withRepos = BUILT.filter((item) => item.repo);

    return {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#built`,
        name: "Things I've built",
        numberOfItems: withRepos.length,
        itemListElement: withRepos.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "SoftwareSourceCode",
                name: item.title,
                description: item.blurb,
                codeRepository: item.repo,
                programmingLanguage: item.stack,
                author: {"@id": PERSON_ID},
            },
        })),
    };
}

/**
 * A single @graph rather than several loose blocks. One script tag, one
 * parse, and the @id cross-references actually resolve — which is what lets
 * Google connect the person to the portrait and the work instead of reading
 * a pile of orphans.
 */
export function jsonLdGraph(...nodes: object[]) {
    return {
        "@context": "https://schema.org",
        "@graph": nodes,
    };
}

/** Keyword set for <meta name="keywords">, and a useful record of intent. */
export const KEYWORDS = [
    // Brand — the queries that should land here first.
    "Salman Khan skdrh",
    "skdrh",
    "skdrh_",
    "Salman Khan developer",
    "Salman Khan software architect",
    "Salman Khan dragondevs",
    "dragondevs founder",
    "Bizstock founder",
    // Role
    "software architect",
    "product builder",
    "end-to-end product builder",
    "full-stack engineer",
    "Next.js developer",
    "TypeScript developer",
    // Specialism — the differentiated, low-competition terms
    "offline-first software",
    "multi-tenant SaaS",
    "inventory and POS software",
    "offline file transfer app",
    // Intent
    "hire software architect",
    "hire full-stack developer",
    "remote software architect",
];

/** Earliest year on the timeline — used for the copyright range in the footer. */
export const FOUNDED = CAREER_START;
