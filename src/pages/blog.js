//React
import React from "react";

//Gatsby
import styled from "styled-components";
import { Link } from "gatsby";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

//Component
import Layout from "../templates/Layout";

const blog = ({data}) => {
const content = data.allMarkdownRemark;
  return (
       <>
    <Layout>
      <Wrapper>
        <Container fluid="md" className="divider">
          <Link
            to={content.frontmatter.readMore}
            style={{ textDecoration: "none", color: "#212529" }}
          >
            <Card>
              <Card.Img variant="top" src={content.frontmatter.img} />
              <Card.Body>
                <Row>
                  <Col className="date">{content.frontmatter.date}</Col>
                  <Col className="author">{content.frontmatter.author}</Col>
                </Row>
                <Card.Title>{content.frontmatter.title}</Card.Title>
                <Card.Text>{content.frontmatter.excerpt}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Container>
      </Wrapper>
    </Layout>
     </>
  );
};

//styles
const Wrapper = styled.section`
  .author {
    font-family: "Raleway", sans-serif;
    font-weight: 100;
    font-size: 1rem;
    text-align: right;
    color: rgb(145, 145, 145);
  }
  .card {
    border: none;
    flex-direction: row;
  }
  .card-text {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }
  .card-title {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1.8rem;
  }
  .date {
    font-family: "Raleway", sans-serif;
    font-weight: 100;
    font-size: 0.8rem;
    text-align: right;
    color: rgb(145, 145, 145);
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
  .row {
    padding-bottom: 1.5rem;
  }
`;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: id, order: DESC }) {
      nodes {
        frontmatter {
          autore
          licenza
          livello
          sezione
          title
          date
          img {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                quality: 80
                width: 1500
                formats: AUTO
              )
            }
          }
        }
        excerpt(pruneLength: 600)
        fields {
          slug
        }
      }
    }
  }
`;

export default blog;
