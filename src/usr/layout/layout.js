import * as React from "react"

import Footer from "./footer"
import Header from "./header"

import { Container } from "react-bootstrap"

import ArticleLayout from "../modules/articleLayout"

import ArticleImage from "../modules/articleImage"

import styled from "styled-components"

import "./layout.scss"

const Layout = ({ children, data, template = false }) => {
  const post = data?.mdx
  let pageUrl = ""
  if (data?.site?.siteMetadata?.siteUrl) {
    if (post?.frontmatter?.slug) {
      pageUrl = `${data.site.siteMetadata.siteUrl}/${post.frontmatter.slug}`
    } else if (post?.parent && typeof post.parent === "object") {
      // Log parent for debugging
      if (post.parent.relativePath) {
        // Remove file extension and use as path
        const path = post.parent.relativePath.replace(/\.[^/.]+$/, "")
        pageUrl = `${data.site.siteMetadata.siteUrl}/${path}`
      }
    }
  }

  return (
    <>
      <Header />
      {(() => {
        switch (template) {
          case "homepage":
            return children

          case "list":
            return (
              <Wrapper>
                <Container>
                  <ArticleImage imageData={post.frontmatter.img} caption={post.frontmatter.caption} altText={post.frontmatter.title} />
                  {children}
                </Container>
              </Wrapper>
            )

          default:
            return (
              <Wrapper>
                <ArticleLayout post={post} pageUrl={pageUrl}>
                  {children}
                </ArticleLayout>
              </Wrapper>
            )
        }
      })()}
      <Footer />
    </>
  )
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 5rem auto 5rem auto;
`

export default Layout
