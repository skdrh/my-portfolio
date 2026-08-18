/**
 * The timeline, carried over from the previous portfolio and rewritten for
 * length. The facts are unchanged — same employers, same years, same work.
 *
 * One entry is new: dragondevs (2025 — present). It is not embellishment;
 * it is the period the four case studies were delivered in, and leaving it
 * off made the timeline stop a year before the work it points at.
 */
export interface Role {
    from: string;
    to: string;
    title: string;
    company: string;
    /** Two sentences at most. The timeline is scanned, not read. */
    description: string;
    /** Rendered in mono under the role. Keep to four or fewer. */
    tags: string[];
    current?: boolean;
}

export const EXPERIENCE: Role[] = [
    {
        from: "2025",
        to: "Present",
        title: "Founder & Principal Engineer",
        company: "dragondevs",
        description:
            "Run the studio and do the engineering. Delivered a bilingual operations platform and a full commerce build for clients in Saudi Arabia, while developing Bizstock and Quickbeam as products of our own.",
        tags: ["Product", "Architecture", "Client delivery"],
        current: true,
    },
    {
        from: "2024",
        to: "2025",
        title: "Product Builder",
        company: "Bizstock — Self-employed",
        description:
            "Designed, architected and built Bizstock end to end as a solo product builder: inventory, stock control, purchasing, reporting and multi-tenant isolation. Defined the requirements and the interfaces as well as the system underneath them.",
        tags: ["Multi-tenant", "Offline-first", "Solo build"],
    },
    {
        from: "2023",
        to: "2024",
        title: "Developer",
        company: "OBS",
        description:
            "Built a learning-management system for schools and colleges alongside the owner of OBS, who has twenty years in software. Responsible for interface design and core functionality.",
        tags: ["LMS", "Interface design", "Full-stack"],
    },
    {
        from: "2020",
        to: "2023",
        title: "Programmer",
        company: "Self-employed",
        description:
            "Three years spent deliberately going deeper — personal projects chosen for what they would teach rather than what they would pay. Most of the archive below dates from here.",
        tags: ["Systems", "Open source", "Self-directed"],
    },
    {
        from: "2018",
        to: "2020",
        title: "Freelance Developer & Designer",
        company: "Jacolink — UAE",
        description:
            "Python scripting, Django REST APIs, websites and graphics for a range of clients. First paid work where the code, not the artwork, was the deliverable.",
        tags: ["Python", "Django REST", "Web"],
    },
    {
        from: "2017",
        to: "2018",
        title: "Graphic Designer",
        company: "Leader Sign — UAE",
        description:
            "Logos, 3D signboards and full brand identities. Where the eye for typography and spacing that runs through everything since was trained.",
        tags: ["Brand identity", "Typography", "3D signage"],
    },
];
