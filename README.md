# salman.dragondevs.co

Personal site for Salman Khan (skdrh) — software architect and product
builder, founder of [dragondevs](https://dragondevs.co).

One page, one photograph, no trackers. Next.js 16, React 19, Tailwind CSS 4.
The copy follows the [GitHub profile README](https://github.com/skdrh/skdrh):
short, first person, and in the same order.

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
| `lib/site.ts`         | Name, handle, title, description, portrait, socials, figures, nav |
| `data/now.ts`         | Right now — what is on the bench                        |
| `data/work.ts`        | The four case-studied systems, linked to dragondevs.co  |
| `data/built.ts`       | Things I've built — earlier projects, one line each     |
| `data/toolbox.ts`     | Technologies grouped by job                             |
| `data/experience.ts`  | The timeline                                            |
| `data/principles.ts`  | How I work — the three rules                            |
| `data/faq.ts`         | FAQ copy — also emitted as FAQPage structured data       |
| `lib/seo.ts`          | JSON-LD schemas and the keyword set                     |
| `public/skdrh.jpg`    | The portrait — hero, share card, Person schema, sitemap |

Changing `SITE_URL` in `lib/site.ts` updates the canonical URL, sitemap,
robots.txt, Open Graph tags and structured data together.

## SEO budgets

The page was audited with Seobility and these are the limits it checks. Keep
them when editing:

- **Title** under 580px, **meta description** under 1000px (Arial 20px and
  14px respectively). The current ones are ~551px and ~945px.
- **One link per destination, and no anchor text twice.** The header nav and
  the footer index use different labels on purpose.
- **Few outbound links.** There are 15: three profiles, dragondevs, Bizstock,
  dargo-cli, four case studies, WhatsApp and four share links. It was 34.
- **Headings only for structure** — one H1, a H2 per section, a H3 per case
  study. Questions, roles and project names are not headings. It was 41.
- **Name and handle together.** "Salman Khan" alone belongs to a film star;
  the title, image alt, caption and structured data all pair it with *skdrh*.

## Design system

`app/globals.css` holds it, and the comment at the top explains the reasoning.
The organising idea is a **drafting sheet**:

- **One photograph.** The portrait, framed as `FIG. 01` with registration
  ticks. No screenshots: a dashboard at thumbnail size proves nothing, so the
  rest of the page carries itself on structure.
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
  opengraph-image.tsx     share card: the sheet plus the portrait
  robots.ts  sitemap.ts
  api/contact/route.ts    SMTP delivery
  manifest.ts             web app manifest
components/
  section.tsx             the title-block shell every section opens with
  sections/               hero, now, work, built, toolbox, experience,
                          how-i-work, faq, contact
  share-links.tsx         share this page (X, LinkedIn, Facebook, WhatsApp, copy)
data/                     all page content
lib/                      site.ts (identity), seo.ts (schemas), utils.ts
```

## Licence

MIT — see [LICENSE](LICENSE).
