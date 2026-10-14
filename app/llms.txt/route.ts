import {EXPERIENCE, STORY} from "@/data/experience";
import {FAQS} from "@/data/faq";
import {NOW} from "@/data/now";
import {PRINCIPLES} from "@/data/principles";
import {TOOLBOX} from "@/data/toolbox";
import {WORK} from "@/data/work";
import {
    ALIAS,
    COMPANY,
    CONTACT_EMAIL,
    FACTS,
    NAME,
    PRODUCT,
    ROLE_SPOKEN,
    SITE_URL,
    SOCIALS,
    TIMEZONE,
} from "@/lib/site";

/**
 * /llms.txt — the page in plain Markdown, for the assistants and AI search
 * engines that now answer "who is Salman Khan (skdrh)?" before anyone visits.
 *
 * It follows the llms.txt proposal (llmstxt.org): a title, a one-paragraph
 * summary, then sections of links and facts. Every line is generated from the
 * same data the page renders, so it can never say something the page does
 * not. Prerendered at build time; no request ever runs this.
 */
export const dynamic = "force-static";

export function GET() {
    const lines = [
        `# ${NAME} (${ALIAS})`,
        "",
        `> ${ROLE_SPOKEN}, founder of ${COMPANY.name}. I build products end to end: the idea, the architecture, the UI, the API, the database, the AI, even the deploy script.`,
        "",
        `${NAME} goes by ${ALIAS} online. This is the personal site of the software architect and founder of ${COMPANY.name} — not the actor of the same name.`,
        "",
        ...FACTS.map((fact) => `- ${fact.figure} ${fact.label}`),
        "",
        "## Profiles",
        "",
        `- Website: ${SITE_URL}`,
        `- Company: [${COMPANY.name}](${COMPANY.url})`,
        `- X: ${SOCIALS.x}`,
        `- LinkedIn: ${SOCIALS.linkedin}`,
        `- GitHub: ${SOCIALS.github}`,
        `- Email: ${CONTACT_EMAIL}`,
        "",
        "## About",
        "",
        ...STORY.flatMap((paragraph) => [paragraph, ""]),
        "## Building right now",
        "",
        ...NOW.map((item) =>
            item.title === PRODUCT.name
                ? `- [${item.title}](${PRODUCT.url}) (${item.kind}): ${item.blurb}`
                : `- ${item.title} (${item.kind}): ${item.blurb}`,
        ),
        "",
        "## Case studies",
        "",
        ...WORK.map(
            (item) =>
                `- [${item.title}](${item.caseStudy}) — ${item.category}, ${item.year}, ${item.status.toLowerCase()}. ${item.headline} ${item.summary} Stack: ${item.stack.join(", ")}.`,
        ),
        "",
        "## Experience",
        "",
        ...EXPERIENCE.map((role) => `- ${role.from}–${role.to}: ${role.title}, ${role.company}. ${role.note}`),
        "",
        "## Tech stack",
        "",
        ...TOOLBOX.map((group) => `- ${group.label}: ${group.items.join(", ")}`),
        "",
        "## How I work",
        "",
        ...PRINCIPLES.map((item) => `- ${item.rule} ${item.why}`),
        "",
        "## FAQ",
        "",
        ...FAQS.flatMap((item) => [`### ${item.q}`, "", item.a, ""]),
        "## Contact",
        "",
        `Email ${CONTACT_EMAIL}, or use the form at ${SITE_URL}/#contact. Working ${TIMEZONE}, remotely.`,
        "",
    ];

    return new Response(lines.join("\n"), {
        headers: {"Content-Type": "text/plain; charset=utf-8"},
    });
}
