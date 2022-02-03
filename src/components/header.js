//import
import React from 'react'
import { withPrefix } from "gatsby"
import styled from 'styled-components'
import { Navbar, Nav } from "react-bootstrap"
import Sapienza from "../../static/logos/sapienza.png";
import LAD from "../../static/logos/lad-blue.png"

//styles
const LadLogo = {
  width: "100px",
  marginLeft: 50,
};
const SapLogo = {
  width: "200px",
  marginLeft: 40,
};

//markup
const Header = () => {
    return (
      <Wrapper>
        <Navbar expand="lg">
          <Navbar.Brand href={withPrefix(`/`)}>
            <img
              style={SapLogo}
              src={Sapienza}
              className="d-md-inline-block align-top d-none"
              alt="logo sapienza"
            />
          </Navbar.Brand>
          <Navbar.Brand href={withPrefix(`/`)}>
            <img
              style={LadLogo}
              src={LAD}
              className="d-md-inline-block align-top d-none"
              alt="logo LAD"
            />
          </Navbar.Brand>
        </Navbar>
        <Navbar className="navbar-lad" expand="lg">
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
`;

export default Header
