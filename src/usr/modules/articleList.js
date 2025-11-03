//import
import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Button, Collapse } from "react-bootstrap";

import ItemPreview from "../modules/itemPreview";

//markup
const ArticleList = ({section}) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const data = useStaticQuery(graphql`
    {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMdx(
      sort: { frontmatter: { date: DESC } }
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
            tags
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

  // Filter posts by section and exclude the main section index.mdx file
  const allPosts = data.allMdx.edges.filter(({ node }) => {
    const contentFilePath = node.internal?.contentFilePath || '';
    const isInSection = contentFilePath.includes(`/${section}/`);
    // Exclude only the section's main index file (e.g., /blog/index.mdx)
    // but keep article index files (e.g., /blog/article-name/index.mdx)
    const isMainIndex = contentFilePath.endsWith(`/${section}/index.mdx`);
    return isInSection && !isMainIndex;
  });

  // Extract unique tags from all posts
  const allTags = [...new Set(
    allPosts
      .flatMap(({ node }) => node.frontmatter.tags || [])
      .filter(tag => tag) // Remove null/undefined
  )].sort();

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Filter posts by selected tags
  const filteredPosts = selectedTags.length === 0 
    ? allPosts 
    : allPosts.filter(({ node }) => {
        const postTags = node.frontmatter.tags || [];
        return selectedTags.every(selectedTag => postTags.includes(selectedTag));
      });

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
      <div className="mb-5 text-center">
        <Button
          variant="outline-secondary"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="tag-filter-collapse"
          aria-expanded={isOpen}
          className="mb-2"
        >
          {isOpen ? 'Nascondi' : 'Mostra'} filtri per tag ({allTags.length} tag disponibili) | {filteredPosts.length} articoli
        </Button>
        
        <Collapse in={isOpen}>
          <div id="tag-filter-collapse" className="text-secondary p-2">
            {allTags.map(tag => (
              <Button
                key={tag}
                size="sm"
                variant={selectedTags.includes(tag) ? "outline-secondary" : "primary"}
                className="btn mx-1 mt-1 btn-light"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </Collapse>
      </div>

      {filteredPosts
        .filter((n) => n.node.frontmatter.pinned === true)
        .map(({ node }, k) => {
          return <ItemPreview node={node} slug={getSlug(node)} key={k} pinned="true" />;
        })}

      {filteredPosts
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

export default ArticleList;