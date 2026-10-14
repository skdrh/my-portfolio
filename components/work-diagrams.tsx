import type {ReactNode} from "react";

/**
 * One drawing per case study: the system as I would sketch it for a client
 * on a whiteboard, inked in the page's drafting style.
 *
 * Screenshots were ruled out long ago — a dashboard at thumbnail size proves
 * nothing — but a drawing of how the thing works does, and it is the part of
 * the job a software architect is actually hired for. Every box, label and
 * line here is taken from the case study summary beside it; nothing is drawn
 * that the write-up does not say.
 *
 * All four share one 560 × 360 sheet and one small vocabulary of parts
 * (panel, store, chip, arrow), coloured through theme tokens so they follow
 * light and dark. Live connections use `.flow`, whose dashes travel along the
 * line; reduced motion stops them. Server-rendered, no client JavaScript.
 *
 * The drawings are aria-hidden: each sits in a <figure> whose caption says in
 * a sentence what the drawing shows.
 */

const W = 560;
const H = 360;

export function WorkDiagram({slug}: {slug: string}) {
    switch (slug) {
        case "bizstock-inventory-pos-app":
            return <Bizstock />;
        case "craftflow-operations-platform":
            return <CraftFlow />;
        case "alnada-cooling-ecommerce":
            return <AlNada />;
        case "quickbeam-offline-file-transfer":
            return <Quickbeam />;
        default:
            return null;
    }
}

/* ── Parts ──────────────────────────────────────────────────────────────── */

function Sheet({children}: {children: ReactNode}) {
    return (
        <svg
            viewBox={`0 0 ${W} ${H}`}
            aria-hidden
            focusable="false"
            className="block h-auto w-full"
            fill="none"
            strokeWidth="1"
        >
            {children}
        </svg>
    );
}

/** A block with a title, and optionally a highlighted (signal) outline. */
function Panel({
    x,
    y,
    w,
    h,
    accent,
}: {
    x: number;
    y: number;
    w: number;
    h: number;
    accent?: boolean;
}) {
    return (
        <rect
            x={x}
            y={y}
            width={w}
            height={h}
            className={accent ? "fill-surface stroke-signal" : "fill-surface stroke-border-strong"}
        />
    );
}

function Title({x, y, children, anchor}: {x: number; y: number; children: ReactNode; anchor?: "middle" | "end"}) {
    return (
        <text
            x={x}
            y={y}
            textAnchor={anchor}
            className="fill-foreground font-display text-[15px] font-semibold tracking-[-0.02em]"
        >
            {children}
        </text>
    );
}

function Label({
    x,
    y,
    children,
    anchor,
    tone = "muted",
}: {
    x: number;
    y: number;
    children: ReactNode;
    anchor?: "middle" | "end";
    tone?: "muted" | "faint" | "ink" | "signal";
}) {
    const fill = {
        muted: "fill-muted-foreground",
        faint: "fill-faint",
        ink: "fill-foreground",
        signal: "fill-signal-ink",
    }[tone];

    return (
        <text x={x} y={y} textAnchor={anchor} className={`${fill} font-mono text-[11.5px]`}>
            {children}
        </text>
    );
}

/** A small labelled box — a module, a step, a field. */
function Chip({x, y, w, h = 34, label, accent}: {x: number; y: number; w: number; h?: number; label: string; accent?: boolean}) {
    return (
        <g>
            <rect
                x={x}
                y={y}
                width={w}
                height={h}
                className={accent ? "fill-signal-soft stroke-signal" : "fill-background stroke-border-strong"}
            />
            <Label x={x + w / 2} y={y + h / 2 + 4} anchor="middle" tone="ink">
                {label}
            </Label>
        </g>
    );
}

/** A database, drawn the way every whiteboard draws one: a cylinder. */
function Store({cx, y, w, h, label}: {cx: number; y: number; w: number; h: number; label: string}) {
    const rx = w / 2;
    const ry = 6;
    const left = cx - rx;
    const right = cx + rx;
    const top = y + ry;
    const bottom = y + h - ry;

    return (
        <g>
            <path
                d={`M${left} ${top} V${bottom} A${rx} ${ry} 0 0 0 ${right} ${bottom} V${top}`}
                className="fill-background stroke-border-strong"
            />
            <ellipse cx={cx} cy={top} rx={rx} ry={ry} className="fill-background stroke-border-strong" />
            {/* Centred on the visible body: below the lid, above the base. */}
            <Label x={cx} y={(top + bottom) / 2 + ry + 4} anchor="middle" tone="ink">
                {label}
            </Label>
        </g>
    );
}

/** A straight arrow, left to right or top to bottom. */
function Arrow({x1, y1, x2, y2, live}: {x1: number; y1: number; x2: number; y2: number; live?: boolean}) {
    const horizontal = y1 === y2;
    const head = horizontal
        ? `M${x2 - 6} ${y2 - 4} L${x2} ${y2} L${x2 - 6} ${y2 + 4}`
        : `M${x2 - 4} ${y2 - 6} L${x2} ${y2} L${x2 + 4} ${y2 - 6}`;
    const tone = live ? "stroke-signal" : "stroke-border-strong";

    return (
        <g>
            <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeWidth={live ? 1.5 : 1}
                className={live ? `${tone} flow` : tone}
            />
            <path d={head} strokeWidth={live ? 1.5 : 1} className={tone} />
        </g>
    );
}

/** A small filled square: on, live, done. */
function Dot({x, y, hollow}: {x: number; y: number; hollow?: boolean}) {
    return hollow ? (
        <rect x={x + 0.5} y={y + 0.5} width="6" height="6" className="stroke-faint" />
    ) : (
        <rect x={x} y={y} width="7" height="7" className="fill-signal" />
    );
}

/* ── FIG. 02 · Bizstock ─────────────────────────────────────────────────── */

/**
 * Two tills from one codebase, each billing into its own SQLite, both syncing
 * through one hub. The desktop is online and its line is live; the phone has
 * lost its connection — the line is cut — and is still selling.
 */
function Bizstock() {
    const till = (y: number, name: string, status: string, online: boolean) => (
        <g>
            <Panel x={36} y={y} w={270} h={128} />
            <Title x={56} y={y + 30}>
                {name}
            </Title>
            <Dot x={56} y={y + 42} hollow={!online} />
            <Label x={70} y={y + 49}>
                {status}
            </Label>
            <Chip x={56} y={y + 68} w={88} h={36} label="Billing" />
            <Arrow x1={144} y1={y + 86} x2={186} y2={y + 86} />
            <Store cx={232} y={y + 68} w={76} h={44} label="SQLite" />
        </g>
    );

    return (
        <Sheet>
            {/* One codebase: a dimension bracket down the left of both tills. */}
            <g className="stroke-border-strong">
                <line x1="16" y1="44" x2="16" y2="136" />
                <line x1="16" y1="224" x2="16" y2="316" />
                <line x1="11" y1="44" x2="21" y2="44" />
                <line x1="11" y1="316" x2="21" y2="316" />
            </g>
            <text
                x="20"
                y="180"
                transform="rotate(-90 20 180)"
                textAnchor="middle"
                className="fill-faint font-mono text-[11px]"
            >
                one codebase
            </text>

            {till(36, "Desktop", "online, syncing", true)}
            {till(196, "Android", "offline, still selling", false)}

            {/* The hub, ringed like the dial. */}
            <circle cx="462" cy="180" r="70" strokeDasharray="2 5" className="stroke-signal" opacity="0.45" />
            <circle cx="462" cy="180" r="56" className="fill-surface stroke-signal" />
            <Title x={462} y={178} anchor="middle">
                Sync
            </Title>
            <Label x={462} y={197} anchor="middle">
                when online
            </Label>

            {/* Desktop to hub: live. */}
            <path d="M306 100 C352 100 378 132 412 154" strokeWidth="1.5" className="flow stroke-signal" />
            {/* Phone to hub: cut, waiting. */}
            <path d="M306 260 C352 260 378 228 412 206" strokeDasharray="3 5" className="stroke-border-strong" />
            <g>
                <circle cx="363.5" cy="241" r="9" className="fill-background stroke-border-strong" />
                <path d="M359.5 237 l8 8 M367.5 237 l-8 8" className="stroke-muted-foreground" />
            </g>

            {/* English and Urdu. */}
            <rect x="414" y="290" width="96" height="26" className="fill-background stroke-border-strong" />
            <Label x={462} y={307} anchor="middle" tone="ink">
                EN / اردو
            </Label>
        </Sheet>
    );
}

/* ── FIG. 03 · CraftFlow ────────────────────────────────────────────────── */

/**
 * Before: spreadsheets and chat threads, scattered and slightly askew. After:
 * one workspace with search across everything, an English/Arabic switch, and
 * a module for each thing the studio tracks — plus roles, since what you see
 * depends on who you are.
 */
function CraftFlow() {
    const sheet = (x: number, y: number, angle: number) => (
        <g transform={`translate(${x} ${y}) rotate(${angle})`}>
            <rect width="84" height="60" className="fill-surface stroke-border-strong" />
            <g className="stroke-border-strong" opacity="0.7">
                <line x1="0" y1="15" x2="84" y2="15" />
                <line x1="0" y1="30" x2="84" y2="30" />
                <line x1="0" y1="45" x2="84" y2="45" />
                <line x1="28" y1="0" x2="28" y2="60" />
                <line x1="56" y1="0" x2="56" y2="60" />
            </g>
        </g>
    );

    const thread = (x: number, y: number, angle: number) => (
        <g transform={`translate(${x} ${y}) rotate(${angle})`}>
            <path d="M0 0 H80 V40 H20 L10 50 V40 H0 Z" className="fill-surface stroke-border-strong" />
            <line x1="12" y1="14" x2="64" y2="14" className="stroke-border-strong" />
            <line x1="12" y1="26" x2="48" y2="26" className="stroke-border-strong" />
        </g>
    );

    const modules = [
        {label: "Projects", accent: true},
        {label: "Clients"},
        {label: "Designers"},
        {label: "Contracts"},
        {label: "Quotations"},
        {label: "Roles"},
    ];

    return (
        <Sheet>
            {/* Everything converges on the workspace. Drawn first, so the
                fragments sit on top of where their lines start. */}
            <g strokeDasharray="2 4" className="stroke-border-strong">
                <path d="M110 78 L256 180" />
                <path d="M170 150 L256 180" />
                <path d="M104 226 L256 180" />
                <path d="M168 290 L256 180" />
            </g>
            <path d="M250 175 L258 180 L250 185" className="stroke-signal" strokeWidth="1.5" />

            {sheet(40, 50, -5)}
            {thread(104, 126, 4)}
            {sheet(34, 196, 3)}
            {thread(102, 270, -4)}

            <Panel x={266} y={36} w={270} h={288} accent />

            {/* Search across everything, and the language switch. */}
            <rect x="282" y="50" width="176" height="28" className="fill-background stroke-border-strong" />
            <circle cx="296" cy="63" r="5" className="stroke-muted-foreground" />
            <line x1="299.5" y1="66.5" x2="304" y2="71" className="stroke-muted-foreground" />
            <Label x={312} y={68}>
                Search everything
            </Label>
            <rect x="466" y="50" width="54" height="28" className="fill-background stroke-border-strong" />
            <line x1="493" y1="56" x2="493" y2="72" className="stroke-border-strong" />
            <Label x={480} y={68} anchor="middle" tone="ink">
                EN
            </Label>
            <Label x={506} y={68} anchor="middle">
                AR
            </Label>
            <line x1="266" y1="92" x2="536" y2="92" className="stroke-border" />

            {modules.map((module, i) => {
                const x = i % 2 === 0 ? 282 : 406;
                const y = 106 + Math.floor(i / 2) * 64;
                return (
                    <g key={module.label}>
                        <rect
                            x={x}
                            y={y}
                            width="114"
                            height="54"
                            className={module.accent ? "fill-signal-soft stroke-signal" : "fill-background stroke-border-strong"}
                        />
                        <text
                            x={x + 12}
                            y={y + 23}
                            className="fill-foreground font-display text-[13.5px] font-semibold tracking-[-0.01em]"
                        >
                            {module.label}
                        </text>
                        <line x1={x + 12} y1={y + 36} x2={x + 74} y2={y + 36} className="stroke-border-strong" />
                        <line x1={x + 12} y1={y + 43} x2={x + 52} y2={y + 43} className="stroke-border-strong" />
                    </g>
                );
            })}

            <Dot x={282} y={303} />
            <Label x={296} y={310}>
                New project: set up in minutes
            </Label>

            <Label x={34} y={346} tone="faint">
                spreadsheets, chat threads
            </Label>
        </Sheet>
    );
}

/* ── FIG. 04 · Al Nada Store ────────────────────────────────────────────── */

/**
 * Headless commerce: the marketing team edits products and content in
 * Payload, which keeps them in PostgreSQL and feeds the storefront over its
 * API. The storefront — bilingual — carries the three things a customer
 * comes for: the guided product finder, a local checkout through PayTabs,
 * and service requests.
 */
function AlNada() {
    const journeys = [
        {label: "Product finder", note: "guided questions", y: 110},
        {label: "Checkout", note: "local, via PayTabs", y: 174},
        {label: "Service requests", note: "from the storefront", y: 238},
    ];

    return (
        <Sheet>
            {/* The marketing team, at the top of the content flow. */}
            <circle cx="44" cy="44" r="9" className="stroke-muted-foreground" />
            <path d="M28 74 Q44 54 60 74" className="stroke-muted-foreground" />
            <Label x={70} y={52} tone="ink">
                Marketing team
            </Label>
            <Arrow x1={44} y1={80} x2={44} y2={98} />

            <Panel x={24} y={100} w={170} h={86} />
            <Title x={40} y={130}>
                Payload CMS
            </Title>
            <Label x={40} y={150}>
                products and content
            </Label>
            <Label x={40} y={168} tone="faint">
                no developer needed
            </Label>

            <line x1="109" y1="186" x2="109" y2="230" className="stroke-border-strong" />
            <Store cx={109} y={230} w={100} h={50} label="PostgreSQL" />

            {/* CMS to storefront, over the API: live. */}
            <path d="M194 143 H230" strokeWidth="1.5" className="flow stroke-signal" />
            <path d="M224 139 L230 143 L224 147" strokeWidth="1.5" className="stroke-signal" />
            <Label x={212} y={134} anchor="middle" tone="faint">
                API
            </Label>

            {/* The storefront, as a browser window. */}
            <Panel x={236} y={36} w={300} h={288} accent />
            <line x1="236" y1="64" x2="536" y2="64" className="stroke-signal" opacity="0.6" />
            <g className="fill-border-strong">
                <circle cx="250" cy="50" r="3.5" />
                <circle cx="262" cy="50" r="3.5" />
                <circle cx="274" cy="50" r="3.5" />
            </g>
            <Label x={290} y={54}>
                Storefront
            </Label>
            <Label x={522} y={54} anchor="end" tone="ink">
                EN / AR
            </Label>

            {/* The brand: a cooling company, so a snowflake. */}
            <g transform="translate(258 87)" className="stroke-signal" strokeWidth="1.25">
                <line x1="0" y1="-8" x2="0" y2="8" />
                <line x1="-6.93" y1="-4" x2="6.93" y2="4" />
                <line x1="-6.93" y1="4" x2="6.93" y2="-4" />
            </g>
            <text x="274" y="92" className="fill-foreground font-display text-[14px] font-semibold tracking-[-0.02em]">
                Al Nada
            </text>

            {journeys.map((journey) => (
                <g key={journey.label}>
                    <rect x="252" y={journey.y} width="268" height="54" className="fill-background stroke-border-strong" />
                    <text
                        x="266"
                        y={journey.y + 24}
                        className="fill-foreground font-display text-[13.5px] font-semibold tracking-[-0.01em]"
                    >
                        {journey.label}
                    </text>
                    <Label x={266} y={journey.y + 41} tone="faint">
                        {journey.note}
                    </Label>
                </g>
            ))}

            {/* Finder: two questions, then a match. */}
            <g>
                <line x1="436" y1="137" x2="490" y2="137" className="stroke-border-strong" />
                <circle cx="436" cy="137" r="9" className="fill-background stroke-border-strong" />
                <circle cx="464" cy="137" r="9" className="fill-background stroke-border-strong" />
                <circle cx="494" cy="137" r="9" className="fill-signal" />
                <Label x={436} y={141} anchor="middle">
                    ?
                </Label>
                <Label x={464} y={141} anchor="middle">
                    ?
                </Label>
                <path d="M489.5 137.5 l3 3 l6 -7" strokeWidth="1.5" className="stroke-signal-on-solid" />
            </g>
            {/* Checkout: a card. */}
            <g>
                <rect x="466" y="189" width="40" height="26" className="fill-background stroke-border-strong" />
                <line x1="466" y1="197" x2="506" y2="197" className="stroke-border-strong" />
                <line x1="472" y1="207" x2="486" y2="207" className="stroke-signal" />
            </g>
            {/* Service: a booking. */}
            <g>
                <rect x="474" y="252" width="30" height="26" className="fill-background stroke-border-strong" />
                <line x1="474" y1="260" x2="504" y2="260" className="stroke-border-strong" />
                <line x1="481" y1="248" x2="481" y2="255" className="stroke-border-strong" />
                <line x1="497" y1="248" x2="497" y2="255" className="stroke-border-strong" />
                <rect x="486" y="265" width="6" height="6" className="fill-signal" />
            </g>
        </Sheet>
    );
}

/* ── FIG. 05 · Quickbeam ────────────────────────────────────────────────── */

/**
 * The sender, the receiver, and the three routes between them in the order
 * they are tried: shared Wi-Fi (live), the app's own hotspot, then animated
 * QR codes read by the camera. Underneath, the measured run from the case
 * study.
 */
function Quickbeam() {
    const routes = [
        {y: 128, step: "1", label: "Shared Wi-Fi", style: "live" as const},
        {y: 164, step: "2", label: "Its own hotspot", style: "dashed" as const},
        {y: 200, step: "3", label: "Animated QR codes", style: "dotted" as const},
    ];

    return (
        <Sheet>
            {/* Sender: a phone with a file on screen. */}
            <rect x="30" y="96" width="76" height="136" rx="10" className="fill-surface stroke-border-strong" />
            <rect x="38" y="110" width="60" height="104" className="fill-background stroke-border" />
            <path d="M58 146 h14 l8 8 v22 h-22 Z M72 146 v8 h8" className="stroke-signal" />
            <Label x={68} y={254} anchor="middle" tone="ink">
                Sender
            </Label>

            {routes.map((route) => (
                <g key={route.y}>
                    <Label x={128} y={route.y - 9} tone="signal">
                        {route.step}
                    </Label>
                    <Label x={144} y={route.y - 9} tone={route.style === "live" ? "ink" : "muted"}>
                        {route.label}
                    </Label>
                    <line
                        x1="110"
                        y1={route.y}
                        x2="424"
                        y2={route.y}
                        strokeWidth={route.style === "live" ? 1.5 : 1}
                        strokeDasharray={route.style === "dashed" ? "6 6" : route.style === "dotted" ? "1.5 5" : undefined}
                        strokeLinecap={route.style === "dotted" ? "round" : undefined}
                        className={route.style === "live" ? "flow stroke-signal" : "stroke-border-strong"}
                    />
                    <path
                        d={`M418 ${route.y - 4} L424 ${route.y} L418 ${route.y + 4}`}
                        strokeWidth={route.style === "live" ? 1.5 : 1}
                        className={route.style === "live" ? "stroke-signal" : "stroke-border-strong"}
                    />
                </g>
            ))}

            {/* Animated QR: a few frames of code, fanned like a flip-book. */}
            <g>
                <rect x="318" y="182" width="30" height="30" className="fill-background stroke-border" />
                <rect x="312" y="186" width="30" height="30" className="fill-background stroke-border-strong" />
                <g className="fill-muted-foreground">
                    <rect x="316" y="190" width="7" height="7" />
                    <rect x="331" y="190" width="7" height="7" />
                    <rect x="316" y="205" width="7" height="7" />
                    <rect x="327" y="201" width="3" height="3" />
                    <rect x="333" y="207" width="3" height="3" />
                    <rect x="327" y="208" width="3" height="3" />
                </g>
            </g>

            {/* Receiver: any device with a browser. */}
            <rect x="440" y="124" width="96" height="66" className="fill-surface stroke-border-strong" />
            <line x1="440" y1="136" x2="536" y2="136" className="stroke-border-strong" />
            <g className="fill-border-strong">
                <circle cx="447" cy="130" r="2" />
                <circle cx="454" cy="130" r="2" />
            </g>
            <path d="M462 154 h14 l8 8 v16 h-22 Z" className="stroke-signal" />
            <path d="M430 194 H546 L540 202 H436 Z" className="fill-surface stroke-border-strong" />
            <Label x={488} y={226} anchor="middle" tone="ink">
                Any browser
            </Label>
            <Label x={488} y={242} anchor="middle" tone="faint">
                nothing installed
            </Label>

            {/* The measured run. */}
            <line x1="30" y1="272" x2="536" y2="272" className="stroke-border" />
            <g>
                <text x="30" y="304" className="fill-foreground font-display text-[17px] font-semibold tracking-[-0.02em]">
                    5 MB
                </text>
                <Label x={30} y={324} tone="faint">
                    file sent
                </Label>
                <line x1="186" y1="286" x2="186" y2="326" className="stroke-border" />
                <text x="206" y="304" className="fill-foreground font-display text-[17px] font-semibold tracking-[-0.02em]">
                    38.5 MB/s
                </text>
                <Label x={206} y={324} tone="faint">
                    measured speed
                </Label>
                <line x1="372" y1="286" x2="372" y2="326" className="stroke-border" />
                <text x="392" y="304" className="fill-signal-ink font-display text-[17px] font-semibold tracking-[-0.02em]">
                    Byte-identical
                </text>
                <Label x={392} y={324} tone="faint">
                    on arrival
                </Label>
            </g>
        </Sheet>
    );
}
