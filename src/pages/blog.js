//import
import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
//components
import Layout from "../templates/Layout";
//others
import { Row, Col, Container} from "react-bootstrap";
import { Helmet } from "react-helmet";

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  let tags = [];

  posts.forEach( ({node}) => {
    node.frontmatter.tags.forEach( t => {
      if(!tags.includes(t)){
        tags.push(t);
      }
    });
  });

  return (
    <Layout>

        <Helmet>
          <title>Il blog di LAD: notizie, appunti, recensioni, tutorial sulle applicazioni informatiche per l'archeologia</title>
          <meta name="description" content="Il blog di LAD raccoglie recensioni, notizie, tutorial, appunti e note relatice a progetti, tecnologie, strummenti, standard in uso nel campo della ricerca archeologica." />
          <link rel="canonical" href="https://lad.saras.uniroma1.it/blog" />
        </Helmet>


      <h1 className="text-center">Blog</h1>

      <Container>
        <Row className="mb-5 border-bottom bg-light text-secondary p-2">
          <Col className="text-center">Tag disponibili: { tags.join(', ')}</Col>
        </Row>
        </Container>

      {posts.map(({ node }, k) => {
        return (
          <Container key={k}>
            <Row className="my-5">
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
                <p>{node.frontmatter.sommario ? node.frontmatter.sommario : node.excerpt}</p>
                <Row>
                  <Col className="bg-light text-secondary p-2 my-2">
                    Pubblicato il {node.frontmatter.date} da {node.frontmatter.autore} | {node.timeToRead} minuti di
                    lettura | tags: {node.frontmatter.tags.join(', ')}
                  </Col>
                </Row>
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
      sort: { fields: frontmatter___date, order: DESC }
      filter: {fileAbsolutePath: {regex: "/posts\\/blog/"}}
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
