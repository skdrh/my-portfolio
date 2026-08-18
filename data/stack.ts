/**
 * The stack, grouped by the job each tool does.
 *
 * Only things actually used in shipped work appear here — every entry traces
 * back either to a case study on dragondevs.co or to a repository in the
 * archive below. `core` marks what I reach for by default rather than what I
 * have merely touched, so the list stays useful instead of exhaustive.
 */
export interface StackGroup {
    label: string;
    items: {name: string; core?: boolean}[];
}

export const STACK: StackGroup[] = [
    {
        label: "Languages",
        items: [
            {name: "TypeScript", core: true},
            {name: "JavaScript", core: true},
            {name: "Python", core: true},
            {name: "Rust"},
            {name: "Dart"},
            {name: "SQL", core: true},
            {name: "HTML"},
            {name: "CSS"},
        ],
    },
    {
        label: "Frontend",
        items: [
            {name: "Next.js", core: true},
            {name: "React", core: true},
            {name: "Tailwind CSS", core: true},
            {name: "shadcn/ui"},
            {name: "Vue"},
            {name: "Nuxt"},
            {name: "Zustand"},
        ],
    },
    {
        label: "Backend",
        items: [
            {name: "Node.js", core: true},
            {name: "Django", core: true},
            {name: "Django REST Framework", core: true},
            {name: "Express"},
            {name: "Socket.IO"},
            {name: "NextAuth"},
        ],
    },
    {
        label: "Data",
        items: [
            {name: "PostgreSQL", core: true},
            {name: "SQLite", core: true},
            {name: "Drizzle ORM", core: true},
            {name: "Prisma"},
            {name: "MongoDB"},
            {name: "MySQL"},
        ],
    },
    {
        label: "Cross-platform",
        items: [
            {name: "Tauri", core: true},
            {name: "Flutter"},
            {name: "React Native"},
        ],
    },
    {
        label: "Platform & tooling",
        items: [
            {name: "Git"},
            {name: "GitHub"},
            {name: "Vercel"},
            {name: "Payload CMS"},
            {name: "next-intl"},
            {name: "Sentry"},
            {name: "PostHog"},
        ],
    },
];
