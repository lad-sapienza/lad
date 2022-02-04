//import
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import LAD from "../../static/logos/lad-blue.png";


const Footer = () => {
    return (
      <Wrapper>
        <footer>
          <Container className="pt-5 my-5">
            <Row>
              <Col sm={3} className="text-center d-flex align-items-center">
                <div>
                  <img
                    src={LAD}
                    className="d-md-inline-block mb-1"
                    alt="Laboratorio di Archeologia Digitale alla Sapienza"
                  />
                  <h5 className="text-center">Laboratorio di Archeologia Digitale alla Sapienza</h5>
                  <p>
                    Responsabile: Julian Bogdani<br />
                    <a href="mailto:julian.bogdani@uniroma1.it">
                      julian.bogdani@uniroma1.it
                    </a>
                  </p>
                </div>
              </Col>
              <Col sm={4} className="d-flex align-items-center">
                  <h5 className="text-center">
                    <a href="https://saras.uniroma1.it/" alt="SARAS" className="green">
                      Dipartimento di Storia Antropologia Religioni Arte
                      Spettacolo.<br /> Sapienza Università di Roma
                    </a>
                  </h5>
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
    max-width: 180px !important;
  }
  footer {
    margin-top: 5rem;
    border-top: solid;
    border-width: 0.1rem;
    border-color: rgb(145, 145, 145);
  }
  a.green {
    color: rgba(21, 71, 82, 0.8) !important;
  }
`;
export default Footer
