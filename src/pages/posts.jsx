import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Posts from '../components/posts';

const BlogPosts = ({ data }) => (
  <>
    <SEO title="全記事一覧" />
    <Layout>
      <div className="pt-4 pb-8">
        <h1 className="font-bold text-xl ml-2 mb-4">全記事一覧</h1>
        {data.allMicrocmsBlog.edges.map(({ node }) => {
          const {
            title,
            blogId,
            slug,
            writer,
            createdAt,
            eyeCatch: {
              image: {
                url,
              },
            },
            game,
          } = node;
          return (
            <Posts
              blogId={blogId}
              slug={slug}
              gameSlug={game?.slug}
              title={title}
              writer={writer}
              createdAt={createdAt}
              imageUrl={url}
            />
          );
        })}
      </div>
    </Layout>
  </>
);

export const query = graphql`
query PostsPageQuery {
    allMicrocmsBlog(sort: {order: DESC, fields: createdAt}) {
        edges {
          node {
            title
            blogId
            slug
            createdAt(formatString: "YYYY/MM/DD")
            eyeCatch {
              image {
                url
              }
            }
            writer {
              name
              image {
                url
              }
            }
            game {
              slug
            }
          }
        }
      }
  }
`;

export default BlogPosts;
