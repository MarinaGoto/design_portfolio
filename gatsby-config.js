const path = require('path');

module.exports = {
  siteMetadata: {
    title: `developer portfolio`,
    description: `Personal digital space that represents my work and values.`,
    author: `@marinagoto`,
    image: "/images/preview.jpg",
    twitterUsername: "@mari__goto",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: `$is-dev: ${true};`,
        includePaths: [
          './node_modules/normalize-scss/sass',
          './node_modules/sass-mq',
          './node_modules/foundation-sites/scss',
        ],
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
    `gatsby-plugin-typescript`,
   /* {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [
            '__font_goes_here__',
          ],
          urls: ['/fonts/fonts.css']
        }
      }
    },*/
    {
      resolve: `gatsby-plugin-force-file-loader`,
      options: {
        rules: [
          'fonts', /* Matches Gatsby default rules for fonts */
          'images', /* Matches Gatsby default rules for images */
          'media', /* Matches Gatsby default rules for media (video/audio) */
        ],
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "styles": path.resolve(__dirname, 'src/styles'),
          "images": path.resolve(__dirname, 'src/images'),
          "components": path.resolve(__dirname, 'src/components'),
        },
        extensions: []
      }
    },
  ],
};
