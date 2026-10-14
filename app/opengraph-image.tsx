import {readFile} from "node:fs/promises";
import {join} from "node:path";
import {ImageResponse} from "next/og";

import {ALIAS, NAME, PORTRAIT, ROLE, ROLE_SPOKEN, SITE_URL} from "@/lib/site";

export const alt = `${NAME} (${ALIAS}) — ${ROLE}`;
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

// The portrait does not depend on the request, so it is read once, at build.
const portrait = `data:image/jpeg;base64,${await readFile(
    join(process.cwd(), "public", PORTRAIT.src),
    "base64",
)}`;

/**
 * The share card: the page's hero in miniature — navy ground, the rings
 * carrying out from the portrait, registration ticks, the name and the
 * handle on the left, and the portrait on the right, so a shared link shows
 * who it is about. No grid, same as the page.
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
    const PHOTO_WIDTH = 520;
    // Centre of the portrait — where the rings are drawn from, as on the page.
    const RING_CX = 1200 - PHOTO_WIDTH / 2;
    const RINGS = [300, 390, 480, 570, 660, 750];

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
                    // A faint pool of light behind the name, as behind the heading.
                    backgroundImage: "radial-gradient(circle at 18% 22%, rgba(77,155,255,0.14), rgba(7,11,20,0) 55%)",
                }}
            >
                {/* The rings, centred on the portrait; the photo covers their
                    middle and the left halves arc across the sheet. */}
                <svg
                    width="1200"
                    height="630"
                    viewBox="0 0 1200 630"
                    style={{position: "absolute", top: 0, left: 0}}
                >
                    {RINGS.map((r, i) => (
                        <circle
                            key={r}
                            cx={RING_CX}
                            cy={315}
                            r={r}
                            fill="none"
                            stroke={SIGNAL}
                            strokeOpacity={0.3 - i * 0.04}
                            strokeWidth={1.5}
                            strokeDasharray={i % 2 === 1 ? "3 9" : undefined}
                        />
                    ))}
                </svg>

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
                    {/* The kicker, as the hero sets it: a short signal rule, then
                        the role in plain words. */}
                    <div style={{display: "flex", alignItems: "center", gap: 18}}>
                        <div style={{width: 34, height: 3, background: SIGNAL}} />
                        <div style={{fontSize: 25, color: MUTED}}>{ROLE_SPOKEN}</div>
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
