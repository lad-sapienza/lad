//import
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import LAD from "../../static/logos/lad-blue.png";
import Title from "../components/title";


const Footer = () => {
    return (
      <Wrapper>
        <footer>
          <Container className="pt-5 my-5">
            <Row>
              <Col sm={3}>
                <img
                  src={LAD}
                  className="d-md-inline-block align-top"
                  alt="Laboratorio di Archeologia Digitale alla Sapienza"
                />
                <Title tag="h5" align="center">Laboratorio di Archeologia Digitale alla Sapienza</Title>
                <p>Responsabile: Julian Bogdani<br />
                <a href="mailto:julian.bogdani@uniroma1.it">
                  julian.bogdani@uniroma1.it
                </a></p>
              </Col>
              <Col sm={4}>
                  <Title tag="h4" align="center">
                    <a href="https://saras.uniroma1.it/" alt="SARAS" className="saras">
                      SARAS: Dipartimento di Storia Antropologia Religioni Arte
                      Spettacolo. Sapienza Università di Roma
                    </a>
                  </Title>
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
    &:hover {
      text-decoration: none !important;
      color: #0d6efd;
    }
  }
  img {
    max-width: 200px !important;
  }
  footer .container {
    border-top: solid;
    border-width: 0.1rem;
    border-color: rgb(145, 145, 145);
  }
  h4 a.saras {
    color: rgba(21, 71, 82, 0.8) !important;
  }
`;
export default Footer
