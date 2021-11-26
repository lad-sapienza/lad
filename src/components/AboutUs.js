//React
import React from "react";

//Gatsby
import { withPrefix } from "gatsby";
import styled from "styled-components";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardGroup } from "react-bootstrap";

import { FaGithub, FaTwitter, FaUniversity } from "react-icons/fa";
import { SiAcademia, SiResearchgate } from "react-icons/si";
import {GiIceIris} from "react-icons/gi"

//Images
import Domizia from "../../static/images/dderasmo.jpg"
import Julian from "../../static/images/jbogdani.jpeg"
import Paolo from "../../static/images/prosati.jpg"

const AboutUs = () => {
  return (
    <Wrapper>
      <Container>
        <CardGroup className="card-group">
          <Card>
            <Card.Img variant="top" src={Julian} />
            <Card.Body>
              <Card.Title>Julian Bogdani</Card.Title>
              <Card.Text>
                <Card.Text>
                  <p className="position">Responsabile del laboratorio</p>
                  <p>
                    Ricercatore di Metodologie della Ricerca Archeologica,
                    Dipartimento SARAS
                  </p>
                </Card.Text>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <FaUniversity className="icon"></FaUniversity>
              <FaGithub className="icon"></FaGithub>
              <SiAcademia className="icon"></SiAcademia>
              <GiIceIris className="icon"></GiIceIris>
              <SiResearchgate className="icon"></SiResearchgate>
              <FaTwitter className="icon"></FaTwitter>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Domizia} />
            <Card.Body>
              <Card.Title>Domizia D'Erasmo</Card.Title>
              <Card.Text>
                <p className="position">Tutor</p>
                <p>
                  Assegnista di ricerca di Metodologie della Ricerca
                  Archeologica, Dipartimento SARAS
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <FaGithub className="icon"></FaGithub>
              <SiAcademia className="icon"></SiAcademia>
              <GiIceIris className="icon"></GiIceIris>
              <SiResearchgate className="icon"></SiResearchgate>
              <FaTwitter className="icon"></FaTwitter>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Paolo} />
            <Card.Body>
              <Card.Title>Paolo Rosati</Card.Title>
              <Card.Text>
                <p className="position">Tutor</p>
                <p>
                  Assegnista di ricerca del progetto PAThs, Dipartimento SARAS
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <FaGithub className="icon"></FaGithub>
              <SiAcademia className="icon"></SiAcademia>
              <SiResearchgate className="icon"></SiResearchgate>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .author {
    font-family: "Raleway", sans-serif;
    font-weight: 100;
    font-size: 1rem;
    text-align: right;
    color: rgb(145, 145, 145);
  }
  .card {
    margin-right: 1rem;
    border: none;
  }
  .card-footer {
    background-color: white !important;
    border-color: rgb(145, 145, 145);
  }
  .card-group {
    margin: 0 3rem 0 3rem;
  }
  .card-img {
    width: 100%;
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
  }
  .container {
    padding-top: 10rem;
  }
  .icon {
    margin-right: 1rem;
  }
  .position {
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-style: italic;
    font-size: 1.2rem !important;
  }
`;

export default AboutUs;
