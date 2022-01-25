//React
import React from "react";

//Gatsby
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

//Components
import Layout from "../templates/Layout";
import PostInfo from "../components/Post/PostInfo";

const PostLayout = ({ data }) => {
  const content = data.markdownRemark;
  const images = data.allFile.edges;
  return (
    <>
      <Layout>
        <Container fluid="md" className="divider">
          <PostInfo
            title={content.frontmatter.title}
            autore={content.frontmatter.autore}
          />
        </Container>
        <Wrapper>
          <Container>
            <Row xs={1}>
              {images.map((image, key) => (
                <a
                  className="image"
                  href={image.node.childImageSharp.gatsbyImageData.src}
                >
                  <GatsbyImage
                    image={image.node.childImageSharp.gatsbyImageData}
                    style={{ margin: "3rem 0", height: "500px" }}
                    imgStyle={{ objectFit: "scale-down" }}
                    alt={image.node.base.split(".").slice(0, -1).join(".")}
                  />
                  <p className="caption">
                    {image.node.base.split(".").slice(0, -1).join(".")}
                  </p>
                </a>
              ))}
            </Row>
          </Container>
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
};

//styles
const Wrapper = styled.section`
  .image {
    border-top: solid;
    border-width: 0.1rem;
    border-color: rgb(145, 145, 145);
  }
  .caption {
    text-align: center;
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    font-style: italic;
  }

  .divider {
    padding-top: 5rem;
    margin-bottom: 5rem;
  }
  .nav-link {
    font-family: "Cormorant Garamond", serif !important;
    padding-right: 4rem !important;
    color: #151241 !important;
  }
  .col {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1.5rem !important;
    text-align: left;
  }
  .row {
    padding-bottom: 1.5rem;
  }
  .indice-1,
  .indice-2,
  .indice-3,
  .indice-4 {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 700;
    font-size: 1rem;
  }
  .indice-1:hover,
  .indice-2:hover,
  .indice-3:hover,
  .indice-4:hover {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1rem;
  }
  .indice-h2 {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1rem;
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
  ul {
    border-right: solid;
    border-width: 0.1rem;
    border-color: rgb(145, 145, 145);
  }
`;

export default PostLayout;

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
