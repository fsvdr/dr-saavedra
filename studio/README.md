# Dr. Saavedra — Sanity Studio

Content Studio for the [drsaavedra.mx](https://drsaavedra.mx) site. Manages blog
posts (`blogPost`) and patient testimonials (`testimonial`).

- Project ID: `34yh9fgc`
- Dataset: `production`
- Sanity Studio **v6** (config-as-code, Vite).

## Commands

```sh
bun install
bun run dev      # local studio at http://localhost:3333
bun run build    # production build → dist/
bun run deploy   # deploy to <project>.sanity.studio
bun run check    # tsc type check
```

## Schemas

| Type              | Purpose                                                |
| ----------------- | ------------------------------------------------------ |
| `blogPost`        | Medical articles (Portable Text + inline images)       |
| `testimonial`     | Patient reviews (shown on the site once `approved`)     |
| `inlinePostImage` | Image block embedded inside an article's content       |

Testimonials submitted through the site's `/tu-opinion` form are created here with
`approved: false` and must be approved before they appear on the site.
