// Shared Sanity constants with no SDK import, so Worker runtime endpoints can
// talk to Sanity over plain fetch without bundling @sanity/client.
export const SANITY_PROJECT_ID = '34yh9fgc';
export const SANITY_DATASET = 'production';
export const SANITY_API_VERSION = '2024-01-01';

export const SANITY_QUERY_URL = `https://${SANITY_PROJECT_ID}.apicdn.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}`;
export const SANITY_MUTATE_URL = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/mutate/${SANITY_DATASET}`;
