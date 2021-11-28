//React
import React from "react";

//Gatsby
import styled from "styled-components";
import { Link } from "gatsby";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

//Components 
import {GiFeather} from "react-icons/gi"

const PostLayout = (props) => {
  return (
    <Wrapper>
      <Container fluid="md" className="divider">
          <Card>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Title className="author">
                <GiFeather className="icons" />
                {props.author}
              </Card.Title>
            </Card.Body>
          </Card>
      </Container>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  .card-title.author {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1.5rem !important;
    text-align: left;
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
  .icons {
    margin-right: 1rem;
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

export default PostLayout;
