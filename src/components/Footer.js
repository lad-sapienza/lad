//import
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import LAD from "../../static/logos/lad-blue.png";

const Footer = () => {
    return (
      <Wrapper>
        <footer>
          <Container>
            <Row>
              <Col>
                <img
                  src={LAD}
                  className="d-md-inline-block align-top"
                  alt="logo LAD"
                />
              </Col>
              <Col>
                <Link to="https://saras.uniroma1.it/" alt="SARAS">
                  <h4 className="dipartimento">
                    Dipartimento di Storia Antropologia Religioni Arte
                    Spettacolo (SARAS)
                  </h4>
                </Link>
              </Col>
              <Col>
                <h3>Laboratorio di Archeologia Digitale alla Sapienza</h3>
                <p>Responsabile: Julian Bogdani</p>
                <a href="mailto:julian.bogdani@uniroma1.it">
                  julian.bogdani@uniroma1.it
                </a>
              </Col>
            </Row>
          </Container>
        </footer>
      </Wrapper>
    );
}
const Wrapper = styled.section`
  a {
    text-decoration: none !important;
    color: currentColor;
  }
  a:hover {
    text-decoration: none !important;
    color: #0d6efd;
  }
  footer {
    /* background-color: rgba(247, 246, 249) !important; */
  }
  h2 {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1.5rem;
  }
  h3 {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 200;
    font-size: 1.1rem;
  }
  img {
    max-width: 200px !important;
  }
  p {
    margin: 0;
    font-weight: 300;
    font-size: 0.9rem;
  }
  .container {
    border-top: solid;
    border-width: 0.1rem;
    border-color: rgb(145, 145, 145);
  }
  .dipartimento {
    color: rgba(21, 71, 82, 0.8);
    font-size: 1.5rem;
  }
  .icon {
    margin-right: 1rem;
  }
  .row {
    margin-top: 6rem;
    margin-bottom: 3rem;
  }
  .social {
    padding-top: 1.5rem;
  }
`;
export default Footer
