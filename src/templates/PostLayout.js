//React
import React from 'react'

//Gatsby
import styled from 'styled-components'
import { graphql } from "gatsby";
import { Link } from 'gatsby';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

//Components
import Layout from "../templates/Layout"
import Title from '../components/Title';

import PostInfo from "../components/Post/PostInfo"

const PostLayout = ({data}) => {
    const content = data.markdownRemark;
    return (
      <>
        <Layout>
          <PostInfo
            author={content.frontmatter.autore}
            excerpt={content.excerpt}
            date={content.date}
            title={content.frontmatter.title}
          />
          <Wrapper>
            <Container>
              <Row xs={1}>
                <Col sm={3}>
                  <ul className="ul-indice">
                    {content.headings.map((h, i) => {
                      return (
                        <li key={i}>
                          <a href={`#${h.id}`} className={`indice-h${h.depth}`}>
                            {h.value}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Col>
                <Col sm={8}>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: content.html }}
                  ></div>
                </Col>
              </Row>
            </Container>
          </Wrapper>
        </Layout>
      </>
    );
}

//styles
const Wrapper = styled.section`
  .indice-1,
  .indice-2,
  .indice-3,
  .indice-4 {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 700;
    font-size: 1rem !important;
  }
  .indice-1:hover,
  .indice-2:hover,
  .indice-3:hover,
  .indice-4:hover {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1rem !important;
  }
  .indice-h2 {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1rem !important;
  }
  .text h2 {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 2rem !important;
  }
  .text p {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }
`;

export default PostLayout

export const query = graphql`
  query ($slug: String!, $absolutePathRegex: String!) {
    allFile(
      filter: {
        absolutePath: { regex: $absolutePathRegex }
        extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
      }
      sort: { fields: base, order: ASC }
    ) {
      edges {
        node {
          base
          name
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, quality: 80, width: 1500)
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      headings {
        value
        depth
        id
      }
      timeToRead
      frontmatter {
        id
        autore
        date
        licenza
        livello
        sezione
        title
      }
      excerpt
    }
  }
`;