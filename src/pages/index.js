//React
import React from "react";

//Gatsby
import { graphql } from "gatsby";
import styled from "styled-components";

//Bootstap
import { Container, Row, Col } from "react-bootstrap";

//Components
import Layout from "../templates/Layout";
import BlogPreview from "../components/BlogPreview";

const Index = ({ data }) => {
  return (
    <Layout>
      <BlogPreview/>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: id, order: DESC }, limit: 1) {
      nodes {
        frontmatter {
          autore
          email
          licenza
          livello
          sezione
          title
          img {
            absolutePath
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
