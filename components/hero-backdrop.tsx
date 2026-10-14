/**
 * The hero's drawing: a construction drawing set out around the portrait — a
 * protractor dial, two rings, centre lines, bearings and a dimension, with a
 * scanner sweep and a slow glow moving through it — and, past the dial, faint
 * rings carrying out across the whole hero, so the section reads as one
 * drawing with the person at its centre rather than a photo on ruled paper.
 *
 * Built to cost almost nothing. It is server-rendered SVG and CSS: no client
 * JavaScript, no canvas, no image requests. The three moving layers animate
 * `transform` only (see `.hero-glow`, `.hero-sweep`, `.hero-dial` in
 * globals.css), so the browser composites them rather than repainting, and
 * reduced-motion stops them entirely. All of it is aria-hidden decoration.
 */

const C = 400; // centre of the 800-unit drawing

/** Point on a circle of radius `r` at `deg` degrees clockwise from north. */
function polar(r: number, deg: number) {
    const rad = (deg * Math.PI) / 180;
    return {x: +(C + r * Math.sin(rad)).toFixed(2), y: +(C - r * Math.cos(rad)).toFixed(2)};
}

// Dial ticks every 5°, long ones every 30°. Computed once at module load.
const TICKS = Array.from({length: 72}, (_, i) => {
    const deg = i * 5;
    const long = deg % 30 === 0;
    return {deg, a: polar(long ? 350 : 360, deg), b: polar(372, deg), long};
});

const BEARINGS = [
    {label: "000", x: C, y: 58},
    {label: "090", x: 748, y: C + 4},
    {label: "180", x: C, y: 752},
    {label: "270", x: 52, y: C + 4},
];

/**
 * The rings beyond the dial, in a 1000-unit drawing that is 5.2 portraits
 * wide — so one portrait width is ~192 units. They start just outside the
 * dial's tick ring and step outward at roughly the dial's own ring spacing,
 * fading as they go; every other one is dashed, like a construction circle
 * that was never inked.
 *
 * The fade is in each ring's own opacity rather than a radial mask over the
 * layer: the rings share one centre, so a mask could only ever dim each ring
 * evenly anyway — and a mask on a layer this size is real work to composite.
 */
const RINGS = [
    {r: 196, opacity: 0.3},
    {r: 262, opacity: 0.18, dashed: true},
    {r: 330, opacity: 0.12},
    {r: 400, opacity: 0.07, dashed: true},
    {r: 470, opacity: 0.04},
];

/** The ground under the whole hero: a faint wash of light behind the heading. */
export function HeroGround() {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-48 -left-48 size-[620px] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--signal)_10%,transparent),transparent)]" />
        </div>
    );
}

/**
 * The rings, centred on the portrait like the dial, and behind it. Rendered
 * inside the portrait's <figure> for the same reason the dial is: it follows
 * the photo at every breakpoint, and the hero's overflow clip trims the rest.
 */
export function SignalRings() {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute top-[46%] left-1/2 -z-20 aspect-square w-[520%] -translate-x-1/2 -translate-y-1/2 text-signal [contain:layout_paint]"
        >
            <svg viewBox="0 0 1000 1000" className="absolute inset-0 size-full" fill="none">
                <g stroke="currentColor" strokeWidth="1">
                    {RINGS.map((ring) => (
                        <circle
                            key={ring.r}
                            cx="500"
                            cy="500"
                            r={ring.r}
                            opacity={ring.opacity}
                            strokeDasharray={ring.dashed ? "2 5" : undefined}
                            vectorEffect="non-scaling-stroke"
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}

/**
 * The construction drawing, centred on the portrait. Rendered inside the
 * portrait's <figure>, behind the frame, so it follows the photo at every
 * breakpoint; the hero's overflow clip trims whatever runs past its edges.
 */
export function PortraitDial() {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute top-[46%] left-1/2 -z-10 aspect-square w-[175%] -translate-x-1/2 -translate-y-1/2 text-signal [contain:layout_paint]"
        >
            {/* Glow — drifts and breathes, slower than anything else. */}
            <div className="hero-glow absolute inset-[8%] rounded-full" />

            {/* Scanner sweep. */}
            <div className="hero-sweep absolute inset-[4%]" />

            {/* Static geometry: rings, centre lines, bearings, a dimension. */}
            <svg viewBox="0 0 800 800" className="absolute inset-0 size-full" fill="none">
                <g stroke="currentColor" strokeWidth="1">
                    <circle cx={C} cy={C} r="250" opacity="0.35" />
                    <circle cx={C} cy={C} r="320" opacity="0.25" strokeDasharray="3 7" />
                    <line x1="0" y1={C} x2="800" y2={C} opacity="0.2" strokeDasharray="2 6" />
                    <line x1={C} y1="0" x2={C} y2="800" opacity="0.2" strokeDasharray="2 6" />
                    {/* Dimension line under the drawing: Ø of the dashed ring. */}
                    <g opacity="0.45">
                        <line x1="80" y1="786" x2="720" y2="786" />
                        <line x1="80" y1="778" x2="80" y2="794" />
                        <line x1="720" y1="778" x2="720" y2="794" />
                    </g>
                </g>
                <g
                    fill="currentColor"
                    opacity="0.6"
                    fontSize="11"
                    letterSpacing="1.5"
                    textAnchor="middle"
                    className="font-mono"
                >
                    {BEARINGS.map((b) => (
                        <text key={b.label} x={b.x} y={b.y}>
                            {b.label}
                        </text>
                    ))}
                    <text x={C} y="778">
                        Ø 640
                    </text>
                </g>
            </svg>

            {/* The dial — turns once every few minutes. */}
            <svg viewBox="0 0 800 800" className="hero-dial absolute inset-0 size-full" fill="none">
                <g stroke="currentColor" strokeWidth="1">
                    {TICKS.map((t) => (
                        <line
                            key={t.deg}
                            x1={t.a.x}
                            y1={t.a.y}
                            x2={t.b.x}
                            y2={t.b.y}
                            opacity={t.long ? 0.7 : 0.35}
                        />
                    ))}
                </g>
                <path d={`M${C} 22 l-6 -10 h12 z`} fill="currentColor" opacity="0.8" />
            </svg>
        </div>
    );
}
