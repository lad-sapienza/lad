//import
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import Layout from "../templates/Layout";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

//markup
export default function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Wrapper>
        <div>
          <Container className="post-container">
            <div className="post-info">
              <h1>{post.frontmatter.title}</h1>

              {post.frontmatter.tags && (
                <div className="text-center">
                  <div className="bg-light mb-5 p-3 text-muted text-center d-inline-block">
                    Tag:&nbsp;
                    { post.frontmatter.tags.map(t => <span>{t} </span>) }
                    |
                    Licenza: {post.frontmatter.licenza } |
                    Livello: {post.frontmatter.livello }
                  </div>
                </div>
              )}
              <h2>
                {post.frontmatter.autore}
              </h2>
              <p class="text-center">{post.frontmatter.date}</p>
            </div>


            {post.frontmatter.img && (
              <div className="post-image">
                <figure>
                  <GatsbyImage
                    image={post.frontmatter.img.childImageSharp.gatsbyImageData}
                    key={
                      post.frontmatter.img.childImageSharp.gatsbyImageData.src
                    }
                    alt={`${post.frontmatter.title} di ${post.frontmatter.autore}`}
                  />
                </figure>
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
    max-width: 1000px;
    margin-top: 3rem;
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
        date(formatString: "DD MMMM YYYY", locale: "it-IT")
        autore
        licenza
        livello
        title
        tags
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
