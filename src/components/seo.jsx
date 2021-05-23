import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl
          defaultImage: image
          twitterUsername
        }
      }
    }
  `;

const SEO = ({
  title, description, image, article, lang,
}) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || `${siteUrl}/${defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };
  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang,
      }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}

      {/* segment  */}
      <script>
        {!(function () {
          const analytics = window.analytics = window.analytics || []; if (!analytics.initialize) {
            if (analytics.invoked)window.console && console.error && console.error('Segment snippet included twice.'); else {
              analytics.invoked = !0; analytics.methods = ['trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview', 'identify', 'reset', 'group', 'track', 'ready', 'alias', 'debug', 'page', 'once', 'off', 'on', 'addSourceMiddleware', 'addIntegrationMiddleware', 'setAnonymousId', 'addDestinationMiddleware']; analytics.factory = function (e) { return function () { const t = Array.prototype.slice.call(arguments); t.unshift(e); analytics.push(t); return analytics; }; }; for (let e = 0; e < analytics.methods.length; e++) { const key = analytics.methods[e]; analytics[key] = analytics.factory(key); }analytics.load = function (key, e) { const t = document.createElement('script'); t.type = 'text/javascript'; t.async = !0; t.src = `https://cdn.segment.com/analytics.js/v1/${key}/analytics.min.js`; const n = document.getElementsByTagName('script')[0]; n.parentNode.insertBefore(t, n); analytics._loadOptions = e; }; analytics._writeKey = 'XhOjh2zf2HyzBKckMyf2lwVVJhPYBOBB'; analytics.SNIPPET_VERSION = '4.13.2';
              analytics.load('XhOjh2zf2HyzBKckMyf2lwVVJhPYBOBB');
              analytics.page();
            }
          }
        }())}
      </script>
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};
SEO.defaultProps = {
  lang: 'ja',
  title: null,
  description: null,
  image: null,
  article: false,
};
