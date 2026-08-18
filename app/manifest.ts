import type {MetadataRoute} from "next";

import {NAME, ROLE, SITE_DESCRIPTION} from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: `${NAME} — ${ROLE}`,
        short_name: NAME,
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
