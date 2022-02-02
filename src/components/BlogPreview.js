//React
import React from 'react'
//Gatsby
import styled from 'styled-components'
import { Link } from 'gatsby';
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Card } from "react-bootstrap";

//markup
const BlogPreview = (props) => {
  return (
    <Wrapper>
      <Container fluid="md" className="divider">
        <Link
          to={props.readMore}
          style={{ textDecoration: "none", color: "#212529" }}
        >
          <Card>
            <Card.Body>
              <Card.Text className="title">{props.title}</Card.Text>
              <Card.Text className="author">{props.author}</Card.Text>
              <Card.Text className="date">{props.date}</Card.Text>
              <Card.Text>{props.excerpt}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Container>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  .author.card-text,
  .date.card-text {
    font-family: "Raleway", sans-serif;
    font-weight: 200;
    font-size: 0.8rem;
    color: rgb(145, 145, 145);
    margin-top: 0 !important;
    margin-bottom: 0;
  }
  .card {
    border: none;
  }
  .card-body {
    padding-left: 0;
    padding-bottom: 0;
  }
  .card-body:hover {
    color: grey;
  }
  .title.card-text {
    font-family: "Cormorant Garamond", serif;
    font-size: 1.2rem;
    margin-bottom: 0;
    line-height: 1.4rem;
  }
  .card-text {
    font-family: "Raleway", sans-serif;
    font-weight: 200;
    font-size: 0.8rem;
    margin-top: 1rem;
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
    text-align: left;
    color: rgb(145, 145, 145);
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
export default BlogPreview
