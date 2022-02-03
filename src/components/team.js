//import
import React from "react";
import { Link } from "gatsby";
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
              <Card.Text>
                <Card.Text>
                  <p className="position">Responsabile del laboratorio</p>
                  <p>
                    Ricercatore di Metodologie della Ricerca Archeologica,
                    Dip. SARAS
                  </p>
                  <p>
                    <Link to="https://www.lettere.uniroma1.it/users/julian-bogdani">
                      <FaUniversity className="icon" />
                    </Link>
                    <Link to="https://github.com/jbogdani">
                      <FaGithub className="icon" />
                    </Link>
                    <Link to="https://uniroma1.academia.edu/JulianBogdani">
                      <SiAcademia className="icon" />
                    </Link>
                    <Link to="https://iris.uniroma1.it/browse?type=author&authority=rp62440&authority_lang=en">
                      <GiIceIris className="icon" />
                    </Link>
                    <Link to="https://www.researchgate.net/profile/Julian-Bogdani">
                      <SiResearchgate className="icon" />
                    </Link>
                    <Link to="https://twitter.com/JulianBogdani">
                      <FaTwitter className="icon" />
                    </Link>
                  </p>
                </Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Domizia */}
          <Card>
            <Card.Img variant="top" src="images/d_erasmo.png" />
            <Card.Body>
              <Card.Title>Domizia D'Erasmo</Card.Title>
              <Card.Text>
                <p className="position">Tutor</p>
                <p>
                  Assegnista di ricerca di Metodologie della Ricerca
                  Archeologica, Dip. SARAS
                </p>
                <p>
                  <Link to="https://github.com/ddomizia">
                    <FaGithub className="icon" />
                  </Link>
                  <Link to="https://uniroma1.academia.edu/domiziaderasmo">
                    <SiAcademia className="icon" />
                  </Link>
                  <Link to="https://iris.uniroma1.it/simple-search?query=Domizia+D%27Erasmo&needescape=1">
                    <GiIceIris className="icon" />
                  </Link>
                  <Link to="https://www.researchgate.net/profile/Domizia_Derasmo">
                    <SiResearchgate className="icon" />
                  </Link>
                  <Link to="https://twitter.com/DomiziaDErasmo">
                    <FaTwitter className="icon" />
                  </Link>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Paolo */}
          <Card>
            <Card.Img variant="top" src="images/prosati.jpg" />
            <Card.Body>
              <Card.Title>Paolo Rosati</Card.Title>
              <Card.Text>
                <p className="position">Tutor</p>
                <p>
                  Assegnista di ricerca del progetto <em>PAThs</em>,
                  Dip. SARAS
                </p>
                <p>
                  <Link to="">
                    <FaGithub className="icon" />
                  </Link>
                  <Link to="https://uniroma1.academia.edu/RosatiPaolo">
                    <SiAcademia className="icon" />
                  </Link>
                  <Link to="https://www.researchgate.net/profile/Paolo-Rosati-2">
                    <SiResearchgate className="icon" />
                  </Link>
                </p>
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
  .card {
    margin-right: 0.4rem;
    border: none;
  }
  .card-text p {
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 0.9rem;
  }
  .card-title {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 1.5rem;
    text-align: center;
  }
  .icon {
    margin-right: 1rem;
  }
  p .position {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-style: italic;
    font-size: 1rem !important;
  }
  p {
    font-size: 0.8rem !important;
    text-align: center;
  }
`;

export default AboutUs;
