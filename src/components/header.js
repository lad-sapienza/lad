//import
import React from 'react'
import { Link, withPrefix } from "gatsby"
import styled from 'styled-components'
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import Sapienza from "../../static/logos/sapienza.png";
import LAD      from "../../static/logos/lad-blue.png"


//markup
const Header = () => {
    return (
      <Wrapper>
        <Container>
          <Row className="my-3">
            <Col>
              <a href="https://www.uniroma1.it" title="Sapienza Università di Roma">
                <img
                    src={Sapienza}
                    className="d-md-inline-block align-top logo sapienza"
                    alt="Sapienza Università di Roma"
                  />
                </a>
            </Col>
            <Col className="text-end">
              <Link to="/" title="Pagina iniziale">
                <img
                    src={LAD}
                    className="logo lad"
                    alt="Laboratorio di Archeologia Digitale alla Sapienza"
                  />
              </Link>
            </Col>
          </Row>
        </Container>
        <Navbar className="navbar-lad mb-5" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-center"
              id="basic-navbar-nav"
            >
              <Nav>
                <Nav.Link href={withPrefix(`/`)}>Home</Nav.Link>
                <Nav.Link href={withPrefix(`/blog/`)}>Blog</Nav.Link>
                <Nav.Link href={withPrefix(`/ricerca/`)}>Ricerca</Nav.Link>
                <Nav.Link href={withPrefix(`/didattica/`)}>Didattica</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Wrapper>
    );
}

//styles
const Wrapper = styled.section`
  .navbar-lad.navbar {
    background-color: rgba(247,246,249) !important;
  }
  .nav-link:hover {
    text-decoration-line: underline;
  }
  .nav-link {
    font-family: "Cormorant Garamond", serif !important;
    font-size: 1.3rem !important;
    padding-right: 4rem !important;
    color: #151241 !important;
  }
  img.logo{
    max-width: 45% !important;
    max-height: 70px;
  }
`;

export default Header
