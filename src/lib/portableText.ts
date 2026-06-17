import { type PortableTextHtmlComponents, toHTML } from '@portabletext/to-html';
import type { PortableTextBlock } from './sanity';

const escapeHtml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const components: Partial<PortableTextHtmlComponents> = {
  types: {
    inlinePostImage: ({ value }) => {
      const url = value.imageUrl as string | undefined;
      const alt = (value.alt as string | undefined) ?? '';
      if (!url) return '';
      const src = `${url}?w=800&auto=format`;
      return `<figure class="post-figure">
          <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />
          <figcaption>${escapeHtml(alt)}</figcaption>
        </figure>`;
    },
  },
};

/** Render Sanity Portable Text into an HTML string for `set:html`. */
export const portableTextToHtml = (blocks: PortableTextBlock[] = []): string => toHTML(blocks, { components });
