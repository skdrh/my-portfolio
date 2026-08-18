/**
 * Emits structured data as a plain script tag.
 *
 * `<` is escaped so a stray closing tag inside any string value cannot break
 * out of the script element — the standard XSS guard for inline JSON-LD.
 */
export function JsonLd({data}: {data: object}) {
    return (
        <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD has no other insertion point.
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}
