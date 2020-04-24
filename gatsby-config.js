const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Design portfolio`,
    description: `Design portfolio that represents the work and skills of a talented designer, Marion Murvine`,
    author: `@marinagoto`,
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
   /* {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/img/favicon.png'
      }
    },*/
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "styles": path.resolve(__dirname, 'src/styles'),
          "assets": path.resolve(__dirname, 'src/assets'),
          "components": path.resolve(__dirname, 'src/components'),
        },
        extensions: []
      }
    },
  ],
};
