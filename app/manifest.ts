import type {MetadataRoute} from "next";

import {ALIAS, NAME, SITE_DESCRIPTION, SITE_TITLE} from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: SITE_TITLE,
        short_name: `${NAME} (${ALIAS})`,
        description: SITE_DESCRIPTION,
        start_url: "/",
        display: "standalone",
        background_color: "#070b14",
        theme_color: "#070b14",
        icons: [
            {src: "/icon.png", sizes: "192x192", type: "image/png"},
            {src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any"},
        ],
    };
}
