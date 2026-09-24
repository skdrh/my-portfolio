/**
 * The toolbox, grouped by job — the same groups as the GitHub profile README,
 * plus the native layer the case studies ship on (Tauri, Flutter).
 */
export interface ToolGroup {
    label: string;
    items: string[];
}

export const TOOLBOX: ToolGroup[] = [
    {
        label: "Frontend",
        items: ["TypeScript", "Next.js", "React", "Zustand", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    },
    {
        label: "Backend & auth",
        items: ["Node.js", "Express", "tRPC", "GraphQL", "Better Auth", "Python", "Django"],
    },
    {
        label: "Data",
        items: ["PostgreSQL", "SQLite", "MongoDB", "MySQL", "Drizzle", "Prisma", "Mongoose"],
    },
    {
        label: "Desktop & mobile",
        items: ["Tauri", "Rust", "Flutter", "Dart"],
    },
    {
        label: "Ship & design",
        items: ["Docker", "Nginx", "Linux", "GitHub Actions", "Vercel", "Figma"],
    },
    {
        label: "AI",
        items: ["OpenAI", "Claude", "Gemini", "Ollama", "Vercel AI SDK", "MCP", "Hugging Face"],
    },
    {
        label: "Code with",
        items: ["Claude Code", "Cursor", "Codex"],
    },
];
