/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require('path');

require('dotenv').config({
  path: '.env.development',
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'GunShooting',
    description: 'ガンシューティングゲーム総合情報・攻略サイト',
    author: 'koki shibata',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'houseof',
        apis: [
          {
            endpoint: 'blog',
          },
          {
            endpoint: 'writer',
          },
          {
            endpoint: 'category',
          },
          {
            endpoint: 'pages',
          },
          {
            endpoint: 'games',
          },
        ],

      },
    },
  ],
};
