//import
import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import Layout from "../templates/Layout";
import { Helmet } from "react-helmet";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

//markup
export default function BlogPost({ data }) {
  console.log(data);
  const post = data.markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{ post.frontmatter.title }</title>
        <meta name="description" content={ post.frontmatter.sommario ? post.frontmatter.sommario : post.excerpt } />

        <meta property="og:title" content={ post.frontmatter.title } />
        <meta property="og:description" content={ post.frontmatter.sommario ? post.frontmatter.sommario : post.excerpt } />
        <meta property="og:url" content={`https://lad.saras.uniroma1.it${post.fields.slug}`} />
        {/* <meta property="og:image" content={post.frontmatter.img.publicURL} /> */}
      
        <meta property="twitter:title" content={ post.frontmatter.title } />
        <meta property="twitter:description" content={ post.frontmatter.sommario ? post.frontmatter.sommario : post.excerpt } />
        <meta property="twitter:url" content={`https://lad.saras.uniroma1.it${post.fields.slug}`} />
        {/* <meta property="twitter:image" content={post.frontmatter.img.publicURL} /> */}
      </Helmet>
      <Wrapper>
        <div>
          <Container className="post-container">
            <div className="post-info text-center">
              <h1>{post.frontmatter.title}</h1>

              {post.frontmatter.tags && (
                <div className="text-center">
                  <div className="bg-light mb-5 p-3 text-muted d-inline-block">
                    Tag:&nbsp;
                    { post.frontmatter.tags.map((t,k) => <span key={k}>{t} </span>) }
                    |
                    Licenza: {post.frontmatter.licenza } |
                    Livello: {post.frontmatter.livello }
                  </div>
                </div>
              )}
              { post.frontmatter.autore && 
                <p className="author">
                  di {post.frontmatter.autore}
                </p>
              }
              <p className="text-center">{post.frontmatter.date}</p>
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
  p.author{
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 900 !important;
    font-size: 1.5rem;
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

  .post-container {
    max-width: 1000px;
    margin-top: 3rem;
  }
`;

//graphql
export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "it-IT")
        autore
        licenza
        livello
        title
        sommario
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
