"use client";

import {Check, Link2} from "lucide-react";
import {useEffect, useState} from "react";

import {SITE_URL} from "@/lib/site";

/**
 * The share option that fits wherever the link is going next — a DM, a
 * Slack thread, an email. Always copies the canonical address, not whatever
 * preview or localhost URL the reader happens to be on.
 */
export function CopyLinkButton() {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
    }, [copied]);

    async function copy() {
        try {
            await navigator.clipboard.writeText(SITE_URL);
            setCopied(true);
        } catch {
            // Blocked clipboard (permissions, insecure context). The share
            // links beside this still work, so there is nothing to recover.
        }
    }

    return (
        <button
            type="button"
            onClick={copy}
            title="Copy link"
            className="inline-flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
        >
            {copied ? (
                <Check className="size-3.5 text-signal-ink dark:text-signal" />
            ) : (
                <Link2 className="size-3.5" />
            )}
            <span className="sr-only" aria-live="polite">
                {copied ? "Link copied" : "Copy link to this page"}
            </span>
        </button>
    );
}
