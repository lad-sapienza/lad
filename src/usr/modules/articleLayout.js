import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

import ShareButtons from "./shareButtons"

import MyGallery from "./myGallery"

const TableOfContents = ({ toc }) => {
  if (!toc || !toc.items || toc.items.length === 0) return null;
  
  const renderItems = (items) => {
    return items.map((item, index) => (
      <li key={index}>
        <a href={item.url}>{item.title}</a>
        {item.items && item.items.length > 0 && (
          <ul>{renderItems(item.items)}</ul>
        )}
      </li>
    ));
  };
  
  return (
    <TocWrapper className="table-of-contents">
      <h3>Indice</h3>
      <ul>
        {renderItems(toc.items)}
      </ul>
    </TocWrapper>
  );
};


const ArticleLayout = ({ children, post, pageUrl }) => {
  return (
    <Wrapper>
      <div>
        <Container className="post-container">
          <div className="post-info text-center">
            <h1>{post.frontmatter.title}</h1>

            {post.frontmatter.author && (
              <p className="author">di {post.frontmatter.author}</p>
            )}

            {post.frontmatter.tags && (
              <div className="text-center">
                <div className="bg-light mb-3 p-3 text-muted d-inline-block d-print-none">
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
              <p className="text-center text-secondary d-print-none">
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
                  key={post.frontmatter.img.childImageSharp.gatsbyImageData.src}
                  alt={`${post.frontmatter.title} di ${post.frontmatter.author}`}
                />
              </figure>
              {post.frontmatter.didascalia && (
                <p>{post.frontmatter.didascalia}</p>
              )}
            </div>
          )}
          <TableOfContents toc={post.tableOfContents} />
          <div className="post-content">{children}</div>
          <MyGallery />
        </Container>
      </div>
    </Wrapper>
  )
}

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

const TocWrapper = styled.nav`
  background: #f8f9fa;
  border-left: 4px solid #007bff;
  padding: 1.5rem;
  margin: 2rem 0;
  
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }
  
  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    
    ul {
      padding-left: 1.5rem;
      margin-top: 0.5rem;
    }
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #495057;
    text-decoration: none;
    
    &:hover {
      color: #007bff;
      text-decoration: underline;
    }
  }
`

export default ArticleLayout
