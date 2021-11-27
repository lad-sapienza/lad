//React
import React from 'react'

// Gatsby
import styled from 'styled-components';

//Components
import Title from '../components/Title';

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Intro = () => {
    return (
      <Wrapper>
        <Container>
          <div>
            <Title title="Presentazione" align="left" />
          </div>
          <div className="intro">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <p className="card-title">
                  LAD Laboratorio di Archeologia Digitale alla Sapienza promuove
                  la ricerca, la sperimentazione e la didattica delle tecnologie
                  digitali per l'archeologia e più in generale per gli studi
                  umanistici.
                </p>
                <p className="card-title">
                  Il LAD contribuisce allo sviluppo e promozione della cultura
                  FLOS (<em>free, libre e open source</em>) e alla pubblicazione
                  ad accesso aperto di dati e risultati della ricerca.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </Wrapper>
    );
}
const Wrapper = styled.section`
  .col-md-6 {
    border-left: solid;
    border-width: 0.1rem;
    border-color: rgb(145, 145, 145);
  }
  .card-title {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 1rem;
    text-indent: 3%;
  }
  .intro {
    margin-top: 5rem;
  }
`;

export default Intro
