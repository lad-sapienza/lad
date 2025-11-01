//import
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import LAD from "../../static/logos/lad.svg";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="mt-5 border-top">
        <Container className="pt-5 mt-5">
          <Row className="text-center py-5">
            <Col md={3} className="mb-3">
              <img
                src={LAD}
                className="mb-2 img-fluid"
                alt="Laboratorio di Archeologia Digitale alla Sapienza"
              />
              <h5 className="text-center">
                Laboratorio di Archeologia Digitale alla Sapienza
              </h5>
              <p>
                Responsabile scientifico: Julian Bogdani
              </p>
            </Col>
            <Col md={4} className="d-flex align-items-center mb-3 d-print-none">
              <h5>
                <a
                  href="https://saras.uniroma1.it/"
                  title="Dipartimento SARAS Sapienza Università di Roma"
                >
                  Dipartimento di Storia Antropologia Religioni Arte Spettacolo
                  <br /> Sapienza Università di Roma
                </a>
              </h5>
            </Col>
            <Col md={5} className="mb-3 d-print-none">
              <h5>
                Nota sulla <em>privacy</em>
              </h5>
              <p>
                Questo sito <strong>non</strong> traccia l'attività dei suoi
                lettori e <strong>non</strong> raccoglie dati personali sulla
                navigazione, cronologia, preferenze, indirizzo IP,
                geolocalizzazione o altre informazioni personali, aggregate o
                meno. Il LAD ha scelto di non raccogliere statistiche sul
                proprio utilizzo per difendere il diritto alla riservatezza dei
                propri utenti.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #0d6efd;
  color: #fff;
  a {
    text-decoration: none !important;
    color: #fff !important;
    &:hover {
      color: #fff !important;
    }
  }
  img {
    max-width: 180px !important;
  }
  a.green {
    color: rgba(21, 71, 82, 0.8) !important;
  }
`;
export default Footer;
