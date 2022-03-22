//import
import React from "react";
import styled from "styled-components";

//other
import { Card, CardGroup } from "react-bootstrap";
import { FaGithub, FaTwitter, FaUniversity } from "react-icons/fa";
import { SiAcademia, SiResearchgate } from "react-icons/si";
import { GiIceIris } from "react-icons/gi";

const Team = () => {

  const teamData = [
    {
      "name": "Julian Bogdani",
      "image": "images/jbogdani.jpg",
      "position": "Responsabile scientifico del laboratorio",
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

  const iconList = [
    {
      "id": "uni",
      "label": "Sito istituzionale",
      "icon": <FaUniversity />
    },
    {
      "id": "github",
      "label": "GitHub",
      "icon": <FaGithub />
    },
    {
      "id": "academia",
      "label": "Academia.edu",
      "icon": <SiAcademia />
    },
    {
      "id": "iris",
      "label": "Repository IRIS",
      "icon": <GiIceIris />
    },
    {
      "id": "researchgate",
      "label": "Research Gate",
      "icon": <SiResearchgate />
    },
    {
      "id": "twitter",
      "label": "Twitter",
      "icon": <FaTwitter />
    },
  ];

  return (
    <Wrapper>
      <h2 className="border-bottom">Chi siamo</h2>
      <CardGroup>
        {teamData.map( (m, mk) => {
          return (
          <Card key={mk}>
            <Card.Img variant="top" src={ m.image } />
            <Card.Body>
              <Card.Title>{ m.name }</Card.Title>
              <Card.Text className="position">{ m.position }</Card.Text>
              <Card.Text className="dipartimento">{ m.affiliation }</Card.Text>
              <Card.Text className="icon">
                { iconList.map( (i, ik) => {
                  if (m[i.id]) {
                    return <a href={ m[i.id] } title={i.label} key={ik}>{i.icon}</a>
                  } else {
                    return ''
                  }
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        )
        })}
      </CardGroup>
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
