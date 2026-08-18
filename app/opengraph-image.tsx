import {ImageResponse} from "next/og";

import {NAME, ROLE} from "@/lib/site";

export const alt = `${NAME} — ${ROLE}`;
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

/**
 * The share card, generated rather than designed in a file.
 *
 * A site with no photographs should not suddenly produce one for social, so
 * this is the page's own drafting sheet at 1200x630: the navy ground, the
 * measured grid, registration ticks on the diagonal, and the claim the page
 * leads with.
 *
 * Deliberately no remote font fetch — pulling Space Grotesk over the network
 * at render time adds a failure mode that turns the card blank, and the system
 * grotesque is close enough at this size to be worth the reliability.
 */
export default function Image() {
    const marks = ["Offline-first", "Multi-tenant", "Bilingual / RTL", "Cross-platform"];

    const BG = "#070b14";
    const INK = "#e9edf6";
    const MUTED = "#909db8";
    const SIGNAL = "#4d9bff";
    const GRID = "rgba(120,165,255,0.10)";

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
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: BG,
                    padding: "68px 76px",
                    fontFamily: "sans-serif",
                    position: "relative",
                    // The sheet grid, drawn the same way the CSS does it.
                    backgroundImage: `linear-gradient(to right, ${GRID} 1px, transparent 1px), linear-gradient(to bottom, ${GRID} 1px, transparent 1px)`,
                    backgroundSize: "48px 48px",
                }}
            >
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

                {/* Bracketed callout, exactly as the page sets it. */}
                <div style={{display: "flex", alignItems: "center", gap: 14}}>
                    <div style={{fontSize: 24, color: SIGNAL, fontWeight: 700}}>[</div>
                    <div style={{fontSize: 21, letterSpacing: 5, color: MUTED}}>
                        {ROLE.toUpperCase()}
                    </div>
                    <div style={{fontSize: 24, color: SIGNAL, fontWeight: 700}}>]</div>
                </div>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <div
                        style={{
                            fontSize: 90,
                            fontWeight: 700,
                            letterSpacing: -3.5,
                            lineHeight: 1.02,
                            color: INK,
                            maxWidth: 930,
                        }}
                    >
                        I build production systems end to end.
                    </div>
                    <div
                        style={{
                            marginTop: 26,
                            fontSize: 29,
                            lineHeight: 1.4,
                            color: MUTED,
                            maxWidth: 830,
                        }}
                    >
                        {`${NAME} — offline-first software, multi-tenant platforms and bilingual commerce. Founder of dragondevs.`}
                    </div>
                </div>

                {/* Capability marks over dimension rules. */}
                <div style={{display: "flex", alignItems: "center", gap: 34}}>
                    {marks.map((mark) => (
                        <div
                            key={mark}
                            style={{display: "flex", flexDirection: "column", gap: 10}}
                        >
                            <div style={{width: 30, height: 2, background: SIGNAL}} />
                            <div style={{fontSize: 21, color: MUTED}}>{mark}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        size,
    );
}
