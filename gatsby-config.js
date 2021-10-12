require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Cozy Codeur`,
    description: `Développeur Fullstack d'applications web en Freelance`,
    author: `Cozy Codeur`,
    catchPhrase: `Je développe vos projets web sur mesure`,
  },
  plugins: [
    {
      resolve: `@chakra-ui/gatsby-plugin`,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
  ],
}
