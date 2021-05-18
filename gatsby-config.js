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
    siteUrl: 'https://gunshooting.net',
    title: 'GunShooting',
    titleTemplate: '%s | ガンシューティングゲーム総合情報・攻略サイト',
    description: 'ガンシューティングゲーム総合情報・攻略サイト',
    author: 'koki shibata',
    image: 'favicon.PNG',
    twitterUsername: '@gunshootingnet',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gun Shooting',
        short_name: 'GunShooting',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'static/favicon.PNG',
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
