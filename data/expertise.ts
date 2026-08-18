/**
 * What I am actually good at, ordered the way the work happens: architecture
 * first, then the engineering, then the business the product has to survive in.
 *
 * Each entry names the systems it came from. That is the point — a portfolio
 * claim with no artefact behind it is a wish, and the people worth impressing
 * can tell the difference at a glance.
 */
export interface Capability {
    title: string;
    body: string;
    /** Titles from WORK that demonstrate this. Kept as plain strings so the
     *  two files stay independent — this is display copy, not a join key. */
    evidence: string;
}

export const CAPABILITIES: Capability[] = [
    {
        title: "Architecture that survives growth",
        body: "The shape of a system is decided in the first week and paid for every week after. I design for the load that is coming rather than the load that is here: data models that do not need rewriting at ten times the volume, boundaries drawn so features slot in instead of tangling, and the expensive decisions taken deliberately and written down.",
        evidence: "Bizstock, CraftFlow",
    },
    {
        title: "Offline-first & local-first systems",
        body: "Data on the device rather than behind a request. On-device SQLite as the primary store, an interface that never blocks on the network, and reconciliation across devices once a connection returns — scheduled or live over sockets. Designed for the case where the connection is the unreliable part.",
        evidence: "Bizstock, Quickbeam",
    },
    {
        title: "Multi-tenant SaaS",
        body: "Tenant isolation enforced at the data layer, role-based access that decides what each person can reach, and per-tenant configuration that does not fork the codebase. Built so a second customer costs nothing but a row, and the thousandth costs nothing more.",
        evidence: "Bizstock, CraftFlow",
    },
    {
        title: "Full-stack engineering",
        body: "Frontend, backend, database and native builds, because splitting them across people is what creates the seams products fail at. TypeScript and Next.js for most of it, Python and Django where the problem is data-shaped, Rust via Tauri when it has to ship as a real desktop and Android application from one codebase.",
        evidence: "All four",
    },
    {
        title: "Bilingual & right-to-left interfaces",
        body: "Arabic, Urdu and English as first-class layouts, not a mirrored stylesheet bolted on at the end. Locale-aware routing, formatting and typography, with the data model designed bilingual from the first sketch rather than retrofitted.",
        evidence: "CraftFlow, Al Nada, Bizstock",
    },
    {
        title: "The business around the product",
        body: "Pricing, licensing, trials and the unit economics that decide whether a product is a business or a hobby. Bizstock has a licence model, a trial that converts and a support channel because I designed those the same way I designed its database — as parts of the system, not as an afterthought.",
        evidence: "Bizstock",
    },
    {
        title: "Positioning & go-to-market",
        body: "Working out who the product is for, what it should say to them, and where they will hear it. That means the landing page, the copy, the search strategy and the launch — the difference between software that exists and software people find. Every site in this list, including this one, is mine.",
        evidence: "Bizstock, dragondevs",
    },
    {
        title: "Product from zero",
        body: "Finding the real problem, turning it into requirements someone can build against, designing the interface, writing the system, shipping it, and then selling it. Every project on this page went from an empty repository to production with me responsible for that whole line.",
        evidence: "All four",
    },
];
