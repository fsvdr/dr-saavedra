import { type PortableTextHtmlComponents, toHTML } from '@portabletext/to-html';
import type { PortableTextBlock } from './sanity';

const escapeHtml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Inline post images render at a max content width of ~368px (a 400px box minus
// its 1.6rem border). These widths cover that slot up to ~3x device-pixel-ratio
// while letting the Sanity CDN pick a fitting variant per device.
const SANITY_IMAGE_WIDTHS = [400, 600, 800, 1100];

/** Sanity CDN transform: resize (never upscaling past the original), best format, q80. */
const sanityImageUrl = (url: string, width: number): string =>
  `${url}?w=${width}&q=80&auto=format&fit=max`;

const components: Partial<PortableTextHtmlComponents> = {
  types: {
    inlinePostImage: ({ value }) => {
      const url = value.imageUrl as string | undefined;
      const alt = (value.alt as string | undefined) ?? '';
      if (!url) return '';
      const src = sanityImageUrl(url, 800);
      const srcset = SANITY_IMAGE_WIDTHS.map((w) => `${sanityImageUrl(url, w)} ${w}w`).join(', ');
      const sizes = '(min-width: 480px) 400px, 90vw';
      return `<figure class="post-figure">
          <img src="${escapeHtml(src)}" srcset="${escapeHtml(srcset)}" sizes="${sizes}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />
          <figcaption>${escapeHtml(alt)}</figcaption>
        </figure>`;
    },
  },
};

/** Render Sanity Portable Text into an HTML string for `set:html`. */
export const portableTextToHtml = (blocks: PortableTextBlock[] = []): string => toHTML(blocks, { components });
