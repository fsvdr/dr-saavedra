# Dr. Benito Saavedra Alvarado

Personal portfolio and medical blog for Dr. Benito Saavedra Alvarado — orthopedics &
traumatology specialist. Built with [Astro](https://astro.build), content from
[Sanity](https://www.sanity.io), and deployed to [Cloudflare Workers](https://workers.cloudflare.com).

## Stack

- **Astro** (static output) — pages are prerendered at build time.
- **Sanity** — headless CMS for blog posts and testimonials (project `34yh9fgc`,
  dataset `production`). Read at build time via GROQ.
- **Cloudflare Workers** via `@astrojs/cloudflare` — serves the static assets and a
  handful of on-demand endpoints (see below).
- **Bun** — package manager and task runner.
- **Biome** — linting and formatting.

## Project structure

```
src/
  components/      Reusable .astro components (nav, footer, SEO, cards…)
  layouts/         Base page layout (head, fonts, analytics, nav, footer)
  lib/             Sanity client + GROQ queries, formatting, Portable Text → HTML
  pages/
    index.astro          Home page
    [slug].astro         Blog post pages (generated from Sanity)
    tu-opinion.astro     Testimonial submission form
    404.astro
    rss.xml.ts           RSS feed
    og/[slug].png.ts     Per-article social image (workers-og, on demand)
    api/distance.ts      "¿Qué tan lejos estoy?" — Mapbox travel time (on demand)
    api/testimonial.ts   Saves a testimonial submission to Sanity (on demand)
  styles/          Global CSS (reset, design tokens) + Greycliff @font-face
  images/          Local images optimized at build time
studio/            Sanity Studio (deployed separately)
```

Most routes are static. The OG image route and the two `api/*` routes opt out of
prerendering (`export const prerender = false`) and run on the Worker at request time.

## Development

```sh
bun install
bun run dev        # astro dev server
bun run build      # production build → dist/
bun run preview    # build + wrangler dev (runs the Worker locally)
bun run check      # biome + astro type checks
bun run lint       # biome
bun run format     # biome --write
```

### Environment variables / secrets

Copy `.dev.vars.example` to `.dev.vars` for local development:

| Name                  | Used by                | Purpose                                            |
| --------------------- | ---------------------- | -------------------------------------------------- |
| `MAPBOX_ACCESS_TOKEN` | `api/distance.ts`      | Mapbox token for travel time/distance to the office |
| `SANITY_WRITE_TOKEN`  | `api/testimonial.ts`   | Sanity token with create permission for submissions |

Both are optional — if unset, the related feature responds with an error instead of
crashing the site.

> The build fetches content from Sanity. If the build host can't reach
> `*.sanity.io`, queries fall back to empty content so the build still succeeds —
> make sure the deploy/CI environment can reach Sanity for real content.

## Deployment

```sh
bun run deploy     # astro build && wrangler deploy
```

The `@astrojs/cloudflare` adapter generates the Worker entry and wires the built
static assets automatically, so the root `wrangler.jsonc` only declares the Worker
name, compatibility settings, and bindings.

Set production secrets once with:

```sh
wrangler secret put MAPBOX_ACCESS_TOKEN
wrangler secret put SANITY_WRITE_TOKEN
```

## Sanity Studio

The CMS lives in [`studio/`](./studio) and is deployed independently (`sanity deploy`).
