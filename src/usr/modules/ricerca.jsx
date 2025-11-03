//import
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "react-bootstrap";

import ItemPreview from "../modules/itemPreview";

//markup
const RicercaContent = () => {
  const data = useStaticQuery(graphql`
    {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { 
        internal: { contentFilePath: { regex: "/ricerca/(?!.*index\\.mdx$)/" } } 
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 500)
          internal {
            contentFilePath
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "it-IT")
            description
            pinned
            slug
            img {
              base
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  formats: [AUTO, AVIF, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
  `);

  const allPosts = data.allMdx.edges;

  // Helper function to compute slug from file path
  const getSlug = (node) => {
    if (node.frontmatter.slug) {
      return node.frontmatter.slug === "home" ? "/" : node.frontmatter.slug;
    }

    if (node.internal?.contentFilePath) {
      const match = node.internal.contentFilePath.match(/src\/usr\/contents\/(.+)/);
      if (!match) return "/";

      let relativePath = match[1];
      // Remove /index.mdx, /index.md, .mdx, or .md
      relativePath = relativePath
        .replace(/\/index\.mdx$/i, '')
        .replace(/\/index\.md$/i, '')
        .replace(/\.mdx$/i, '')
        .replace(/\.md$/i, '');

      return '/' + relativePath;
    }

    return "/";
  };

  return (
    <Container>

      {allPosts
        .filter((n) => n.node.frontmatter.pinned === true)
        .map(({ node }, k) => {
          return <ItemPreview node={node} slug={getSlug(node)} key={k} pinned="true" />;
        })}

      {allPosts
        .filter(
          (n) =>
            n.node.frontmatter.pinned === false ||
            n.node.frontmatter.pinned === null
        )
        .map(({ node }, k) => {
          return <ItemPreview node={node} slug={getSlug(node)} key={k} />;
        })}
    </Container>
  );
};

export default RicercaContent;