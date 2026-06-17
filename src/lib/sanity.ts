import { createClient } from '@sanity/client';
import { SANITY_API_VERSION, SANITY_DATASET, SANITY_PROJECT_ID } from './sanityConfig';

export { SANITY_DATASET, SANITY_PROJECT_ID } from './sanityConfig';

const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: true,
});

/**
 * Run a GROQ query at build time. The build environment may not have network
 * access to the Sanity API, so failures resolve to the provided fallback
 * instead of breaking the whole build — real deploys populate the content.
 */
export async function sanityFetch<T>(query: string, fallback: T, params: Record<string, unknown> = {}): Promise<T> {
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (error) {
    console.warn('[sanity] query failed, using fallback content:', error instanceof Error ? error.message : error);
    return fallback;
  }
}

export type PortableTextBlock = {
  _type: string;
  [key: string]: unknown;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  releaseDate: string;
  summary: string;
  tags: string[];
  content: PortableTextBlock[];
  plainText: string;
};

export type BlogPostSummary = Omit<BlogPost, 'content' | 'tags'>;

export type Testimonial = {
  _id: string;
  rating: number;
  author: string;
  content: string;
  submissionDate: string;
};

const POST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  releaseDate,
  summary,
  tags,
  content[]{
    ...,
    _type == "inlinePostImage" => {
      ...,
      "imageUrl": asset->url
    }
  },
  "plainText": pt::text(content)
`;

const POST_SUMMARY_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  releaseDate,
  summary,
  "plainText": pt::text(content)
`;

/** Latest post summaries for the home page blog index. */
export const getLatestPosts = (limit = 5) =>
  sanityFetch<BlogPostSummary[]>(
    `*[_type == "blogPost" && defined(slug.current)] | order(releaseDate desc)[0...$limit]{${POST_SUMMARY_FIELDS}}`,
    [],
    { limit }
  );

/** Every post, newest first, with full content — used to build article pages. */
export const getAllPosts = () =>
  sanityFetch<BlogPost[]>(
    `*[_type == "blogPost" && defined(slug.current)] | order(releaseDate desc){${POST_FIELDS}}`,
    []
  );

/** Approved testimonials for the home page. */
export const getTestimonials = (limit = 10) =>
  sanityFetch<Testimonial[]>(
    `*[_type == "testimonial" && approved == true] | order(submissionDate desc)[0...$limit]{
      _id, rating, author, content, submissionDate
    }`,
    [],
    { limit }
  );
