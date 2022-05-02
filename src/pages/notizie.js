//import
import React from "react";
import { graphql, withPrefix } from "gatsby";
import { Container} from "react-bootstrap";

//components
import Layout from "../templates/Layout";
import Seo from "../components/Seo";
import ItemPreview from "../components/ItemPreview";

const Blog = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo 
        title="Le notizie di LAD"
        description="La sezione del sito ufficiale del LAD: Laboratorio di Archeologia Digitale alla Sapienza dedicata alle notizie di eventi interni e esterni inerenti le tematiche del laboratorio"
        url={ `${data.site.siteMetadata.siteUrl}/notizie/` }
        image={`${data.site.siteMetadata.siteUrl}${withPrefix(`/logos/lad-blue.png`)}`.replace(/([^:]\/)\/+/g, "$1")}
        />
        
      <Container>

      <h1 className="text-center">Notizie</h1>

      <p className="lead text-center">Questa sezione del sito del LAD: Laboratorio di Archeologia Digitale alla Sapienza raccoglie notizie di eventi, conferenze, lezioni, seminari, ecc. inerenti alle tematiche del laboratorio. Per le segnalazioni scriveteci a <a href="julian.bogdani@uniroma1.it" title="Segnalateci una notizia via email">julian.bogdani@uniroma1.it</a>.</p>
      <hr />

      {allPosts.filter( n => n.node.frontmatter.pinned !== null ).map(({ node }, k) => {
        return (
          <ItemPreview node={node} key={k} pinned="true"/>
        );
      })}

      {allPosts.filter( n => n.node.frontmatter.pinned === null ).map(({ node }, k) => {
        return (
          <ItemPreview node={node} key={k}/>
        );
      })}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
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
            pinned
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
