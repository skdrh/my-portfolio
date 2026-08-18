import {ARCHIVE} from "@/data/archive";
import {WORK} from "@/data/work";
import {
    CAREER_START,
    COMPANY,
    CONTACT_EMAIL,
    LOCATION,
    NAME,
    ROLE,
    SITE_DESCRIPTION,
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
 * `award`, no `aggregateRating`, and no street address — only the locality,
 * which is all that is confirmed.
 */

const PERSON_ID = `${SITE_URL}/#person`;
const SITE_ID = `${SITE_URL}/#website`;
const ORG_ID = `${COMPANY.url}/#organization`;

export function personSchema() {
    return {
        "@type": "Person",
        "@id": PERSON_ID,
        name: NAME,
        url: SITE_URL,
        jobTitle: ROLE,
        description: SITE_DESCRIPTION,
        email: `mailto:${CONTACT_EMAIL}`,
        address: {
            "@type": "PostalAddress",
            addressLocality: LOCATION.city,
            addressCountry: LOCATION.countryCode,
        },
        // Only real, in-use profiles. A dead link here is worse than none.
        sameAs: [SOCIALS.github, SOCIALS.linkedin, SOCIALS.x, COMPANY.url],
        worksFor: {
            "@type": "Organization",
            "@id": ORG_ID,
            name: COMPANY.name,
            url: COMPANY.url,
        },
        // Mirrors the Expertise section — these are claims the page backs up.
        knowsAbout: [
            "Offline-first software architecture",
            "Local-first data synchronisation",
            "Multi-tenant SaaS architecture",
            "Full-stack web development",
            "Bilingual and right-to-left interface design",
            "Headless e-commerce",
            "Cross-platform application development",
            "TypeScript",
            "Next.js",
            "React",
            "Python",
            "Django",
            "PostgreSQL",
            "Tauri",
        ],
        knowsLanguage: ["en", "ur"],
        hasOccupation: {
            "@type": "Occupation",
            name: ROLE,
            occupationLocation: {
                "@type": "Country",
                name: LOCATION.country,
            },
        },
        // Employment history, straight off the timeline on the page.
        workLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                addressLocality: LOCATION.city,
                addressCountry: LOCATION.countryCode,
            },
        },
    };
}

export function websiteSchema() {
    return {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE_URL,
        name: `${NAME} — ${ROLE}`,
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
        name: `${NAME} — ${ROLE}`,
        isPartOf: {"@id": SITE_ID},
        about: {"@id": PERSON_ID},
        mainEntity: {"@id": PERSON_ID},
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

/** The open-source archive, as SoftwareSourceCode. Only entries with a repo. */
export function archiveSchema() {
    const withRepos = ARCHIVE.filter((a) => a.repo);

    return {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#archive`,
        name: "Open-source archive",
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
 * Google connect the person to the work instead of reading five orphans.
 */
export function jsonLdGraph(...nodes: object[]) {
    return {
        "@context": "https://schema.org",
        "@graph": nodes,
    };
}

/** Keyword set for <meta name="keywords">, and a useful record of intent. */
export const KEYWORDS = [
    "Salman Khan developer",
    "full-stack developer Pakistan",
    "full-stack product engineer",
    "Next.js developer",
    "TypeScript developer",
    "React developer Islamabad",
    "offline-first developer",
    "local-first software engineer",
    "multi-tenant SaaS developer",
    "Tauri developer",
    "Django developer",
    "hire full-stack engineer",
    "freelance software engineer Pakistan",
    "bilingual RTL web developer",
    "dragondevs",
];

/** Earliest year on the timeline — used for the copyright range in the footer. */
export const FOUNDED = CAREER_START;

