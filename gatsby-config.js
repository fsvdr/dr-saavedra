const portableTextToHtml = require('@sanity/block-content-to-html');

module.exports = {
  siteMetadata: {
    title: `Dr. Benito Saavedra Alvarado`,
    description:
      'Médico especialista en traumatología y ortopédia. Cirugía de rodilla, artroscopía y remplazos articulares. Consulta privada HMG Hospital Coyoacán',
    siteUrl: 'https://drsaavedra.mx',
    author: '@drsaavedramx',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dr. Benito Saavedra Alvarado`,
        short_name: `Dr. Saavedra`,
        start_url: `/`,
        background_color: `#F6F3F0`,
        theme_color: `#069B7A`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-axe',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '34yh9fgc',
        dataset: 'production',
        token: process.env.SANITY_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allSanityBlogPost } }) => {
              return allSanityBlogPost.edges.map(({ node: post }) => {
                // Because our content is in Portable Text we need to render it in plain HTML
                // before we can use it on the feed
                const html = portableTextToHtml({
                  blocks: post.content,
                  serializers: {
                    types: {
                      inlinePostImage: ({
                        node: {
                          asset: { url },
                          alt,
                        },
                      }) => `<img src="${url}" alt="${alt}" />`,
                    },
                  },
                });

                return {
                  title: post.title,
                  date: post.date,
                  description: post.description,
                  url: `${site.siteMetadata.siteUrl}/${post.slug.current}`,
                  guid: `${site.siteMetadata.siteUrl}/${post.slug.current}`,
                  custom_elements: [{ 'content:encoded': html }],
                };
              });
            },
            query: `
              {
                allSanityBlogPost(sort: { fields: releaseDate, order: DESC }) {
                  edges {
                    node {
                      slug {
                        current
                      }
                      date: releaseDate
                      description: summary
                      title
                      content: _rawContent(resolveReferences: { maxDepth: 10 })
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Artículos médicos del Dr. Saavedra',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/thumbnail', '/tu-opinion'],
      },
    },
  ],
};
