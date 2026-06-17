import { getSecret } from 'astro:env/server';
import type { APIContext } from 'astro';
import { SANITY_MUTATE_URL } from '../../lib/sanityConfig';

export const prerender = false;

type Submission = {
  rating?: number;
  author?: string;
  content?: string;
  agrees?: boolean;
};

export async function POST({ request }: APIContext): Promise<Response> {
  const token = getSecret('SANITY_WRITE_TOKEN');
  if (!token) return new Response('Sanity write token is not configured.', { status: 500 });

  let payload: Submission;
  try {
    payload = (await request.json()) as Submission;
  } catch {
    return new Response('Invalid JSON body.', { status: 400 });
  }

  const { rating, author, content, agrees } = payload;
  const ratingValue = Number(rating);

  if (
    !Number.isFinite(ratingValue) ||
    ratingValue < 1 ||
    ratingValue > 5 ||
    !author ||
    !content ||
    typeof agrees !== 'boolean'
  ) {
    return new Response('Invalid submission.', { status: 400 });
  }

  const mutations = {
    mutations: [
      {
        create: {
          _type: 'testimonial',
          rating: ratingValue,
          author: String(author).slice(0, 120),
          content: String(content).slice(0, 200),
          agrees,
          submissionDate: new Date().toISOString(),
          approved: false,
        },
      },
    ],
  };

  const response = await fetch(SANITY_MUTATE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(mutations),
  });

  if (!response.ok) return new Response('Could not save the testimonial.', { status: 502 });

  return new Response('OK', { status: 200 });
}
