//React
import React from "react";

//Gatsby
import { graphql } from "gatsby";
import styled from "styled-components";

//Bootstap
import { Row, Col } from "react-bootstrap";

//Components
import Layout from "../templates/Layout";
import BlogPreview from "../components/BlogPreview";
import AboutUs from "../components/AboutUs"

const Index = ({data}) => {
  
  return (
    <Layout>
      <Wrapper>
        <AboutUs></AboutUs>
        <Row xs={1} md={3}>
          {data.allMarkdownRemark.nodes.map((node, i) => (
            <Col xs={6} md={6} key={i}>
              <BlogPreview
                author={node.frontmatter.autore}
                excerpt={node.excerpt}
                img={node.frontmatter.img.childImageSharp.gatsbyImageData}
                title={node.frontmatter.title}
              />
            </Col>
          ))}
        </Row>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
.row {
  margin: 0 3rem 0 3rem;
}
`

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: id, order: DESC }, limit: 2) {
      nodes {
        frontmatter {
          autore
          licenza
          livello
          sezione
          title
          date
          img {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                quality: 80
                width: 1500
                formats: AUTO
              )
            }
          }
        }
        excerpt(pruneLength: 600)
        fields {
          slug
        }
      }
    }
  }
`;

export default Index;
