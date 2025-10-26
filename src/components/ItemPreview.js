//import
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

const ItemPreview = ({ node, pinned }) => {
  return (
    <Row className={`my-5 mx-md-5 py-5 ${pinned ? "shadow" : ""}`}>
      <Col sm={4}>
        {node.frontmatter.img &&
          node.frontmatter.img.childImageSharp &&
          node.frontmatter.img.childImageSharp.gatsbyImageData && (
            <Link to={node.fields.slug}>
              <GatsbyImage
                image={node.frontmatter.img.childImageSharp.gatsbyImageData}
                key={node.frontmatter.img.childImageSharp.gatsbyImageData.src}
                alt={node.frontmatter.title}
              />
            </Link>
          )}
      </Col>

      <Col sm={8}>
        {node.frontmatter.date && (
          <p className="mb-0 text-secondary">
            {node.frontmatter.date}
            {node.timeToRead && (
              <span> · {node.timeToRead} minuti di lettura</span>
            )}
          </p>
        )}
        <h2>
          <Link to={node.fields.slug} title={node.frontmatter.title}>
            {node.frontmatter.title}
          </Link>
        </h2>
        <p>
          {node.frontmatter.description ? node.frontmatter.description : node.excerpt}
        </p>
        <Link to={node.fields.slug} title={node.frontmatter.title}>
          Leggi tutto...
        </Link>
      </Col>
    </Row>
  );
};

export default ItemPreview;
