import {ImageResponse} from "next/og";

import {NAME, ROLE} from "@/lib/site";

export const alt = `${NAME} — ${ROLE}`;
export const size = {width: 1200, height: 630};
export const contentType = "image/png";

/**
 * The share card, generated rather than designed in a file.
 *
 * A site with no photographs should not suddenly produce one for social. This
 * renders the same thing the page leads with — the name, the claim, and the
 * four capability marks — in the site's own dark palette.
 *
 * Deliberately no remote font fetch: pulling Space Grotesk over the network at
 * render time adds a failure mode that turns the card blank, and the system
 * grotesque is close enough at this size to be worth the reliability.
 */
export default function Image() {
    const marks = ["Offline-first", "Multi-tenant", "Bilingual / RTL", "Cross-platform"];

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#08090a",
                    padding: "72px 80px",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Top rule + eyebrow */}
                <div style={{display: "flex", alignItems: "center", gap: 16}}>
                    <div style={{width: 14, height: 14, background: "#b4f03c"}} />
                    <div
                        style={{
                            fontSize: 22,
                            letterSpacing: 4,
                            textTransform: "uppercase",
                            color: "#9298a1",
                        }}
                    >
                        {ROLE}
                    </div>
                </div>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <div
                        style={{
                            fontSize: 92,
                            fontWeight: 700,
                            letterSpacing: -3.5,
                            lineHeight: 1.02,
                            color: "#f2f3f1",
                            maxWidth: 940,
                        }}
                    >
                        I build production systems end to end.
                    </div>
                    <div
                        style={{
                            marginTop: 28,
                            fontSize: 30,
                            lineHeight: 1.4,
                            color: "#9298a1",
                            maxWidth: 820,
                        }}
                    >
                        {`${NAME} — offline-first software, multi-tenant platforms and bilingual commerce. Founder of dragondevs.`}
                    </div>
                </div>

                {/* Capability marks, mirroring the hero's proof strip */}
                <div style={{display: "flex", alignItems: "center", gap: 36}}>
                    {marks.map((mark) => (
                        <div key={mark} style={{display: "flex", alignItems: "center", gap: 12}}>
                            <div style={{width: 22, height: 4, background: "#b4f03c"}} />
                            <div style={{fontSize: 22, color: "#9298a1"}}>{mark}</div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        size,
    );
}
