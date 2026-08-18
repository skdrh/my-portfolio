/**
 * Earlier work — the self-taught years, 2020 to 2024.
 *
 * These are kept deliberately, and deliberately kept small. They are not
 * client systems and they do not pretend to be; they are the repositories
 * where the habits behind the work above were formed, and most are open
 * source. One line each, links, and nothing more.
 */
export interface ArchiveItem {
    title: string;
    blurb: string;
    stack: string[];
    repo?: string;
    live?: string;
}

export const ARCHIVE: ArchiveItem[] = [
    {
        title: "Project Manager",
        blurb: "Open-source workflow management for software teams — projects, tasks and resources in one place.",
        stack: ["Next.js", "TypeScript", "Prisma"],
        repo: "https://github.com/dragon-devs/project-manager",
        live: "https://project-manager-mu-teal.vercel.app",
    },
    {
        title: "MedLab Manager",
        blurb: "Inventory, sales and invoicing for companies selling laboratory tools and medications.",
        stack: ["Next.js", "TypeScript", "PostgreSQL"],
        live: "https://medlab-manager.vercel.app/",
    },
    {
        title: "Issue Tracker",
        blurb: "Issue tracking with authentication and dashboards — the project that taught me Prisma properly.",
        stack: ["Next.js", "Prisma", "PostgreSQL", "Sentry"],
        repo: "https://github.com/dragon-devs/issue-tracker",
        live: "https://issue-tracker-ten-rose.vercel.app/issues/list",
    },
    {
        title: "Gallery Next",
        blurb: "Image upload and management with real auth, permissions and analytics wired in.",
        stack: ["Next.js", "Clerk", "PostgreSQL", "PostHog"],
        repo: "https://github.com/dragon-devs/gallary-next",
        live: "https://gallary-next.vercel.app/",
    },
    {
        title: "Chat App",
        blurb: "Full-stack Django app — accounts, profiles, public rooms, presence and private messaging.",
        stack: ["Django", "Python", "SQLite"],
        repo: "https://github.com/dragon-devs/chatapp",
    },
    {
        title: "FTMS — Backend",
        blurb: "Football tournament management API: teams, fixtures, scheduling and tournament history.",
        stack: ["Django REST Framework", "Python", "SQLite"],
        repo: "https://github.com/dragon-devs/ftms-backend",
    },
    {
        title: "FTMS — Frontend",
        blurb: "The React client for the tournament API, with form handling and a test suite.",
        stack: ["React", "JavaScript", "Jest"],
        repo: "https://github.com/dragon-devs/ftms-frontend",
    },
    {
        title: "custom-tree",
        blurb: "A CLI that prints a readable project tree. Published to PyPI, which is how I learned packaging.",
        stack: ["Python", "CLI"],
        repo: "https://github.com/dragon-devs/custom-tree",
        live: "https://pypi.org/project/custom-tree/",
    },
];
