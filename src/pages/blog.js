//import
import React from "react";
import { useState } from "react";

import { Link, graphql, withPrefix } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
//components
import Layout from "../templates/Layout";
//others
import { Row, Col, Container } from "react-bootstrap";
import Seo from "../components/Seo";

const Blog = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges;

  let tags = [];

  allPosts.forEach(({ node }) => {
    node.frontmatter.tags.forEach((t) => {
      if (!tags.includes(t)) {
        tags.push(t);
      }
    });
  });

  const [state, setState] = useState({
    filteringTags: [],
    posts: allPosts || [],
  });

  const filterPosts = (event) => {
    const tag = event.target.innerText;

    const filteringTags = state.filteringTags;

    if (filteringTags.includes(tag)) {
      filteringTags.splice(filteringTags.indexOf(tag), 1);
    } else {
      filteringTags.push(tag);
    }

    const filteredPosts =
      filteringTags.length < 1
        ? allPosts
        : allPosts.filter((post) => {
            const ret = filteringTags.every((ft) =>
              post.node.frontmatter.tags.includes(ft)
            );
            return ret ? post : false;
          });

    setState({
      filteringTags: filteringTags,
      posts: filteredPosts,
    });
  };

  return (
    <Layout>
      <Seo
        title="Il blog di LAD: notizie, appunti, recensioni, tutorial sulle applicazioni informatiche per l'archeologia"
        description="Il blog di LAD raccoglie recensioni, notizie, tutorial, appunti e note relatice a progetti, tecnologie, strummenti, standard in uso nel campo della ricerca archeologica."
        url={`${data.site.siteMetadata.siteUrl}/blog/`}
        image={`${data.site.siteMetadata.siteUrl}${withPrefix(
          `/logos/lad-blue.png`
        )}`.replace(/([^:]\/)\/+/g, "$1")}
      />
      <Wrapper>
        <Container>
          <h1 className="text-center">Blog</h1>

          <p className="lead text-center">
            Il blog è una delle sezioni più dinamiche del LAD: Laboratorio di
            Archeologia Digitale alla Sapienza in quanto raccoglie contributo di
            varia lunghezza conteneneti recensioni, notizie, tutorial, appunti e
            note relative a progetti, tecnologie, strummenti, standard in uso
            nel campo della ricerca archeologica. Si tratta di uno spazio aperto
            e collaboratico, per il quale accettiamo e stimoliamo contribuzioni
            esterne, per le quali vi preghiamo di scrivere a{" "}
            <a
              href="julian.bogdani@uniroma1.it"
              title="Segnalateci una notizia via email"
            >
              julian.bogdani@uniroma1.it
            </a>
            .
          </p>
          <p className="text-center">
            Tutti i contenuti del blog del LAD sono rilasciati con licenza
            <br />
            Creative Commons Attribuzione — Condividi allo stesso modo
            <br />
            <img
              style={{
                maxWidth: 200,
              }}
              src="https://creativecommons.it/chapterIT/wp-content/uploads/2021/01/by-sa.png"
              alt="CC BY-SA"
            />
            <br />
            CC BY-SA {' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/deed.it"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="[Commons Deed] [Legal Code] (opens in a new tab)"
            >
              [Commons Deed]
            </a>
            {' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/legalcode.it"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="[Commons Deed] [Legal Code] (opens in a new tab)"
            >
              [Legal Code]
            </a>
          </p>
          <hr />

          <div className="mb-5 text-secondary p-2 text-center">
            Tag disponibili, clicca per filtrare gli articoli |{" "}
            {state.posts.length} articoli
            <br />
            {tags.map((t, k) => (
              <button
                key={k}
                className={`btn mx-1 mt-1 btn-light tags ${
                  state.filteringTags.includes(t) ? "selected" : ""
                }`}
                onClick={filterPosts}
              >
                {t}
              </button>
            ))}
          </div>
        </Container>

        {state.posts.map(({ node }, k) => {
          return (
            <Container key={k}>
              <Row className="my-5 mx-md-5 py-5">
                <Col sm={4}>
                  {node.frontmatter.img &&
                    node.frontmatter.img.childImageSharp &&
                    node.frontmatter.img.childImageSharp.gatsbyImageData && (
                      <Link to={node.fields.slug}>
                        <GatsbyImage
                          image={
                            node.frontmatter.img.childImageSharp.gatsbyImageData
                          }
                          key={
                            node.frontmatter.img.childImageSharp.gatsbyImageData
                              .src
                          }
                          alt={node.frontmatter.title}
                        />
                      </Link>
                    )}
                </Col>

                <Col sm={8}>
                  <h2>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </h2>
                  <p>
                    {node.frontmatter.sommario
                      ? node.frontmatter.sommario
                      : node.excerpt}
                  </p>

                  <div className="bg-light text-secondary p-2 my-2">
                    Pubblicato il {node.frontmatter.date} da{" "}
                    {node.frontmatter.autore} | {node.timeToRead} minuti di
                    lettura | tags: {node.frontmatter.tags.join(", ")}
                  </div>
                </Col>
              </Row>
            </Container>
          );
        })}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  .tags {
    box-shadow: none !important;
    border: none !important;

    &:hover {
      background-color: rgba(21, 71, 244, 0.2);
    }
    &.selected {
      background-color: rgba(21, 71, 244, 0.5);
    }
  }
`;

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/posts/blog/" } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 500)
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            autore
            date(formatString: "DD MMMM YYYY", locale: "it-IT")
            sommario
            tags
            img {
              base
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  formats: [AUTO, AVIF, WEBP]
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
