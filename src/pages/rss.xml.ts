import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { portableTextToHtml } from '../lib/portableText';
import { getAllPosts } from '../lib/sanity';

export async function GET(context: APIContext) {
  const posts = await getAllPosts();

  return rss({
    title: 'Artículos médicos del Dr. Saavedra',
    description:
      'Médico especialista en traumatología y ortopédia. Cirugía de rodilla, artroscopía y remplazos articulares.',
    site: context.site?.href ?? 'https://drsaavedra.mx',
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.releaseDate),
      description: post.summary,
      link: `/${post.slug}`,
      content: portableTextToHtml(post.content),
    })),
  });
}
