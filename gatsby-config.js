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
  ],
};
