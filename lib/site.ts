/**
 * Single source of truth for who this site is about and where it lives.
 *
 * Everything else — metadata, JSON-LD, sitemap, footer, the contact route —
 * reads from here. Change a value once and the whole site follows.
 *
 * Nothing in this file is invented. Every link and figure is carried over from
 * the previous portfolio's own data, the GitHub profile README, or the case
 * studies published on dragondevs.co. If a fact could not be sourced it is not
 * here, because wrong structured data is worse for SEO than absent structured
 * data.
 */

export const SITE_URL = "https://skdrh.dragondevs.co";

export const NAME = "Salman Khan";

/**
 * The name people can actually search for. "Salman Khan" on its own belongs to
 * a very famous actor, so everywhere the page names its subject — title, H1
 * area, image alt, structured data — the two travel together.
 */
export const ALIAS = "skdrh";

/** The wordmark at the top of every page, repeated in the footer. */
export const HANDLE = "skdrh_";

/** Personal X account — linked on the page and credited on the share card. */
export const X_HANDLE = "skdrh_";

/** LinkedIn username — the hero shows it, the URL is built from it. */
export const LINKEDIN_HANDLE = "skdrh";

export const GITHUB_HANDLE = "skdrh";

/**
 * "Software architect" is the searched term; "product builder" is the part
 * most engineers cannot claim — the idea through the architecture through the
 * deploy, done by one person.
 */
export const ROLE = "Software Architect & Product Builder";

/** 551px at Arial 20px, inside the 580px a results page shows. */
export const SITE_TITLE = `${NAME} (${ALIAS}) — ${ROLE}`;

/**
 * The meta description. Measured rather than guessed: SEO auditors render it
 * in Arial 14px against a 1000px budget, and this is ~945px. The previous
 * copy measured 1684px and was cut off mid-sentence in results.
 */
export const SITE_DESCRIPTION =
    "Salman Khan (skdrh) is a software architect and product builder. " +
    "Founder of dragondevs and maker of Bizstock. Bring a real problem, get a real product.";

/**
 * The one photograph on the site. Named after the handle, described with the
 * full name, and declared as the Person's image in the structured data, so a
 * search for "Salman Khan skdrh" has a face to show.
 */
export const PORTRAIT = {
    src: "/skdrh.jpg",
    width: 1189,
    height: 1280,
    alt: `${NAME} (${ALIAS}), founder of dragondevs, seated in front of the dragondevs logo`,
    caption: `${NAME} (${ALIAS}), founder of dragondevs`,
} as const;

/**
 * Working hours, not an address. The city was removed from the page
 * deliberately; the offset stays because a client scheduling a call genuinely
 * needs it.
 */
export const TIMEZONE = "UTC+5";

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
    x: `https://x.com/${X_HANDLE}`,
    linkedin: `https://www.linkedin.com/in/${LINKEDIN_HANDLE}/`,
    github: `https://github.com/${GITHUB_HANDLE}`,
    whatsapp: `https://wa.me/${WHATSAPP_E164.replace(/[^\d]/g, "")}`,
} as const;

export const COMPANY = {
    name: "dragondevs",
    url: "https://dragondevs.co",
    caseStudies: "https://dragondevs.co/case-studies",
    /** The studio's own profiles — structured data only, not linked here. */
    sameAs: [
        "https://x.com/dragondevs_",
        "https://www.linkedin.com/company/dragondevs/",
        "https://github.com/dragon-devs",
    ],
} as const;

export const PRODUCT = {
    name: "Bizstock",
    url: "https://bizstock.net",
} as const;

/** Year the timeline starts — the single place the "since" figures derive from. */
export const CAREER_START = 2017;

/**
 * The four figures the top of the page leads with.
 *
 * `8+ yrs` and `30+ projects` are floors Salman set himself — a floor stays
 * true as both keep growing. The other two come from the published case
 * studies, so they stay true without anyone maintaining them.
 */
export const FACTS: {figure: string; label: string}[] = [
    {figure: "8+ yrs", label: `building software, since ${CAREER_START}`},
    {figure: "30+", label: "projects shipped end to end"},
    {figure: "4", label: "case studies, written up in full"},
    {figure: "1", label: "person behind Bizstock, start to finish"},
];

/**
 * Header navigation — short labels, because the header is narrow.
 *
 * The footer indexes the same sections under longer names (SITEMAP below).
 * They differ on purpose: the same anchor text on two links is exactly what
 * SEO auditors flag, and the old footer repeated this list word for word.
 */
export const NAV = [
    {href: "#now", label: "Now"},
    {href: "#work", label: "Work"},
    {href: "#built", label: "Built"},
    {href: "#toolbox", label: "Toolbox"},
    {href: "#faq", label: "FAQ"},
] as const;

/** Every section, in page order. Drives the footer index and the mobile menu. */
export const SITEMAP = [
    {href: "#now", label: "Right now"},
    {href: "#work", label: "Case studies"},
    {href: "#built", label: "Things I've built"},
    {href: "#toolbox", label: "Tech stack"},
    {href: "#experience", label: "Experience"},
    {href: "#how-i-work", label: "How I work"},
    {href: "#faq", label: "Questions"},
    {href: "#contact", label: "Contact"},
] as const;
