//import
import React from "react";
import styled from "styled-components";

//other
import { Container, Card, CardGroup } from "react-bootstrap";
import { FaGithub, FaTwitter, FaUniversity } from "react-icons/fa";
import { SiAcademia, SiResearchgate } from "react-icons/si";
import { GiIceIris } from "react-icons/gi";

const Team = () => {

  const teamData = [
    {
      "name": "Julian Bogdani",
      "image": "images/jbogdani.jpg",
      "position": "Responsabile del laboratorio",
      "affiliation": "Ricercatore di Metodologie della Ricerca Archeologica, Dip. SARAS",
      "uni": "https://www.lettere.uniroma1.it/users/julian-bogdani",
      "github": "https://github.com/jbogdani",
      "academia": "https://uniroma1.academia.edu/JulianBogdani",
      "iris": "https://iris.uniroma1.it/browse?type=author&authority=rp62440&authority_lang=en",
      "researchgate": "https://www.researchgate.net/profile/Julian-Bogdani",
      "twitter": "https://twitter.com/JulianBogdani"
    },
    {
      "name": "Domizia D'Erasmo",
      "image": "images/dderasmo.jpg",
      "position": "Tutor",
      "affiliation": "Assegnista di ricerca di Metodologie della Ricerca Archeologica, Dip. SARAS",
      "github": "https://github.com/ddomizia",
      "academia": "https://uniroma1.academia.edu/domiziaderasmo",
      "iris": "https://iris.uniroma1.it/simple-search?query=Domizia+D%27Erasmo&needescape=1",
      "researchgate": "https://www.researchgate.net/profile/Domizia_Derasmo",
      "twitter": "https://twitter.com/DomiziaDErasmo"
    },
    {
      "name": "Paolo Rosati",
      "image": "images/prosati.jpg",
      "position": "Tutor",
      "affiliation": "Assegnista di ricerca del progetto PAThs, Dip. SARAS",
      "academia": "https://uniroma1.academia.edu/RosatiPaolo",
      "researchgate": "https://www.researchgate.net/profile/Paolo-Rosati-2"
    },
  ];
  return (
    <Wrapper>
      <Container>
        <h2 className="border-bottom">Chi siamo</h2>
        <CardGroup>
          {teamData.map( m => {
            return (
            <Card>
              <Card.Img variant="top" src={ m.image } />
              <Card.Body>
                <Card.Title>{ m.name }</Card.Title>
                <Card.Text className="position">{ m.position }</Card.Text>
                <Card.Text className="dipartimento">{ m.affiliation }</Card.Text>
                <Card.Text className="icon">
                  { m.uni && <a href={ m.uni } title="Sito istituzionale">
                    <FaUniversity />
                  </a>}
                  { m.github && <a href={ m.github } title="Github">
                    <FaGithub />
                  </a>}
                  { m.academia && <a href={ m.academia } title="Academia.edu">
                    <SiAcademia />
                  </a>}
                  { m.iris && <a href={ m.iris } title="Catalogo IRIS">
                    <GiIceIris />
                  </a>}
                  { m.researchgate && <a href={ m.researchgate } title="Research Gate">
                    <SiResearchgate />
                  </a>}
                  { m.twitter && <a href={ m.twitter } title="Twitter">
                    <FaTwitter />
                  </a>}
                </Card.Text>
              </Card.Body>
            </Card>
          )
          })}
        </CardGroup>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    filter: grayscale(100%);
    &:hover {
      filter: none;
    }
  }
  svg {
    margin-right: .5rem;
    margin-left: .5rem;
  }
  .card {
    padding: .5rem;
    border: none;
  }
  .card-title {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 900;
    font-size: 1.4rem;
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
    font-size: 1rem !important;
    text-align: center;
    line-height: 1.2rem;
  }
`;

export default Team;
