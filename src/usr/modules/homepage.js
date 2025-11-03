//import
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
//components
import Team from "./team";
import BlogPreview from "./blogPreview";
//others
import { Row, Col, Container } from "react-bootstrap";


import CosaFacciamo from "../contents/home/cosa-facciamo.mdx";
import MetodologieStrumenti from "../contents/home/metodologie-strumenti.mdx";
import QuadroIstituzionaleCollaborazioni from "../contents/home/quadro-istituzionale-collaborazioni.mdx";

//markup
const HomePageContent = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
      highlight: allMdx(
        sort: {frontmatter: {date: DESC}}
        filter: {frontmatter: {inhome: {eq: true}}}
      ) {
        nodes {
          frontmatter {
            author
            date(formatString: "DD MMMM YYYY", locale: "it-IT")
            title
            description
            slug
            img {
              base
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  quality: 80
                  formats: [AUTO, AVIF, WEBP]
                  width: 400
                )
              }
            }
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  // Helper function to compute slug from file path
  const getSlugFromPath = (contentFilePath, frontmatterSlug) => {
    if (frontmatterSlug) {
      return frontmatterSlug === "home" ? "/" : frontmatterSlug;
    }

    // Extract relative path from contentFilePath
    const match = contentFilePath.match(/src\/usr\/contents\/(.+)/);
    if (!match) return "/";

    let relativePath = match[1];
    // Remove /index.mdx or .mdx
    relativePath = relativePath.replace(/\/index\.mdx$/i, '').replace(/\.mdx$/i, '');

    return '/' + relativePath;
  };

  // Safety check for data
  if (!data || !data.highlight || !data.highlight.nodes) {
    return (
      <Wrapper>
        <Container>
          <p>Loading...</p>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Container className="mt-5">
        <Row className="index">
          <Col className="col-intro" sm={8}>
            <Container>
              <section id="intro">
                <h1 className="border-bottom">
                  LAD: Laboratorio di Archeologia Digitale alla Sapienza
                </h1>
                <p>
                  LAD: Laboratorio di Archeologia Digitale alla Sapienza promuove la ricerca, la sperimentazione e la didattica delle tecnologie digitali per l'archeologia e più in generale per gli studi umanistici. Il LAD contribuisce allo sviluppo e promozione della cultura FLOS (<em>free, libre e open source</em>) e alla pubblicazione ad accesso aperto di dati e risultati della ricerca.
                </p>
              </section>

              {
                new Date().valueOf() < new Date('2024-12-31').valueOf() && <section>
                  <img alt="Season greetings" src="images/seasons-greeeting-2024.png" className="img-fluid" />
                  <p className="text-center text-primary my-3">Il LAD augura a tutti buone feste di fine anno!</p>
                </section>
              }

              <section id="chi-siamo" className="my-5">
                <Team />
              </section>

              <section id="cosa-facciamo" className="my-5">
                <CosaFacciamo />
              </section>

              <section id="metodologie-strumenti" className="my-5">
                <MetodologieStrumenti />
              </section>

              <section id="quadro-istituzionale-collaborazioni" className="my-5">
                <QuadroIstituzionaleCollaborazioni />
              </section>

            </Container>
          </Col>

          {/* Ultimi articoli */}
          <Col sm={4}>
            <Container className="mb-3">
              <h2 className="border-bottom text-center">In evidenza</h2>
              {data.highlight.nodes.map((node, i) => (
                <BlogPreview
                  key={i}
                  title={node.frontmatter.title}
                  readMore={getSlugFromPath(node.internal.contentFilePath, node.frontmatter.slug)}
                  img={node.frontmatter.img}
                />
              ))}
            </Container>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

//style
const Wrapper = styled.section`
  .col-intro a {
    color: #1963f7;
  }
  col-intro. a:hover {
    color: rgba(21, 71, 254, 0.7);
  }
`;
export default HomePageContent;