//import
import React from "react";

import { Link, graphql, withPrefix } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
//components
import Layout from "../templates/Layout";
//others
import { Row, Col, Container} from "react-bootstrap";
import Seo from "../components/Seo";

const Blog = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo 
        title="Le notizie di LAD"
        description="Notizie e avvisi dal LAD"
        url="https://lad.saras.uniroma1.it/blog"
          image={ withPrefix(`static/logos/lad-blue.png`) } />
        
          
      <h1 className="text-center">Notizie</h1>
      <Container>

      {allPosts.map(({ node }, k) => {
        return (
            <Row className="my-5" key={k}>
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
                <p className="mb-0 text-secondary">{node.frontmatter.date} · {node.timeToRead} minuti di
                    lettura</p>

                <h2>
                  <Link to={node.fields.slug} title={node.frontmatter.title}>{node.frontmatter.title}</Link>
                </h2>
                <p>{node.frontmatter.sommario ? node.frontmatter.sommario : node.excerpt}</p>
                <Link to={node.fields.slug} title={node.frontmatter.title}>Leggi tutto...</Link>
              </Col>
            </Row>
        );
      })}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "/posts/notizie/" } }
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
            date(formatString: "DD MMMM YYYY", locale: "it-IT")
            sommario
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
