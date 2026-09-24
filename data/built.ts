/**
 * Things I've built — the earlier projects, one line each.
 *
 * Same six, same words as the GitHub profile README. These are where the
 * habits behind the case studies were formed, so they stay; they are one line
 * apiece so nobody mistakes them for the case studies.
 *
 * `repo` is emitted as structured data but not linked from the row. The
 * GitHub profile is linked once at the top of the page, and three more
 * outbound links here would put the page back over an external-link budget
 * it used to blow through at thirty-four.
 */
export interface BuiltItem {
    title: string;
    blurb: string;
    stack: string[];
    repo?: string;
}

export const BUILT: BuiltItem[] = [
    {
        title: "Project Manager",
        blurb: "Open-source project, task & resource management for software houses.",
        stack: ["Next.js", "TypeScript", "Prisma"],
        repo: "https://github.com/skdrh/project-manager",
    },
    {
        title: "Issue Tracker",
        blurb: "Bugs go in, fixes come out. Next.js + Prisma, with auth.",
        stack: ["Next.js", "Prisma", "PostgreSQL"],
        repo: "https://github.com/skdrh/issue-tracker",
    },
    {
        title: "ChatApp",
        blurb: "Django chat, built from scratch: random rooms, who's online, private DMs.",
        stack: ["Django", "Python"],
        repo: "https://github.com/skdrh/chatapp",
    },
    {
        title: "MedLab Manager",
        blurb: "Inventory, sales & invoices for companies selling lab tools and medicine.",
        stack: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
        title: "Gallery Next",
        blurb: "Image uploads with permissions and Google/GitHub sign-in.",
        stack: ["Next.js", "Clerk", "PostgreSQL"],
    },
    {
        title: "School LMS",
        blurb: "School & college learning platform, built with OBS. I did the UI and core features.",
        stack: ["Full-stack", "Interface design"],
    },
];
