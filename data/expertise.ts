/**
 * What I am actually good at, stated specifically enough to be checkable.
 *
 * Each entry names the systems it came from. That is the point: a portfolio
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
        title: "Offline-first & local-first systems",
        body: "Data on the device rather than behind a request. On-device SQLite as the primary store, an interface that never blocks on the network, and reconciliation across devices once a connection returns — scheduled or live over sockets. Designed for the case where the connection is the unreliable part.",
        evidence: "Bizstock, Quickbeam",
    },
    {
        title: "Multi-tenant architecture",
        body: "Tenant isolation enforced at the data layer, role-based access that decides what each person can reach, and per-tenant configuration that does not fork the codebase. Built so a second customer costs nothing but a row.",
        evidence: "Bizstock, CraftFlow",
    },
    {
        title: "Bilingual & right-to-left interfaces",
        body: "Arabic, Urdu and English as first-class layouts, not a mirrored stylesheet bolted on at the end. Locale-aware routing, formatting and typography, with the data model designed bilingual from the first sketch rather than retrofitted.",
        evidence: "CraftFlow, Al Nada, Bizstock",
    },
    {
        title: "Commerce & payments",
        body: "Headless commerce on a modern CMS, so the marketing team ships product and content without a developer in the loop. Guided product discovery, secure checkout on local payment rails, and the after-sales flows that decide whether a customer comes back.",
        evidence: "Al Nada Store",
    },
    {
        title: "Cross-platform delivery",
        body: "One codebase reaching desktop and mobile as native builds — Tauri and Rust where the app needs to sit on a counter, Flutter where it needs to sit in a pocket. Native capability where it matters: barcode scanning, label printing, camera, filesystem.",
        evidence: "Bizstock, Quickbeam",
    },
    {
        title: "Product from zero",
        body: "Finding the real problem, turning it into requirements someone can build against, designing the interface, writing the system, and shipping it. Every project on this page went from an empty repository to production with me responsible for that whole line.",
        evidence: "All four",
    },
];
