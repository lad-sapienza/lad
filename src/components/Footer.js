//import
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import LAD from "../../static/logos/lad-blue.png";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="mt-5 border-top">
        <Container className="pt-5 my-5">
          <Row>
            <Col sm={3} className="text-center d-flex align-items-center">
              <div>
                <img
                  src={LAD}
                  className="d-md-inline-block mb-1"
                  alt="Laboratorio di Archeologia Digitale alla Sapienza"
                />
                <h5 className="text-center">
                  Laboratorio di Archeologia Digitale alla Sapienza
                </h5>
                <p>
                  Responsabile scientifico: Julian Bogdani
                  <br />
                  <a
                    href="mailto:julian.bogdani@uniroma1.it"
                    title="Mail to Julian Bogdani"
                  >
                    julian.bogdani@uniroma1.it
                  </a>
                </p>
              </div>
            </Col>
            <Col sm={4} className="d-flex align-items-center">
              <h5 className="text-center">
                <a
                  href="https://saras.uniroma1.it/"
                  title="Dipartimento SARAS. Sapienza Università di Roma"
                  className="green fs-4"
                >
                  Dipartimento di Storia Antropologia Religioni Arte Spettacolo.
                  <br /> Sapienza Università di Roma
                </a>
              </h5>
            </Col>
            <Col sm={5} className="text-center">
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
  a.green {
    color: rgba(21, 71, 82, 0.8) !important;
  }
`;
export default Footer;
