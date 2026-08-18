import {COMPANY} from "@/lib/site";

/**
 * The four systems that are worth a stranger's time.
 *
 * Every field is sourced from the case studies published on dragondevs.co —
 * same wording, trimmed to portfolio length. `caseStudy` deep-links to the
 * full write-up rather than duplicating it here, which is both the honest
 * thing and the right thing for SEO: one canonical copy of that text, on the
 * domain that owns it.
 */
export interface WorkItem {
    slug: string;
    title: string;
    /** What it is, in four words or fewer. */
    category: string;
    /** The one-line claim — the thing worth remembering. */
    headline: string;
    /** Two or three sentences: the problem, then what was built. */
    summary: string;
    /** The outcome, stated plainly. No invented percentages. */
    outcome: string;
    /** What I was actually responsible for. */
    role: string;
    year: string;
    status: "Live" | "Active" | "In development";
    stack: string[];
    caseStudy: string;
    liveUrl?: string;
}

export const WORK: WorkItem[] = [
    {
        slug: "bizstock-inventory-pos-app",
        title: "Bizstock",
        category: "SaaS Product",
        headline: "A point-of-sale that never waits for the internet.",
        summary:
            "Inventory and POS tools quietly assume a reliable connection and a browser open all day. On a real shop floor neither holds. Bizstock is built local-first: data lives on the device in SQLite, so billing, stock, ledgers and reports stay instant and fully usable offline, then reconcile across devices when a connection returns.",
        outcome:
            "Ships to desktop and Android from one codebase, works offline by design, and serves users in English and Urdu including full right-to-left layouts.",
        role: "Product, architecture, UX and build",
        year: "2025 — present",
        status: "Active",
        stack: ["React", "TypeScript", "Tauri", "Rust", "SQLite", "Drizzle ORM", "Socket.IO"],
        caseStudy: `${COMPANY.caseStudies}/bizstock-inventory-pos-app`,
        liveUrl: "https://bizstock.net",
    },
    {
        slug: "craftflow-operations-platform",
        title: "CraftFlow",
        category: "Business Platform",
        headline: "One workspace replacing a studio's spreadsheets and chat threads.",
        summary:
            "A Saudi design and craft studio had outgrown its tools — projects, clients, designer assignments, contracts and quotations scattered across files and chat, so answering what is the status of this job meant hunting through half a dozen places. I built a single source of truth: bilingual, role-aware, searchable.",
        outcome:
            "Setting up a new project takes minutes, quotations follow a consistent template, and management has a live view of the whole pipeline in a language everyone on the team reads comfortably.",
        role: "Product, data model, bilingual UI and full-stack build",
        year: "2025",
        status: "Live",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "NextAuth", "next-intl"],
        caseStudy: `${COMPANY.caseStudies}/craftflow-operations-platform`,
        liveUrl: "https://craftksa.com",
    },
    {
        slug: "alnada-cooling-ecommerce",
        title: "Al Nada Store",
        category: "E-commerce",
        headline: "A 25-year cooling brand, brought online end to end.",
        summary:
            "Al Nada had a deep product range — portable units through central systems — and no modern way to sell or support online. I built a headless commerce and content platform with a bilingual storefront, a guided flow that helps shoppers find the right cooler for their space, secure local checkout, and maintenance and quote requests.",
        outcome:
            "An established offline brand now sells and supports online, and the marketing team publishes products, pricing and content without a developer.",
        role: "Platform architecture, storefront and CMS integration",
        year: "2025",
        status: "Live",
        stack: ["Next.js", "Payload CMS", "PostgreSQL", "PayTabs", "Tailwind CSS"],
        caseStudy: `${COMPANY.caseStudies}/alnada-cooling-ecommerce`,
        liveUrl: "https://alnada.sa",
    },
    {
        slug: "quickbeam-offline-file-transfer",
        title: "Quickbeam",
        category: "Cross-platform App",
        headline: "File transfer that falls back instead of failing — down to sending data as light.",
        summary:
            "Every way of moving a file between two devices assumes something: an account, an internet connection, the same app on both ends, or a cable. Quickbeam picks the best channel available and degrades gracefully. On a shared network the sender runs a small web server and the other end collects files in an ordinary browser. With no shared network it hosts its own hotspot. With no radio at all it encodes the file into animated QR frames and the other device's camera reads them back.",
        outcome:
            "Verified end to end: a 5 MB file arriving byte-identical over LAN at 38.5 MB/s, with nothing installed on the receiving device. Encrypted transfers and saved pairings are the next milestones.",
        role: "Product and engineering",
        year: "2026",
        status: "In development",
        stack: ["Flutter", "Dart", "Kotlin", "Fountain codes"],
        caseStudy: `${COMPANY.caseStudies}/quickbeam-offline-file-transfer`,
    },
];
