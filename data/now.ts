import {PRODUCT} from "@/lib/site";

/**
 * What is on the bench right now.
 *
 * Lifted from the GitHub profile README, voice and all, so the two places
 * people meet me say the same thing the same way.
 */
export interface NowItem {
    title: string;
    kind: string;
    blurb: string;
    href?: string;
    /** Visible link text — the destination, so no two links share a label. */
    linkLabel?: string;
}

export const NOW: NowItem[] = [
    {
        title: PRODUCT.name,
        kind: "Product",
        blurb: "Offline-first inventory & POS for small businesses. It keeps selling when the Wi-Fi quits, then syncs when it's back.",
        href: PRODUCT.url,
        linkLabel: "bizstock.net",
    },
    {
        title: "dargo-cli",
        kind: "Open source",
        blurb: "Deploys Next.js to your own Debian VPS with auto SSL, env management and zero-downtime releases. DevOps, minus the tears.",
        href: "https://github.com/dragon-devs/dargo-cli",
        linkLabel: "dragon-devs/dargo-cli",
    },
    {
        title: "Multi-tenant SaaS",
        kind: "In the lab",
        blurb: "Built on Next.js, because one tenant is never enough.",
    },
];
