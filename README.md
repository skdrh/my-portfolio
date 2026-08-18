# salman.dragondevs.co

Personal site for Salman Khan — full-stack product engineer, founder of
[dragondevs](https://dragondevs.co).

One page, no photographs, no trackers. Next.js 16, React 19, Tailwind CSS 4.

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
| `lib/seo.ts`          | JSON-LD schemas and the keyword set                     |

Changing `SITE_URL` in `lib/site.ts` updates the canonical URL, sitemap,
robots.txt, Open Graph tags and structured data together.

## Design system

`app/globals.css` holds it, and the comment at the top explains the reasoning.
The short version:

- **No imagery.** The work is systems work; a dashboard screenshot at thumbnail
  size proves nothing. The page is laid out like a specification sheet instead —
  numbered sections, hairline rules, tabular figures, mono labels.
- **One accent** (`--signal`, a phosphor lime) meaning *live, active, mine*. It
  never carries text on a light background; it lives in marks, rules and fills
  while the words stay ink.
- **Three typefaces, three jobs.** Space Grotesk for headings, Inter for
  paragraphs, JetBrains Mono for anything that behaves like data.
- **Hard geometry.** 2px radius, 1px rules. Nothing floats.
- **One motion behaviour** — a scroll-driven rise on section entry, done in CSS
  with `animation-timeline: view()`. No observer, no JS, and it degrades to
  simply showing the content.

## Structure

```
app/
  layout.tsx              fonts, metadata, JSON-LD, theme provider
  page.tsx                section composition
  opengraph-image.tsx     share card, generated from type
  robots.ts  sitemap.ts
  api/contact/route.ts    SMTP delivery
components/
  section.tsx             the numbered-section shell every section uses
  sections/               hero, work, expertise, stack, experience, archive, contact
data/                     all page content
lib/                      site.ts (identity), seo.ts (schemas), utils.ts
```

## Licence

MIT — see [LICENSE](LICENSE).
