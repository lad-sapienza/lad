//React
import React from "react";
//Gatsby
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
//Components
import { Container } from "react-bootstrap";
import { GiFeather } from "react-icons/gi";
//Template
import Layout from "../templates/Layout";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Wrapper>
        <div>
          <Container className="post-container">
            <div className="post-info">
              <h1>{post.frontmatter.title}</h1>
              <h2>
                {post.frontmatter.autore}
              </h2>
              <h3>{post.frontmatter.date}</h3>
            </div>
            {post.frontmatter.img && (
              <div className="post-image">
                <figure>
                  <GatsbyImage
                    image={post.frontmatter.img.childImageSharp.gatsbyImageData}
                    key={
                      post.frontmatter.img.childImageSharp.gatsbyImageData.src
                    }
                    alt=""
                  />
                </figure>
                <p>{post.frontmatter.img.base}</p>
              </div>
            )}
            <div className="post-content">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </Container>
        </div>
      </Wrapper>
    </Layout>
  );
}

//styles
const Wrapper = styled.section`
  body {
    background-color: rgba(135, 135, 135) !important;
  }
  h1 {
    font-family: "Cormorant Garamond", serif;
    font-weight: 800;
    font-size: 3rem;
    text-align: center;
    font-style: italic;
  }
  h2,
  h3 {
    font-family: "Cormorant Garamond", serif;
    font-weight: 800;
    text-align: center;
  }
  img {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  table,
  thead,
  tbody,
  td,
  tr,
  th {
    border: 0.1px solid;
    padding: 8px 8px 8px 8px;
  }

  .icon {
    margin-right: 1rem;
  }
  .post-image p {
    text-align: center;
  }
  .post-container {
    margin-top: 3rem;
  }
  .post-content {
    margin-left: 10rem;
    margin-right: 10rem;
  }
  .post-content h2 {
    font-size: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 1.3rem;
  }
  .post-content h3 {
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .post-content h2,
  .post-content h3 {
    text-align: left;
  }
`;

//graphql
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        autore
        date
        id
        licenza
        livello
        sezione
        title
        img {
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              quality: 100
              formats: [AUTO, AVIF, WEBP]
            )
          }
        }
      }
    }
  }
`;
