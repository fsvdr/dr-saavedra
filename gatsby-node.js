const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlogPost {
        edges {
          node {
            id
            slug {
              current
            }
          }
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `);

  if (result.errors) console.error(result.errors);

  result.data.allSanityBlogPost.edges.forEach(({ node: post, next, previous }) => {
    createPage({
      path: post.slug.current,
      component: path.resolve('src/templates/post.js'),
      context: {
        id: post.id,
        previous: previous ? previous.id : null,
        next: next ? next.id : null,
      },
    });
  });
};
