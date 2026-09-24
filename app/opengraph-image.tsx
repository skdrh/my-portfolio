import {readFile} from "node:fs/promises";
import {join} from "node:path";
import {ImageResponse} from "next/og";

import {ALIAS, NAME, PORTRAIT, ROLE, SITE_URL} from "@/lib/site";

export const alt = `${NAME} (${ALIAS}) — ${ROLE}`;
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

// The portrait does not depend on the request, so it is read once, at build.
const portrait = `data:image/jpeg;base64,${await readFile(
    join(process.cwd(), "public", PORTRAIT.src),
    "base64",
)}`;

/**
 * The share card: the page's drafting sheet on the left — navy ground,
 * measured grid, registration ticks, the name and the handle — and the
 * portrait on the right, so a shared link shows who it is about.
 *
 * Deliberately no remote font fetch — pulling Space Grotesk over the network
 * at render time adds a failure mode that turns the card blank, and the system
 * grotesque is close enough at this size to be worth the reliability.
 */
export default function Image() {
    const BG = "#070b14";
    const INK = "#e9edf6";
    const MUTED = "#909db8";
    const SIGNAL = "#4d9bff";
    const GRID = "rgba(120,165,255,0.10)";
    const PHOTO_WIDTH = 520;

    const tick = (pos: object) => ({
        position: "absolute" as const,
        width: 26,
        height: 26,
        ...pos,
    });

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    background: BG,
                    fontFamily: "sans-serif",
                    position: "relative",
                    // The sheet grid, drawn the same way the CSS does it.
                    backgroundImage: `linear-gradient(to right, ${GRID} 1px, transparent 1px), linear-gradient(to bottom, ${GRID} 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            >
                {/* The portrait, full height on the right, fading into the sheet
                    along its left edge so the two halves read as one card. */}
                {/* Satori renders a plain <img>; next/image does not exist here. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={portrait}
                    alt=""
                    width={PHOTO_WIDTH}
                    height={630}
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: PHOTO_WIDTH,
                        height: 630,
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: PHOTO_WIDTH - 160,
                        width: 160,
                        height: 630,
                        backgroundImage: `linear-gradient(to right, ${BG}, rgba(7,11,20,0))`,
                    }}
                />

                {/* Registration ticks, top-left and bottom-right. */}
                <div
                    style={{
                        ...tick({top: 34, left: 34}),
                        borderTop: `3px solid ${SIGNAL}`,
                        borderLeft: `3px solid ${SIGNAL}`,
                    }}
                />
                <div
                    style={{
                        ...tick({bottom: 34, right: 34}),
                        borderBottom: `3px solid ${SIGNAL}`,
                        borderRight: `3px solid ${SIGNAL}`,
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: 1200 - PHOTO_WIDTH,
                        height: "100%",
                        padding: "68px 40px 64px 76px",
                    }}
                >
                    {/* Bracketed callout, exactly as the page sets it. */}
                    <div style={{display: "flex", alignItems: "center", gap: 12}}>
                        <div style={{fontSize: 22, color: SIGNAL, fontWeight: 700}}>[</div>
                        <div style={{fontSize: 17, letterSpacing: 4, color: MUTED}}>
                            {ROLE.toUpperCase()}
                        </div>
                        <div style={{fontSize: 22, color: SIGNAL, fontWeight: 700}}>]</div>
                    </div>

                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div
                            style={{
                                fontSize: 86,
                                fontWeight: 700,
                                letterSpacing: -3.5,
                                lineHeight: 1,
                                color: INK,
                            }}
                        >
                            {NAME}
                        </div>
                        <div style={{display: "flex", marginTop: 18, fontSize: 32, color: MUTED}}>
                            <span style={{color: SIGNAL, fontWeight: 700}}>{ALIAS}</span>
                            <span>&nbsp;· founder of dragondevs</span>
                        </div>
                        <div
                            style={{
                                marginTop: 34,
                                fontSize: 40,
                                fontWeight: 700,
                                letterSpacing: -1.2,
                                lineHeight: 1.15,
                                color: INK,
                                maxWidth: 560,
                            }}
                        >
                            I build products end to end.
                        </div>
                    </div>

                    <div style={{display: "flex", alignItems: "center", gap: 14}}>
                        <div style={{width: 30, height: 3, background: SIGNAL}} />
                        <div style={{fontSize: 22, color: MUTED}}>
                            {SITE_URL.replace(/^https?:\/\//, "")}
                        </div>
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
