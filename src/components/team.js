//import
import React from "react";
import styled from "styled-components";
//components
import Title from "./title";
//other
import { Container, Card, CardGroup } from "react-bootstrap";
import { FaGithub, FaTwitter, FaUniversity } from "react-icons/fa";
import { SiAcademia, SiResearchgate } from "react-icons/si";
import { GiIceIris } from "react-icons/gi";

const AboutUs = () => {
  return (
    <Wrapper>
      <Container>
        <Title title="Chi siamo" align="left" />
        <CardGroup>
          {/* Julian */}
          <Card>
            <Card.Img variant="top" src="images/jbogdani.jpeg" />
            <Card.Body>
              <Card.Title>Julian Bogdani</Card.Title>
              <Card.Text className="position">
                Responsabile del laboratorio
              </Card.Text>
              <Card.Text className="dipartimento">
                Ricercatore di Metodologie della Ricerca Archeologica, Dip.
                SARAS
              </Card.Text>
              <Card.Text className="icon">
                <a href="https://www.lettere.uniroma1.it/users/julian-bogdani">
                  <FaUniversity />
                </a>
                <a href="https://github.com/jbogdani">
                  <FaGithub />
                </a>
                <a href="https://uniroma1.academia.edu/JulianBogdani">
                  <SiAcademia />
                </a>
                <a href="https://iris.uniroma1.it/browse?type=author&authority=rp62440&authority_lang=en">
                  <GiIceIris />
                </a>
                <a href="https://www.researchgate.net/profile/Julian-Bogdani">
                  <SiResearchgate />
                </a>
                <a href="https://twitter.com/JulianBogdani">
                  <FaTwitter />
                </a>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Domizia */}
          <Card>
            <Card.Img variant="top" src="images/d_erasmo.png" />
            <Card.Body>
              <Card.Title>Domizia D'Erasmo</Card.Title>
              <Card.Text className="position">Tutor</Card.Text>
                <Card.Text className="dipartimento">
                  Assegnista di ricerca di Metodologie della Ricerca
                  Archeologica, Dip. SARAS
                </Card.Text>
                <Card.Text className="icon">
                  <a href="https://github.com/ddomizia">
                    <FaGithub />
                  </a>
                  <a href="https://uniroma1.academia.edu/domiziaderasmo">
                    <SiAcademia />
                  </a>
                  <a
                    href
                    to="https://iris.uniroma1.it/simple-search?query=Domizia+D%27Erasmo&needescape=1"
                  >
                    <GiIceIris />
                  </a>
                  <a
                    href
                    to="https://www.researchgate.net/profile/Domizia_Derasmo"
                  >
                    <SiResearchgate />
                  </a>
                  <a href="https://twitter.com/DomiziaDErasmo">
                    <FaTwitter />
                  </a>
                </Card.Text>
            </Card.Body>
          </Card>

          {/* Paolo */}
          <Card>
            <Card.Img variant="top" src="images/prosati.jpg" />
            <Card.Body>
              <Card.Title>Paolo Rosati</Card.Title>
              <Card.Text className="position">Tutor</Card.Text>
              <Card.Text className="dipartimento">
                Assegnista di ricerca del progetto <em>PAThs</em>, Dip. SARAS
              </Card.Text>
              <Card.Text className="icon">
                <a href="">
                  <FaGithub />
                </a>
                <a href="https://uniroma1.academia.edu/RosatiPaolo">
                  <SiAcademia />
                </a>
                <a href="https://www.researchgate.net/profile/Paolo-Rosati-2">
                  <SiResearchgate />
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    filter: grayscale(100%);
  }
  img:hover {
    filter: none;
  }
  svg {
    margin-right: 1rem;
  }
  p .card-text {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }
  .card {
    margin-right: 0.4rem;
    border: none;
  }
  .card-title {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1.5rem;
    text-align: center;
  }
  .card-text.dipartimento {
    font-size: 1rem !important;
    text-align: center;
  }
  .icon {
    text-align: center;
  }
  .card-text.position {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-style: italic;
    font-size: 1rem !important;
    text-align: center;
  }
`;

export default AboutUs;
