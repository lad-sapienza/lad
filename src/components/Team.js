//import
import React from "react";
import styled from "styled-components";

//other
import { Card, Row, Col } from "react-bootstrap";
import { FaGithub, FaTwitter, FaUniversity } from "react-icons/fa";
import { SiAcademia, SiResearchgate, SiBluesky } from "react-icons/si";
import { GiIceIris } from "react-icons/gi";
import { RiCalendarScheduleFill } from "react-icons/ri";

const Team = () => {
  const jb = {
    name: "Julian Bogdani",
    image: "images/julian-bogdani.jpg",
    position: "Responsabile scientifico del laboratorio",
    affiliation:
      "Professore Associato di Metodologie della Ricerca Archeologica, Dip. SARAS",
    uni: "https://purl.org/lad/jb",
    github: "https://github.com/jbogdani",
    academia: "https://uniroma1.academia.edu/JulianBogdani",
    iris: "https://iris.uniroma1.it/browse?type=author&authority=rp62440&authority_lang=en",
    researchgate: "https://www.researchgate.net/profile/Julian-Bogdani",
    twitter: "https://twitter.com/JulianBogdani",
    bluesky: "https://bsky.app/profile/jbogdani.bsky.social",
    apmt: "https://apmt.day/julian.bogdani%40uniroma1.it/book/",
  };
  const teamData = [
    {
      name: "Eleonora Iacopini",
      image: "images/eleonora-iacopini.jpg",
      position: "Membro del laboratorio",
      affiliation:
        "Assegnista di ricerca di Metodologie di Ricerca Archeologica, Dip. SARAS, Sapienza",
      iris: "https://iris.uniroma1.it/simple-search?query=iacopini+eleonora&needescape=1",
      academia: "https://uniroma1.academia.edu/EleonoraIacopini",
      researchgate: "https://www.researchgate.net/profile/Eleonora_Iacopini",
      github: "https://github.com/eiacopini",
    },
    {
      name: "Nadia Aleotti",
      image: "images/nadia-aleotti.jpg",
      position: "Membro del laboratorio",
      affiliation:
        "Assegnista di ricerca Metodologie di Ricerca Archeologica, Dip. SARAS, Sapienza",
      academia: "https://uniroma1.academia.edu/NadiaAleotti",
      researchgate: "https://www.researchgate.net/profile/Nadia-Aleotti",
    },
    {
      name: "Francesca D'Ambola",
      image: "images/francesca-dambola.jpg",
      position: "Membro del laboratorio",
      affiliation:
        "Dottoranda in Archeologia, Dip. Scienze dell'Antichità, Sapienza",
      academia: "https://uniroma1.academia.edu/FrancescaDAmbola",
      iris: "https://iris.uniroma1.it/cris/rp/rp338805",
      researchgate: "https://www.researchgate.net/profile/Francesca-Dambola",
    },
    {
      name: "Domizia D'Erasmo",
      image: "images/domizia-derasmo.jpg",
      position: "Membro del laboratorio",
      affiliation:
        "Dottoranda in Archeologia, Dip. Scienze dell'Antichità, Sapienza",
      github: "https://github.com/ddomizia",
      academia: "https://uniroma1.academia.edu/domiziaderasmo",
      iris: "https://iris.uniroma1.it/simple-search?query=Domizia+D%27Erasmo&needescape=1",
      researchgate: "https://www.researchgate.net/profile/Domizia_Derasmo",
      twitter: "https://twitter.com/domizzzia",
    },
    {
      name: "Erasmo Di Fonso",
      image: "images/erasmo-di-fonso.jpg",
      position: "Membro del laboratorio",
      affiliation: "Assegnista di ricerca, Dip. Istituto Studi Orientali (ISO), Sapienza",
      github: "https://github.com/erasmdif",
    },
    {
      name: "Paolo Rosati",
      image: "images/paolo-rosati.jpg",
      position: "Membro del laboratorio",
      affiliation: "Assegnista di ricerca presso il Dip. SARAS, Sapienza",
      academia: "https://uniroma1.academia.edu/RosatiPaolo",
      researchgate: "https://www.researchgate.net/profile/Paolo-Rosati-2",
    },
  ];

  const iconList = [
    {
      id: "uni",
      label: "Sito istituzionale",
      icon: <FaUniversity />,
    },
    {
      id: "github",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      id: "academia",
      label: "Academia.edu",
      icon: <SiAcademia />,
    },
    {
      id: "iris",
      label: "Repository IRIS",
      icon: <GiIceIris />,
    },
    {
      id: "researchgate",
      label: "Research Gate",
      icon: <SiResearchgate />,
    },
    {
      id: "twitter",
      label: "X",
      icon: <FaTwitter />,
    },
    {
      id: "bluesky",
      label: "BlueSky",
      icon: <SiBluesky />,
    },
    {
      id: "apmt",
      label: "Fissa un appuntamento",
      icon: <RiCalendarScheduleFill />,
    },
  ];

  return (
    <Wrapper>
      <h2 className="border-bottom">Chi siamo</h2>
      <Row className="py-5">
        <Col md="6" lg="4">
          <Card>
            <Card.Img
              variant="top"
              src={jb.image}
              alt={`LAD ${jb.position}: ${jb.name}`}
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{jb.name}</Card.Title>
              <Card.Text className="position">{jb.position}</Card.Text>
              <Card.Text className="dipartimento">{jb.affiliation}</Card.Text>
              <Card.Text className="icon">
                {iconList.map((i, ik) => {
                  if (jb[i.id]) {
                    return (
                      <a href={jb[i.id]} title={i.label} key={ik}>
                        {i.icon}
                      </a>
                    );
                  } else {
                    return "";
                  }
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {teamData.map((m, mk) => {
          return (
            <Col xs={6} md={4}  key={mk}>
              <Card>
                <Card.Img
                  variant="top"
                  src={m.image}
                  alt={`LAD ${m.position}: ${m.name}`}
                />
                <Card.Body>
                  <Card.Title>{m.name}</Card.Title>
                  <Card.Text className="position">{m.position}</Card.Text>
                  <Card.Text className="dipartimento">
                    {m.affiliation}
                  </Card.Text>
                  <Card.Text className="icon">
                    {iconList.map((i, ik) => {
                      if (m[i.id]) {
                        return (
                          <a href={m[i.id]} title={i.label} key={ik}>
                            {i.icon}
                          </a>
                        );
                      } else {
                        return "";
                      }
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
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
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
  .card {
    padding: 0.5rem;
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
