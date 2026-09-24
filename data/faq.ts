import {CAREER_START} from "@/lib/site";

/**
 * Questions people actually ask before they get in touch.
 *
 * The first one exists for search as much as for people: "Salman Khan" is
 * shared with a film star, and "who is Salman Khan skdrh" deserves a direct,
 * visible answer on this page rather than anyone else's.
 *
 * Rendered as visible text and emitted as FAQPage structured data from the
 * same array, so the two can never drift apart. Questions are not headings:
 * the page used to carry 41 headings for its amount of text, and a question
 * in a <summary> is already a label.
 */
export interface Faq {
    q: string;
    a: string;
}

export const FAQS: Faq[] = [
    {
        q: "Who is Salman Khan (skdrh)?",
        a: `A software architect and product builder, and the founder of dragondevs. I go by skdrh online. I have been building software since ${CAREER_START}, shipped 30+ projects end to end, and built Bizstock on my own.`,
    },
    {
        q: "What kind of work do you take on?",
        a: "Products and the systems a business runs on: SaaS, inventory and POS, operations platforms, e-commerce, APIs and AI features. I am most useful when the idea is still fuzzy and someone has to take it all the way to a deployed product.",
    },
    {
        q: "Are you available for freelance or full-time work?",
        a: "Yes, selectively. I run dragondevs, so I take on a few projects a year, and I will talk about a full-time role if the work is genuinely hard. Tell me the problem and I will tell you honestly whether I am the right fit.",
    },
    {
        q: "Do you work with clients abroad?",
        a: "Yes, and always remotely. I work on UTC+5, which overlaps a normal day in the Gulf, Europe and most of Asia. Work so far has shipped for clients in Pakistan, Saudi Arabia and the UAE.",
    },
    {
        q: "What is offline-first software?",
        a: "Software that keeps working without a connection. The data lives on the device, so the app stays instant offline and syncs when the network is back. Bizstock is built this way, because real shop floors do not have perfect Wi-Fi.",
    },
];
