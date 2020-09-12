const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: '34yh9fgc',
  dataset: 'production',
  token: process.env.SANITY_ACCESS_TOKEN,
});

exports.handler = async (event) => {
  console.log('[SUBMISSION]', event);
};
