const { createFilePath } = require("gatsby-source-filesystem");
/* const path = require("path"); */
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "content" });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

/* exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve("./src/templates/SitesLayout.js"),
        context: {
          slug: edge.node.fields.slug,
          absolutePathRegex: `/^${path.dirname(edge.node.fileAbsolutePath)}/`,
        },
      });
    });
  });
}; */

/* exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions;
  createFieldExtension({
    name: `defaultArray`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return [];
          }
          return source[info.fieldName];
        },
      };
    },
  });
  const typeDefs = `
    type Site implements Node {
      siteMetadata: SiteMetadata
    }
    type SiteMetadata {
      menuLinks: [MenuLinks]!
    }
    type MenuLinks {
      name: String!
      link: String!
      subMenu: [SubMenu] @defaultArray
    }
    type SubMenu {
      name: String
      link: String
    }
  `;
  createTypes(typeDefs);
};
 */
