//React
import React from 'react'

//Gatsby
import { withPrefix } from "gatsby"
import styled from 'styled-components'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const BlogPreview = (props) => {
  return (
    <Wrapper>
      <Container className="divider">
        <Row>
          <Col xs={12} md={8}>
            <Card style={{ width: "45rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Row>
                  <Col className="record-1">1 Feb 2020</Col>
                  <Col className="record-2">Julian Bogdani</Col>
                </Row>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>{props.excerpt}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Row>
                  <Col className="record-1">1 Feb 2020</Col>
                  <Col className="record-2">Julian Bogdani</Col>
                </Row>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Row>
                  <Col className="record-1">1 Feb 2020</Col>
                  <Col className="record-2">Julian Bogdani</Col>
                </Row>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
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
  .record-2 {
    font-family: "Raleway", sans-serif;
    font-weight: 100;
    font-size: 1rem;
    text-align: right;
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
