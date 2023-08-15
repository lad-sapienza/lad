//import
import React from "react";
import { graphql, withPrefix } from "gatsby";
//components
import Layout from "../templates/Layout";
//others
import { Container } from "react-bootstrap";

import Seo from "../components/Seo";
import ItemPreview from "../components/ItemPreview";



const Didattica = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo
        title="Didattica del LAD"
        description="Didattica di LAD: tutte le attività del LAD rivolte alla didattica a vari livelli: corsi, seminari, tutorial, laboratori"
        url={ `${data.site.siteMetadata.siteUrl}/didattica/` }
        image={`${data.site.siteMetadata.siteUrl}${withPrefix(`/logos/lad-blue.png`)}`.replace(/([^:]\/)\/+/g, "$1")}
      />
      
      <Container>
      
        <h1 className="text-center">Didattica</h1>

        <p className="lead text-center">La didattica è un'attività centrale del LAD: Laboratorio di Archeologia Digitale alla Sapienza, in quanto tutti i nostri progetti prevedono la partecipazione e la condivisione di conoscenza e competenze con i più giovani. La didattica è organizzata in corsi tradizionali, laboratori pratici, seminari, tutorial e attività di tirocinio. Di seguito si elencano alcune ooprtunità di collaborare con noi.</p>
        <hr />
      
        {posts.map(({ node }, k) => {
          return (
            <ItemPreview key={k} node={node} />
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
      sort: {frontmatter: {sort: DESC}}
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
