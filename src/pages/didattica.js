//import
import React from "react";
import { Link, graphql, withPrefix } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
//components
import Layout from "../templates/Layout";
//others
import { Row, Col, Container } from "react-bootstrap";

import { Helmet } from "react-helmet";


const Didattica = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Helmet>
        <title>Didattica del LAD</title>
        <meta name="description" content="Didattica di LAD: tutte le attività del LAD rivolte alla didattica a vari livelli: corsi, seminari, tutorial, laboratori" />
        <link rel="canonical" href="https://lad.saras.uniroma1.it/didattica" />

        <meta property="og:title" content="Didattica del LAD" />
        <meta property="og:description" content="Didattica di LAD: tutte le attività del LAD rivolte alla didattica a vari livelli: corsi, seminari, tutorial, laboratori" />
        <meta property="og:url" content="https://lad.saras.uniroma1.it/didattica" />
        <meta property="og:image" content={ withPrefix(`static/logos/lad-blue.png`) } />
      
        <meta property="twitter:title" content="Didattica del LAD" />
        <meta property="twitter:description" content="Didattica di LAD: tutte le attività del LAD rivolte alla didattica a vari livelli: corsi, seminari, tutorial, laboratori." />
        <meta property="twitter:url" content="https://lad.saras.uniroma1.it/didattica" />
        <meta property="twitter:image" content={ withPrefix(`static/logos/lad-blue.png`) } />
    </Helmet>

      <h1 className="text-center">Didattica</h1>
      {posts.map(({ node }, k) => {
        return (
          <Container key={k}>
            <Row>
              <Col xs={2}>
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

              <Col xs={12} md={10}>
                <h2>
                  <Link to={node.fields.slug}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>{node.excerpt}</p>
              </Col>
            </Row>
          </Container>
        );
      })}
      </Layout>
  );
};


export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___sort, order: DESC }
      filter: {fileAbsolutePath: {regex: "/posts\\/didattica/"}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 500)
          fields {
            slug
          }
          frontmatter {
            title
            autore
            sort
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

export default Didattica;
