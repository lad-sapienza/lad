//import
import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
//components
import Layout from "../templates/Layout";
//others
import { Row, Col, Container} from "react-bootstrap";

const Ricerca = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Wrapper>
        {posts.map(({ node }) => {
          return (
            <Container>
              <Row>
                <Col xs={2}>
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
                          alt=""
                        />
                      </Link>
                    )}
                </Col>

                <Col xs={12} md={10}>
                  <Link to={node.fields.slug}>
                    <h2>{node.frontmatter.title}</h2>
                  </Link>
                  <Row>
                    <Col className="text-secondary">
                      Pubblicato il {node.frontmatter.date} | {node.timeToRead}{" "}
                      minuti di lettura
                    </Col>
                  </Row>
                    <p>{node.excerpt}</p>
                </Col>
              </Row>
            </Container>
          );
        })}
      </Wrapper>
    </Layout>
  );
};

//style
const Wrapper = styled.section`
  a {
    text-decoration: none !important;
    color: currentColor;
  }
  a:hover {
    text-decoration: none !important;
    color: rgb(21, 71, 274, 0.8)!important;
  }
  .container {
    margin: auto !important;
    margin-bottom: 3rem !important;
    margin-top: 3rem !important;
  }
`;

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
