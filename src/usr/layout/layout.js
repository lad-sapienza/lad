import * as React from "react"

import Footer from "./footer"
import Header from "./header"

import { Container } from "react-bootstrap"


import ArticleLayout from "../modules/articleLayout"

import "./layout.scss"

const Layout = ({ children, data, template = false }) => {
  const post = data?.mdx
  const pageUrl =
    data?.site?.siteMetadata?.siteUrl && post?.frontmatter?.slug
      ? `${data.site.siteMetadata.siteUrl}/${post.frontmatter.slug}`
      : ""

  return (
    <>
      <Header />
      {(() => {
        switch (template) {
          case "homepage":
            return children

          case "list":
            return <Container className="text-center">{children}</Container>

          default:
            return (
              <ArticleLayout post={post} pageUrl={pageUrl}>
                {children}
              </ArticleLayout>
            )
        }
      })()}
      <Footer />
    </>
  )
}

export default Layout