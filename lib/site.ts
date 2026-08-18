/**
 * Single source of truth for who this site is about and where it lives.
 *
 * Everything else — metadata, JSON-LD, sitemap, footer, the contact route —
 * reads from here. Change a value once and the whole site follows.
 *
 * Nothing in this file is invented. Every link and figure is carried over from
 * the previous portfolio's own data or from the case studies published on
 * dragondevs.co. If a fact could not be sourced it is not here, because wrong
 * structured data is worse for SEO than absent structured data.
 */

export const SITE_URL = "https://salman.dragondevs.co";

export const NAME = "Salman Khan";

/** Used in the wordmark and the <title> template. */
export const HANDLE = "salman khan";

export const ROLE = "Full-stack Product Engineer";

/**
 * The one-sentence version, used for meta description, OG and JSON-LD.
 * Written to read as a sentence, not a keyword list — search engines have
 * penalised the latter for years and humans never liked it.
 */
export const SITE_DESCRIPTION =
    "Salman Khan is a full-stack product engineer building offline-first software, " +
    "multi-tenant business systems and bilingual commerce platforms end to end — " +
    "architecture, interface and code. Founder of dragondevs.";

export const LOCATION = {
    city: "Islamabad",
    country: "Pakistan",
    countryCode: "PK",
    timezone: "UTC+5",
} as const;

/**
 * Contact address shown on the page and used as the mailto: target.
 *
 * NOTE: carried over from the previous portfolio's own data. If a
 * salman@dragondevs.co mailbox exists, swapping it here updates the page,
 * the footer, the JSON-LD and the contact route's fallback copy at once.
 */
export const CONTACT_EMAIL = "starsalman01@gmail.com";

/** Shared click-to-chat number, same as dragondevs and bizstock. */
export const WHATSAPP_E164 = "+923466955928";

export const SOCIALS = {
    github: "https://github.com/skdrh",
    githubOrg: "https://github.com/dragon-devs",
    linkedin: "https://www.linkedin.com/in/skdrh/",
    x: "https://x.com/dragondevs_",
} as const;

export const COMPANY = {
    name: "dragondevs",
    url: "https://dragondevs.co",
    caseStudies: "https://dragondevs.co/case-studies",
} as const;

/** Year the timeline starts — the single place the "since" figures derive from. */
export const CAREER_START = 2017;

export const YEARS_BUILDING = new Date().getFullYear() - CAREER_START;

/**
 * The four figures the top of the page leads with.
 *
 * `28+ projects` is carried over verbatim from the previous portfolio; the
 * other three are derived from the timeline and the published case studies,
 * so they stay true without anyone maintaining them.
 */
export const FACTS: {figure: string; label: string}[] = [
    {figure: `${YEARS_BUILDING} yrs`, label: `building software, since ${CAREER_START}`},
    {figure: "4", label: "production systems, written up as case studies"},
    {figure: "28+", label: "projects delivered end to end"},
    {figure: "2", label: "products of my own in the market"},
];

/** Primary nav — also drives the scroll-spy and the mobile sheet. */
export const NAV = [
    {href: "#work", label: "Work"},
    {href: "#expertise", label: "Expertise"},
    {href: "#stack", label: "Stack"},
    {href: "#experience", label: "Experience"},
    {href: "#faq", label: "FAQ"},
    {href: "#contact", label: "Contact"},
] as const;
