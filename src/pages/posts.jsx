import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Posts from '../components/posts';

const BlogPosts = ({ data }) => (
  <>
    <Layout>
      <div className="pt-4 pb-8">
        <h1 className="font-bold text-xl ml-2 mb-4">全記事一覧</h1>
        {data.allMicrocmsBlog.edges.map(({ node }) => {
          const {
            title,
            writer,
            createdAt,
            eyeCatch: {
              image: {
                url,
              },
            },
          } = node;
          return (
            <Posts title={title} writer={writer} createdAt={createdAt} imageUrl={url} />
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
          }
        }
      }
  }
`;

export default BlogPosts;
