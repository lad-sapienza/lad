//React
import React from "react";

// Gatsby
import styled from "styled-components";

//Components
import Title from "../components/Title";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Intro = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Title title="Cosa facciamo" align="left" />
        </div>
        <div className="intro">
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <p className="card-title">
                Il LAD sperimenta l'applicazione delle tecnologie alla ricerca
                archeologica. Negli ultimi decenni Internet e il suo più famoso
                servizio, il Web, hanno letteralmente invaso le nostre vite,
                diventando strumenti di comunicazione sempre più totalizzanti,
                un'esperienza che si è vista esasperare durante i lunghi periodi
                di isolamento sociale dovuto alla pandemia. Da vari anni, anche
                la ricerca archeologica ha sperimentato i canali comunicativi
                offerti dalla Rete, all'inizio esclusivamente per raccontarsi e
                allargare il proprio pubblico, e successivamente anche per
                potenziare la propria ricerca. Banche dati online, webGIS, cloud
                computing e ora anche intelligenza artificiale sono solo alcune
                delle parole chiave che stanno diventando vieppiù più familiari
                anche per le ricerche più “tradizionali”.
              </p>
              <p className="card-title">
                Il LAD è rivolto all'esplorazione di queste potenzialità, a
                creare ponti e facilitare l'interscambio tra la ricerca
                archeologia e il mondo dell'Information and Communication
                Technology (ICT). Il LAD quindi cerca di studiare, indagare,
                capire, esplorare, governare ed anticipare quello che sembra
                ormai essere il panorama futuro della nostra ricerca.
              </p>
              <p className="card-title">
                Infine, il LAD sposa una visione etica delle applicazioni
                tecnologiche, ponendo l'accento sulla trasparenza dei processi,
                la condivisione, la riproducibilità e la reciproca
                collaborazione. Per questo motivo pone il focus principale sulle
                tecnologie open source e sul software libero. Tutti i nostri
                progetti sono distribuiti con licenze aperte e pubblicati in
                repository ad accesso aperto!
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .col-md-8 {
    border-left: solid;
    border-width: 0.1rem;
    border-color: rgb(145, 145, 145);
  }
  .card-title {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }
  .intro {
    margin-top: 5rem;
  }
`;

export default Intro;
