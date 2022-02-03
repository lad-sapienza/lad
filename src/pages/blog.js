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
                <Col>
                  {node.frontmatter.img &&
                    node.frontmatter.img.childImageSharp &&
                    node.frontmatter.img.childImageSharp.gatsbyImageData && (
                      <Link to={node.fields.slug} className="post-thumbnail">
                        <GatsbyImage
                          image={
                            node.frontmatter.img.childImageSharp.gatsbyImageData
                          }
                          className="page-image"
                          key={
                            node.frontmatter.img.childImageSharp.gatsbyImageData
                              .src
                          }
                          alt=""
                        />
                      </Link>
                    )}
                </Col>
                <Col>
                  <h2>{node.frontmatter.title}</h2>
                  <Row>
                    <Col>{node.frontmatter.date}</Col>
                    <Col>{node.timeToRead} minuti di lettura</Col>
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
  .container {
    margin: 3rem 5rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: DESC }
      filter: { frontmatter: { categoria: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 500)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            id
            categoria
            title
            autore
            date(formatString: "YYYY, MMM DD")
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
