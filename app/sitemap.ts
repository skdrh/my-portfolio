import type {MetadataRoute} from "next";

import {SITE_URL} from "@/lib/site";

/**
 * One page, so one entry. Section anchors are deliberately not listed —
 * a fragment is not a separate URL, and submitting them as though they were
 * is a classic way to look like a spam sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
