import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://drsaavedra.mx',
  output: 'static',
  adapter: cloudflare({
    // Optimize local images at build time; pass through everything else.
    imageService: 'compile',
    platformProxy: { enabled: true },
  }),
  env: {
    schema: {
      // Mapbox token for the "¿Qué tan lejos estoy?" distance endpoint.
      MAPBOX_ACCESS_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
      // Sanity token with create permission for testimonial submissions.
      SANITY_WRITE_TOKEN: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/tu-opinion') && !page.includes('/og/'),
    }),
  ],
});
