import type {MetadataRoute} from "next";

import {PORTRAIT_URL} from "@/lib/seo";
import {SITE_URL} from "@/lib/site";

/**
 * One page, so one entry. Section anchors are deliberately not listed —
 * a fragment is not a separate URL, and submitting them as though they were
 * is a classic way to look like a spam sitemap.
 *
 * The portrait is listed as the page's image, which is how Google Images is
 * told that this photograph belongs to this page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
            images: [PORTRAIT_URL],
        },
    ];
}
