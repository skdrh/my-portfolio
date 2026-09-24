import {FacebookIcon, LinkedInIcon, WhatsAppIcon, XIcon} from "@/components/brand-icons";
import {CopyLinkButton} from "@/components/copy-link-button";
import {ALIAS, NAME, SITE_URL} from "@/lib/site";

const SHARE_URL = encodeURIComponent(SITE_URL);
const SHARE_TEXT = encodeURIComponent(`${NAME} (${ALIAS}) builds products end to end`);

/**
 * Share endpoints for this page, in the footer.
 *
 * These are not the profile links in the hero — those say where to find me,
 * these hand the page to someone else. The X intent stays on twitter.com
 * because that is the address sharing detectors (and a decade of share
 * buttons) recognise; it redirects to x.com. `nofollow` because a share
 * endpoint is not a page this one should be vouching for.
 */
const TARGETS = [
    {
        network: "X",
        href: `https://twitter.com/intent/tweet?url=${SHARE_URL}&text=${SHARE_TEXT}`,
        icon: XIcon,
    },
    {
        network: "LinkedIn",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${SHARE_URL}`,
        icon: LinkedInIcon,
    },
    {
        network: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${SHARE_URL}`,
        icon: FacebookIcon,
    },
    {
        network: "WhatsApp",
        href: `https://api.whatsapp.com/send?text=${SHARE_TEXT}%20${SHARE_URL}`,
        icon: WhatsAppIcon,
    },
];

export function ShareLinks() {
    return (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <p className="field">Share this page</p>
            <ul className="flex items-center gap-1.5">
                {TARGETS.map((target) => (
                    <li key={target.network}>
                        <a
                            href={target.href}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            title={`Share on ${target.network}`}
                            className="inline-flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                        >
                            <target.icon className="size-3.5" />
                            <span className="sr-only">Share on {target.network}</span>
                        </a>
                    </li>
                ))}
                <li>
                    <CopyLinkButton />
                </li>
            </ul>
        </div>
    );
}
