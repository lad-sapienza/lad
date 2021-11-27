//React
import React from "react";

//Gatsby
import { graphql } from "gatsby";
import styled from "styled-components";

//Bootstap
import { Row, Col, Container } from "react-bootstrap";

//Components
import Layout from "../templates/Layout";
import BlogPreview from "../components/BlogPreview";
import AboutUs from "../components/AboutUs"
import Title from "../components/Title";
import Intro from "../components/Intro";
import WhatWeDo from "../components/WhatWeDo"

const Index = ({data}) => {
  
  return (
    <Layout>
      <Wrapper>
        <Intro></Intro>
        <AboutUs></AboutUs>
        <WhatWeDo></WhatWeDo>
        <Container>
          <Title title="Ultimi articoli" align="right" />
        </Container>
        <Row xs={1} md={3}>
          {data.allMarkdownRemark.nodes.map((node, i) => (
            <Col xs={6} md={12} key={i}>
              <BlogPreview
                author={node.frontmatter.autore}
                excerpt={node.excerpt}
                /* img={} */
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
  .container {
    padding-top: 2rem;
  }
`;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: id, order: DESC }) {
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
