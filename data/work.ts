import {COMPANY} from "@/lib/site";

/**
 * The four systems that are worth a stranger's time.
 *
 * Every field is sourced from the case studies published on dragondevs.co,
 * cut down to what a scan picks up: the claim, a sentence or two behind it,
 * and a link to the full write-up. `caseStudy` deep-links rather than
 * duplicating the text here — one canonical copy, on the domain that owns it.
 */
export interface WorkItem {
    slug: string;
    title: string;
    /** What it is, in three words or fewer. */
    category: string;
    /** The one-line claim — the thing worth remembering. */
    headline: string;
    /** What it is and why it matters. Two sentences at most. */
    summary: string;
    year: string;
    status: "Live" | "Active" | "In development";
    stack: string[];
    caseStudy: string;
}

export const WORK: WorkItem[] = [
    {
        slug: "bizstock-inventory-pos-app",
        title: "Bizstock",
        category: "SaaS product",
        headline: "A point-of-sale that never waits for the internet.",
        summary:
            "Offline-first inventory and POS: billing, stock and reports stay instant with no connection, then sync across devices when it's back. Desktop and Android from one codebase, in English and Urdu.",
        year: "2025 — now",
        status: "Active",
        stack: ["Tauri", "Rust", "React", "SQLite", "Drizzle ORM"],
        caseStudy: `${COMPANY.caseStudies}/bizstock-inventory-pos-app`,
    },
    {
        slug: "craftflow-operations-platform",
        title: "CraftFlow",
        category: "Business platform",
        headline: "One workspace instead of spreadsheets and chat threads.",
        summary:
            "A bilingual, role-aware platform for a Saudi design studio: projects, clients, designers, contracts and quotations in one searchable place. A new project now takes minutes to set up.",
        year: "2025",
        status: "Live",
        stack: ["Next.js", "PostgreSQL", "Drizzle ORM", "next-intl"],
        caseStudy: `${COMPANY.caseStudies}/craftflow-operations-platform`,
    },
    {
        slug: "alnada-cooling-ecommerce",
        title: "Al Nada Store",
        category: "E-commerce",
        headline: "A 25-year cooling brand, brought online end to end.",
        summary:
            "Headless, bilingual commerce with a guided product finder, local checkout and service requests. The marketing team runs products and content without a developer.",
        year: "2025",
        status: "Live",
        stack: ["Next.js", "Payload CMS", "PostgreSQL", "PayTabs"],
        caseStudy: `${COMPANY.caseStudies}/alnada-cooling-ecommerce`,
    },
    {
        slug: "quickbeam-offline-file-transfer",
        title: "Quickbeam",
        category: "Cross-platform app",
        headline: "File transfer that falls back instead of failing.",
        summary:
            "Shared Wi-Fi, its own hotspot, or animated QR codes read by the camera, whichever works. A 5 MB file arrived byte-identical at 38.5 MB/s with nothing installed on the receiving device.",
        year: "2026",
        status: "In development",
        stack: ["Flutter", "Dart", "Kotlin"],
        caseStudy: `${COMPANY.caseStudies}/quickbeam-offline-file-transfer`,
    },
];
