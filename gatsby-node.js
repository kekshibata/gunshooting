const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // 記事詳細ページ
  const postResult = await graphql(`
        query PostsQuery {
            allMicrocmsBlog(sort: {order: DESC, fields: createdAt}) {
            edges {
                node {
                blogId
                game {
                    slug
                }
                }
            }
        }
        }
    `);

  const postsList = postResult.data.allMicrocmsBlog.edges;

  const blogPostTemplate = path.resolve('src/components/templates/blog-post.jsx');
  const gamePostTemplate = path.resolve('src/components/templates/game-post.jsx');

  postsList.forEach(({ node }) => {
    createPage({
      path: node.game ? `/${node.game.slug}/${node.blogId}` : `/posts/${node.blogId}`,
      component: node.game ? gamePostTemplate : blogPostTemplate,
      context: node.game && { gameSlug: node.game.slug },
    });
  });
};
