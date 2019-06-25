module.exports = {
  siteMetadata: {
    title: `Dr. Benito Saavedra Alvarado`,
    description: `Médico especialista en traumatología y ortopédia.
Cirjuía de rodilla, artroscopía y remplazos articulares.`,
    author: `@fsvdr`,
    contact: {
      address: {
        title: `HMG Hospital Coyoacán, Consultorio 512`,
        link: `https://goo.gl/maps/WAgbfa7Pdip47SVK6`,
        description: `División del Norte #3395, Colonia El Rosario, Ciudad de México`,
      },
      phone: {
        title: `(55) 3683 7578`,
        link: `tel:5536837578`,
        description: `Teléfono del consultorio`,
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-remark`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({
            "features": {
              "environment-variables": true,
              "nesting-rules": true,
              "custom-media-queries": true,
              "custom-selectors": true,
            }
          }),
          require(`autoprefixer`),
          require(`css-mqpacker`),
        ],
      },
    },
    `gatsby-plugin-stylelint`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}