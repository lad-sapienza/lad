//import
import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
//components
import Layout from "../templates/Layout";
//others
import { Row, Col, Container} from "react-bootstrap";

const Ricerca = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>

      <h1 className="text-center">Blog</h1>

      {posts.map(({ node }) => {
        return (
          <Container>
            <Row className="my-5">
              <Col sm={4}>
                {node.frontmatter.img &&
                  node.frontmatter.img.childImageSharp &&
                  node.frontmatter.img.childImageSharp.gatsbyImageData && (
                    <Link to={node.fields.slug}>
                      <GatsbyImage
                        image={
                          node.frontmatter.img.childImageSharp.gatsbyImageData
                        }
                        key={
                          node.frontmatter.img.childImageSharp.gatsbyImageData
                            .src
                        }
                        alt={node.frontmatter.title}
                      />
                    </Link>
                  )}
              </Col>

              <Col sm={8}>
                <h2>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h2>
                
                <Row>
                  <Col className="text-secondary">
                    Pubblicato il {node.frontmatter.date} da{" "}
                    {node.frontmatter.autore} | {node.timeToRead} minuti di
                    lettura
                  </Col>
                </Row>
                <p>{node.frontmatter.sommario ? node.frontmatter.sommario : node.excerpt}</p>
              </Col>
            </Row>
          </Container>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {fileAbsolutePath: {regex: "/posts\\/blog/"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 500)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            autore
            date(formatString: "DD MMMM YYYY", locale: "it-IT")
            sommario
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
`;

export default Ricerca;
