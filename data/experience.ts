/**
 * The timeline, one line per role. The facts are unchanged from the previous
 * portfolio — same employers, same years — only the length is.
 */
export interface Role {
    from: string;
    to: string;
    title: string;
    company: string;
    /** One sentence. The timeline is scanned, not read. */
    note: string;
    current?: boolean;
}

export const EXPERIENCE: Role[] = [
    {
        from: "2025",
        to: "Now",
        title: "Founder & Principal Engineer",
        company: "dragondevs",
        note: "Client platforms for businesses in Saudi Arabia, plus products of our own.",
        current: true,
    },
    {
        from: "2024",
        to: "2025",
        title: "Product Builder",
        company: "Bizstock",
        note: "Designed, built and shipped it alone, from the database to the landing page.",
    },
    {
        from: "2023",
        to: "2024",
        title: "Developer",
        company: "OBS",
        note: "A school and college LMS. I owned the interface and the core features.",
    },
    {
        from: "2020",
        to: "2023",
        title: "Programmer",
        company: "Self-employed",
        note: "Three years of projects picked for what they would teach, not what they would pay.",
    },
    {
        from: "2018",
        to: "2020",
        title: "Freelance Developer & Designer",
        company: "Jacolink, UAE",
        note: "Python scripts, Django REST APIs and websites. The first work where code was the deliverable.",
    },
    {
        from: "2017",
        to: "2018",
        title: "Graphic Designer",
        company: "Leader Sign, UAE",
        note: "Logos, 3D signage and brand identities. Where the eye for type and spacing came from.",
    },
];
