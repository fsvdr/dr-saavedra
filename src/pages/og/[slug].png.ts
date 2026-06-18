import { getSecret } from 'astro:env/server';
import type { APIContext } from 'astro';
import { ImageResponse } from 'workers-og';
import { SANITY_QUERY_URL } from '../../lib/sanityConfig';

// Rendered on demand by the Worker (Puppeteer screenshots aren't possible on
// Cloudflare Workers, so we draw the social card with workers-og / Satori).
export const prerender = false;

const FONT_BASE = 'https://pub-dba0a7ed9ee84bcaa39a9591a0baf63a.r2.dev/fonts/greycliff-cf-v2.0';

const escapeHtml = (value: string): string => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function loadFont(file: string): Promise<ArrayBuffer | null> {
  try {
    const response = await fetch(`${FONT_BASE}/${file}`, {
      cf: { cacheTtl: 86400, cacheEverything: true },
    } as RequestInit);
    if (!response.ok) return null;
    return await response.arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET({ params }: APIContext): Promise<Response> {
  const slug = params.slug ?? '';

  let title = 'Dr. Benito Saavedra Alvarado';
  try {
    const query = '*[_type == "blogPost" && slug.current == $slug][0]{title}';
    const params = new URLSearchParams({ query, $slug: JSON.stringify(slug) });
    // The dataset is private; authenticate the read so the CDN returns content.
    const token = getSecret('SANITY_READ_TOKEN');
    const response = await fetch(`${SANITY_QUERY_URL}?${params.toString()}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (response.ok) {
      const { result } = (await response.json()) as { result?: { title?: string } | null };
      if (result?.title) title = result.title;
    }
  } catch {
    // Fall back to the default title if Sanity is unreachable.
  }

  const html = `
    <div style="height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-between;background:#f7f1ea;padding:64px 80px;font-family:'Greycliff CF';">
      <div style="display:flex;flex:1;align-items:center;font-size:84px;font-weight:600;color:#000000;line-height:1.1;">${escapeHtml(title)}</div>
      <div style="display:flex;width:100%;justify-content:space-between;align-items:center;font-size:30px;color:#000000;">
        <div style="display:flex;align-items:center;font-weight:600;">
          <div style="width:36px;height:36px;border-radius:50%;background:#329f87;margin-right:18px;display:flex;"></div>
          Dr. Saavedra
        </div>
        <div style="display:flex;">Agenda tu cita (55) 1322 7579</div>
        <div style="display:flex;">HMG Hospital Coyoacán, Consultorio 512</div>
      </div>
    </div>`;

  const [medium, demiBold] = await Promise.all([
    loadFont('GreycliffCF-Medium.woff'),
    loadFont('GreycliffCF-DemiBold.woff'),
  ]);

  const fonts = [
    medium && { name: 'Greycliff CF', data: medium, weight: 500 as const, style: 'normal' as const },
    demiBold && { name: 'Greycliff CF', data: demiBold, weight: 600 as const, style: 'normal' as const },
  ].filter(Boolean) as { name: string; data: ArrayBuffer; weight: 500 | 600; style: 'normal' }[];

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
    ...(fonts.length ? { fonts } : {}),
  });
}
