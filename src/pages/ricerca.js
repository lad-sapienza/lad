//import
import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
//components
import Title from "../components/title";
import Layout from "../templates/Layout";
//others
import { Row, Col, Container, Card, Button } from "react-bootstrap";

const Ricerca = ({data}) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Wrapper>
        {posts.map(({ node }) => {
          return (
            <Container>
              <Card style={{ width: "18rem" }}>
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
                <Card.Body>
                  <Card.Title>{node.frontmatter.title}</Card.Title>
                  <Card.Text>{node.excerpt}</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          );})}
      </Wrapper>
    </Layout>
  );};

  //style
const Wrapper = styled.section`
  .card {
    display: flex;
    flex: 1 1 auto;
  }
`;

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { categoria: { eq: "progetti" } } }
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
            img {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
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
