import type {Metadata, Viewport} from "next";
import {IBM_Plex_Mono, Inter, Space_Grotesk} from "next/font/google";

import {JsonLd} from "@/components/json-ld";
import {ThemeProvider} from "@/components/theme-provider";
import {
    jsonLdGraph,
    KEYWORDS,
    personSchema,
    profilePageSchema,
    websiteSchema,
} from "@/lib/seo";
import {NAME, ROLE, SITE_DESCRIPTION, SITE_URL} from "@/lib/site";

import "./globals.css";

/**
 * Three faces, three jobs, and no more than that.
 *
 * Space Grotesk — a grotesque with drafting-table quirks in its 'a' and its
 * flat-sided 'o' — sets every heading and the wordmark. Inter sets anything
 * you read a paragraph of, because at 14px over seven lines it is simply more
 * comfortable than the display face. IBM Plex Mono, drawn for engineering
 * documentation, holds everything that behaves like data: bracketed callouts,
 * years, stack names, figures, the title block.
 */
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-space-grotesk",
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: "swap",
    variable: "--font-plex-mono",
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: `${NAME} — ${ROLE}`,
        template: `%s | ${NAME}`,
    },
    description: SITE_DESCRIPTION,
    keywords: KEYWORDS,
    applicationName: `${NAME} — Portfolio`,
    category: "technology",
    authors: [{name: NAME, url: SITE_URL}],
    creator: NAME,
    publisher: NAME,
    alternates: {
        canonical: "/",
    },
    formatDetection: {
        telephone: true,
        email: true,
        address: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    // No `icons` block on purpose: app/icon.png, app/apple-icon.png and
    // public/favicon.ico are picked up by Next's file conventions, which emit
    // the right type and sizes. Declaring them here as well produced two
    // competing <link rel="icon"> tags.
    manifest: "/manifest.webmanifest",
    openGraph: {
        type: "profile",
        siteName: `${NAME} — ${ROLE}`,
        title: `${NAME} — ${ROLE}`,
        description: SITE_DESCRIPTION,
        url: "/",
        locale: "en_US",
        firstName: "Salman",
        lastName: "Khan",
        username: "skdrh",
    },
    twitter: {
        card: "summary_large_image",
        title: `${NAME} — ${ROLE}`,
        description:
            "Offline-first systems, multi-tenant platforms and bilingual commerce, built end to end. Founder of dragondevs.",
        creator: "@dragondevs_",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#f7f8fb"},
        {media: "(prefers-color-scheme: dark)", color: "#070b14"},
    ],
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} h-full`}
        >
            <body className="min-h-full antialiased">
                <a
                    href="#content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:tracking-[0.08em] focus:text-background focus:uppercase"
                >
                    Skip to content
                </a>

                <ThemeProvider>{children}</ThemeProvider>

                <JsonLd
                    data={jsonLdGraph(personSchema(), websiteSchema(), profilePageSchema())}
                />
            </body>
        </html>
    );
}
