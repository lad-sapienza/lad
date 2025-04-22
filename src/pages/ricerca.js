//import
import React from "react";
import { graphql, withPrefix } from "gatsby";
//components
import Layout from "../templates/Layout";
//others
import { Container } from "react-bootstrap";

import Seo from "../components/Seo";
import ItemPreview from "../components/ItemPreview";

import Favicon from "../components/Favicon";

const Ricerca = ({ data }) => {
  const posts = data.ricerca.edges;
  return (
    <Layout>
      <Seo
        title="Ricerca del LAD"
        description="Ricerca di LAD: Linee di ricerca, progetti sul campo e in laboratorio, idee collaborazioni e molto altro"
        url={`${data.site.siteMetadata.siteUrl}/ricerca`}
        image={`${data.site.siteMetadata.siteUrl}${withPrefix(
          `/logos/lad-blue.png`
        )}`.replace(/([^:]\/)\/+/g, "$1")}
      />

      <Container>
        <h1 className="text-center">Ricerca</h1>

        <p className="lead text-center">
          Le linee di ricerca del LAD: Laboratorio di Archeologia Digitale alla
          Sapienza coprono varie tematiche e aree applicative: dalla ricerca sul
          campo, allo sviluppo, laboratori e vari servizi web. Di seguitio
          riportiamo i nostri progetti più importanti.
        </p>

        <hr />

        {posts.map(({ node }, k) => (
          <ItemPreview key={k} node={node} pinned={node.frontmatter.pinned}/>
        ))}
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
    ricerca: allMarkdownRemark(
      sort: { frontmatter: { sort: DESC } }
      filter: { fileAbsolutePath: { regex: "/posts/ricerca/" } }
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
            sort
            sommario
            pinned
            img {
              base
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  formats: [AUTO, AVIF, WEBP]
                  quality: 100
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default Ricerca;

export const Head = () => <Favicon />
