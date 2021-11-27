//React
import React from 'react'

//Gatsby
import styled from 'styled-components'
import Title from './Title';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

const BlogPreview = (props) => {
  return (
    <Wrapper>
      <Container className="divider">
        <Card>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Row>
              <Col className="record-1">{props.date}</Col>
              <Col className="author">{props.author}</Col>
            </Row>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.excerpt}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Wrapper>
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
  .record-1 {
    font-family: "Raleway", sans-serif;
    font-weight: 100;
    font-size: 0.8rem;
    text-align: left;
    color: rgb(145, 145, 145);
  }
  .divider {
    padding-top: 10rem;
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
