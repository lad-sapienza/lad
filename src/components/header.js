//React
import React from 'react'

//Gatsby
import { withPrefix } from "gatsby"
import styled from 'styled-components'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav } from "react-bootstrap"

//Images
import LadBlu from "../../static/logos/lad-blue.png"

//styles
const Lad = {
  width: "100px",
  marginLeft: 50,
};

const Header = () => {
    return (
      <Wrapper>
        <Navbar fixed="top" expand="lg">
          <Navbar.Brand href={withPrefix(`/`)}>
            <img
              style={Lad}
              src={LadBlu}
              className="d-md-inline-block align-top d-none"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link href={withPrefix(`/`)}>Home</Nav.Link>
              <Nav.Link href={withPrefix(`/blog/`)}>Blog</Nav.Link>
              <Nav.Link href={withPrefix(`/blog/`)}>Project</Nav.Link>
              <Nav.Link href={withPrefix(`/team/`)}>Team</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Wrapper>
    );
}

//styles
const Wrapper = styled.section`
  .nav-link:hover {
   text-decoration-line: underline;
  }
  .nav-link {
    font-family: "Cormorant Garamond", serif !important;
    padding-right: 4rem !important;
    color: #151241 !important;
  }
`;

export default Header
