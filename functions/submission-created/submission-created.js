const sanityClient = require('@sanity/client');

/**
 * Publish a new testimonial to Sanity out of the submitted form
 */
exports.handler = async ({ body }) => {
  const parsedBody = JSON.parse(body);
  const {
    payload: {
      form_name,
      data: { rating, author, content, agrees },
    },
  } = parsedBody;

  if (form_name !== 'testimonial' || !rating || !author || !content || ![true, false].includes(agrees)) return;

  const client = sanityClient({
    projectId: '34yh9fgc',
    dataset: 'production',
    token: process.env.SANITY_CLIENT_ACCESS_TOKEN,
  });

  const doc = {
    _type: 'testimonial',
    rating,
    author,
    submissionDate: new Date().toISOString(),
    content,
    agrees,
  };

  await client.create(doc);

  return {
    statusCode: 200,
    body: 'OK',
  };
};
