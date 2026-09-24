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
    /** Visible link text — unique on the page, so no two links share a label. */
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
        title: "Quickbeam",
        kind: "In development",
        blurb: "File transfer that never gives up: shared Wi-Fi, its own hotspot, or animated QR codes the other camera reads. Over Wi-Fi, the other side only needs a browser.",
        // Down the page to its case-study row rather than off-site: the
        // write-up link lives there, and one link per destination is the rule.
        href: "#quickbeam-offline-file-transfer",
        linkLabel: "How it works",
    },
    {
        title: "Multi-tenant SaaS",
        kind: "In the lab",
        blurb: "Built on Next.js, because one tenant is never enough.",
    },
];
