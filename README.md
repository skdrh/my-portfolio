# salman.dragondevs.co

Personal site for Salman Khan — full-stack product engineer, founder of
[dragondevs](https://dragondevs.co).

One page, no photographs, no trackers. Next.js 16, React 19, Tailwind CSS 4.

Laid out like a drafting sheet: a blueprint grid, bracketed callouts and
registration ticks, on the theory that a page about building systems should
look like the drawing of one.

---

## Running it

```bash
npm install
npm run dev
```

Then <http://localhost:3000>.

```bash
npm run build     # production build
npm start         # serve the build
npm run lint      # eslint
```

## The contact form needs environment variables

This is the one thing that will bite you. Copy `.env.example` to `.env.local`
and fill in the SMTP values, and set the same variables in **Vercel → Settings
→ Environment Variables**, then redeploy.

| Variable       | Purpose                                          |
| -------------- | ------------------------------------------------ |
| `SMTP_HOST`    | e.g. `smtp.gmail.com`, `smtp.mailgun.org`        |
| `SMTP_PORT`    | `587` for STARTTLS, `465` for implicit TLS       |
| `SMTP_USER`    | SMTP username                                     |
| `SMTP_PASS`    | SMTP password — a Gmail **app password**, not the account password |
| `CONTACT_TO`   | Inbox that receives enquiries                     |
| `CONTACT_FROM` | From-address; defaults to `SMTP_USER`             |

Without them `/api/contact` returns `503` and the form tells the visitor to
email directly rather than pretending to have sent. Check the server logs for
`[contact] SMTP is not configured` — it names exactly which variable is
missing.

## Editing the content

There is no CMS and no admin. Everything is typed data in two folders:

| File                  | What it holds                                          |
| --------------------- | ------------------------------------------------------ |
| `lib/site.ts`         | Name, role, domain, email, socials, the four headline figures, nav |
| `data/work.ts`        | The four case-studied systems, linked to dragondevs.co  |
| `data/expertise.ts`   | Capabilities, each naming the work that evidences it    |
| `data/stack.ts`       | Technologies grouped by job; `core: true` marks defaults |
| `data/experience.ts`  | The timeline                                            |
| `data/archive.ts`     | Earlier open-source work                                |
| `data/faq.ts`         | FAQ copy — also emitted as FAQPage structured data       |
| `lib/seo.ts`          | JSON-LD schemas and the keyword set                     |

Changing `SITE_URL` in `lib/site.ts` updates the canonical URL, sitemap,
robots.txt, Open Graph tags and structured data together.

## Design system

`app/globals.css` holds it, and the comment at the top explains the reasoning.
The organising idea is a **drafting sheet**:

- **No imagery.** The work is systems work; a dashboard screenshot at thumbnail
  size proves nothing. The page carries itself on structure instead.
- **A blueprint ground.** Deep navy in dark, cool paper in light, with a
  measured 32px grid under the hero and blue-tinted hairlines everywhere, so
  the whole surface reads as one sheet.
- **Drafting motifs that mean something.** Labels sit in square brackets like
  callouts on a drawing (`[ SELECTED WORK ]`), and the profile block carries
  registration ticks on the diagonal.
- **One accent** — `--signal`, an azure — meaning *live, load-bearing, mine*.
  On light it never carries text; it lives in rules, ticks and grid lines while
  the words stay ink. Filled controls use the separate `--signal-solid` /
  `--signal-on-solid` pair, because the azure that reads well as a rule is too
  light to carry white text.
- **Three typefaces, three jobs.** Space Grotesk for headings, Inter for
  paragraphs, IBM Plex Mono — drawn for engineering documentation — for
  anything that behaves like data.
- **Zero radius.** Nothing on a drawing is rounded.
- **One motion behaviour** — a scroll-driven rise on section entry, done in CSS
  with `animation-timeline: view()`. No observer, no JS, and it degrades to
  simply showing the content.

Every text colour is solved against its background for WCAG AA (4.5:1) rather
than picked by eye. The values in `globals.css` carry comments saying so.

## Structure

```
app/
  layout.tsx              fonts, metadata, JSON-LD, theme provider
  page.tsx                section composition
  opengraph-image.tsx     share card, generated from type
  robots.ts  sitemap.ts
  api/contact/route.ts    SMTP delivery
  manifest.ts             web app manifest
components/
  section.tsx             the title-block shell every section opens with
  sections/               hero, work, expertise, stack, experience,
                          archive, faq, contact
data/                     all page content
lib/                      site.ts (identity), seo.ts (schemas), utils.ts
```

## Licence

MIT — see [LICENSE](LICENSE).
