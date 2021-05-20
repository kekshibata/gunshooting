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
    siteUrl: 'https://gunshooting.gatsbyjs.io',
    title: 'ガンシューティング',
    titleTemplate: '%s | ガンシューティングゲーム総合情報・攻略サイト',
    description: 'ガンシューティングゲーム総合情報・攻略サイト',
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
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
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
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-9VE9N30B8Q',
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        /* gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        }, */
      },
    },

  ],
};
