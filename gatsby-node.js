const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  return;
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `posts` });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  return;
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `blog${node.fields.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    });
  });
};
