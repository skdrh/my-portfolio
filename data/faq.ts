/**
 * Questions people actually type before they hire someone.
 *
 * This section exists for two reasons and both matter. It answers the things
 * that otherwise arrive as a first email — availability, location, how an
 * engagement starts — and it gives search engines substantive prose matching
 * real queries ("offline first developer", "hire full stack engineer
 * Pakistan"), which a page of headlines and tags cannot.
 *
 * Rendered as visible text and emitted as FAQPage structured data from the
 * same array, so the two can never drift apart. Google requires the answer to
 * be visible on the page for the markup to be eligible — inventing hidden
 * answers is a manual-action risk, not a shortcut.
 */
export interface Faq {
    q: string;
    a: string;
}

export const FAQS: Faq[] = [
    {
        q: "What kind of work do you take on?",
        a: "Systems that a business depends on to operate: inventory and point-of-sale, operations platforms, e-commerce, internal tools, APIs. I am most useful where the problem is not yet well defined and the work runs from requirements through architecture and interface design to a deployed product — that whole line is what I do, rather than one slice of it.",
    },
    {
        q: "Are you available for full-time roles or freelance projects?",
        a: "Both, selectively. I run dragondevs, so my time is committed in blocks rather than open-ended — but I take on a small number of engagements a year, and I will consider a full-time role where the work is genuinely hard. The fastest way to find out is to describe the problem and I will tell you honestly whether I am the right person.",
    },
    {
        q: "Do you work with clients outside Pakistan?",
        a: "Yes. I am based in Islamabad on UTC+5, which overlaps a normal working day across the Gulf, Europe and most of Asia. Delivered work so far spans Pakistan, Saudi Arabia and the United Arab Emirates, and every engagement to date has been remote.",
    },
    {
        q: "What is offline-first software, and why do you build it that way?",
        a: "Offline-first means the data lives on the device rather than behind a network request, so the application stays instant and fully usable with no connection, then reconciles across devices when one is available. It matters because most business software quietly assumes a reliable connection, and on a real shop floor or a construction site that assumption is wrong. Bizstock is built this way end to end.",
    },
    {
        q: "Which technologies do you work in?",
        a: "TypeScript and Next.js for most product work, Python and Django where the problem is data or scripting shaped, and Rust via Tauri when something has to ship as a native desktop and Android build from one codebase. PostgreSQL and SQLite for storage, Drizzle for the data layer. The full list is in the stack section above, marked by what I reach for by default versus what I have shipped once.",
    },
    {
        q: "Can you build bilingual or right-to-left interfaces?",
        a: "Yes, and properly. Arabic, Urdu and English as first-class layouts with locale-aware routing, formatting and typography, and the data model designed bilingual from the first sketch. That is a different job from mirroring a finished stylesheet, which is how most retrofitted right-to-left support fails.",
    },
    {
        q: "How does a project usually start?",
        a: "With a conversation about the problem, not the technology. I would rather understand what is actually breaking before proposing anything, so the first step is a call or a detailed email. From there I scope the work in phases with something usable at the end of each, so you are never a long way in with nothing to look at.",
    },
];
