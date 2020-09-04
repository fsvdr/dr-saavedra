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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
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
  ],
};
