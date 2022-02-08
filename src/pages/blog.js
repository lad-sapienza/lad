//import
import React from "react";
import { useState } from "react";

import { Link, graphql, withPrefix } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
//components
import Layout from "../templates/Layout";
//others
import { Row, Col, Container} from "react-bootstrap";
import { Helmet } from "react-helmet";

const Blog = ({ data }) => {
  const allPosts = data.allMarkdownRemark.edges;

  let tags = [];

  allPosts.forEach( ({node}) => {
    node.frontmatter.tags.forEach( t => {
      if(!tags.includes(t)){
        tags.push(t);
      }
    });
  });

  const [state, setState] = useState({
    filteringTags: [],
    posts: allPosts || []
  });

  const filterPosts = event => {
    const tag = event.target.innerText;

    const filteringTags = state.filteringTags;

    if (filteringTags.includes(tag)){
      filteringTags.splice(filteringTags.indexOf(tag), 1);
    } else {
      filteringTags.push(tag);
    }
    
    const filteredPosts = filteringTags.length < 1 ? allPosts : allPosts.filter( post => {
      const ret = filteringTags.every( ft => post.node.frontmatter.tags.includes(ft));
      return ret ? post : false;
    });

    setState({
      filteringTags: filteringTags,
      posts: filteredPosts
    });

    
    
  };

  return (
    <Layout>

        <Helmet>
          <title>Il blog di LAD: notizie, appunti, recensioni, tutorial sulle applicazioni informatiche per l'archeologia</title>
          <meta name="description" content="Il blog di LAD raccoglie recensioni, notizie, tutorial, appunti e note relatice a progetti, tecnologie, strummenti, standard in uso nel campo della ricerca archeologica." />

          <meta property="og:title" content="Il blog di LAD: notizie, appunti, recensioni, tutorial sulle applicazioni informatiche per l'archeologia" />
          <meta property="og:description" content="Il blog di LAD raccoglie recensioni, notizie, tutorial, appunti e note relatice a progetti, tecnologie, strummenti, standard in uso nel campo della ricerca archeologica." />
          <meta property="og:url" content="https://lad.saras.uniroma1.it/blog" />
          <meta property="og:image" content={ withPrefix(`static/logos/lad-blue.png`) } />
        
          <meta property="twitter:title" content="Il blog di LAD: notizie, appunti, recensioni, tutorial sulle applicazioni informatiche per l'archeologia" />
          <meta property="twitter:description" content="Il blog di LAD raccoglie recensioni, notizie, tutorial, appunti e note relatice a progetti, tecnologie, strummenti, standard in uso nel campo della ricerca archeologica." />
          <meta property="twitter:url" content="https://lad.saras.uniroma1.it/blog" />
          <meta property="twitter:image" content={ withPrefix(`static/logos/lad-blue.png`) } />
        </Helmet>


      <h1 className="text-center">Blog</h1>

      <Container>
        <div className="mb-5 text-secondary p-2 text-center">
          Tag disponibili, clicca per filtrare gli articoli<br /> 
          {state.posts.length} articoli
          <br />
          { tags.map( (t, k) => <button key={k} className={`btn mx-1 ${state.filteringTags.includes(t) ? 'btn-success' : 'btn-light'}`} onClick={filterPosts}>{t}</button>
          )}
          
        </div>
      </Container>

      {state.posts.map(({ node }, k) => {
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
