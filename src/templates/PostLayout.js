//import
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"
import Layout from "../templates/Layout"
import Seo from "../components/Seo"
import ShareButtons from "../components/ShareButtons"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import MyGallery from "../components/MyGallery"
deckDeckGoHighlightElement()

//markup
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const pageUrl =
    `${data.site.siteMetadata.siteUrl}${post.fields.slug}`.replace(
      /([^:]\/)\/+/g,
      "$1",
    )

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={
          post.frontmatter.description || post.excerpt
        }
        // https://stackoverflow.com/a/24381515
        url={pageUrl}
        image={`${data.site.siteMetadata.siteUrl}${post.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src}`.replace(
          /([^:]\/)\/+/g,
          "$1",
        )}
      />
      <Wrapper>
        <div>
          <Container className="post-container">
            <div className="post-info text-center">
              <h1>{post.frontmatter.title}</h1>

              {post.frontmatter.autore && (
                <p className="author">di {post.frontmatter.autore}</p>
              )}

              {post.frontmatter.tags && (
                <div className="text-center">
                  <div className="bg-light mb-3 p-3 text-muted d-inline-block">
                    Tag:&nbsp;
                    {post.frontmatter.tags.join(", ")}
                    {post.frontmatter.licenza && (
                      <> | Licenza: {post.frontmatter.licenza}</>
                    )}
                    {post.frontmatter.livello && (
                      <> | Livello: {post.frontmatter.livello}</>
                    )}
                  </div>
                </div>
              )}

              {post.frontmatter.date && (
                <p className="text-center text-secondary">
                  Pubblicato il {post.frontmatter.date}
                </p>
              )}

              <ShareButtons
                url={pageUrl}
                title={post.frontmatter.title}
                tags={post.frontmatter.tags || []}
              />
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
                {post.frontmatter.didascalia && (
                  <p>{post.frontmatter.didascalia}</p>
                )}
              </div>
            )}
            <div className="post-content">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
            <MyGallery
              images={data.galley_items}
              page={data.markdownRemark.fields.slug
                .split("/")
                .filter(e => e.trim() !== "")
                .at(-1)}
            />
          </Container>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const Head = props => {
  return props.location.pathname.indexOf("/blog/") > -1 ? (
    <script src="https://hypothes.is/embed.js" async></script>
  ) : (
    <></>
  )
}

//styles
const Wrapper = styled.section`
  p.author {
    font-family: "Lora", serif !important;
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
  .post-content img {
    max-width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .post-image {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .post-image p {
    font-family: "Lora", serif !important;
    font-weight: 300 !important;
    font-size: 1rem;
    text-align: center;
  }
`

//graphql
export const query = graphql`
  query BlogQuery($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    galley_items: allFile(
      sort: { name: DESC }
      filter: { relativeDirectory: { glob: "galleries/*" } }
    ) {
      edges {
        node {
          name
          relativePath
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "it-IT")
        autore
        licenza
        livello
        title
        description
        tags
        didascalia
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
`
