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
    <>
    <Container>
      <Row className="my-3">
        <Col xs={6}>
          <Link to="/" title="Pagina iniziale">
            <StyledLogo
                src={LAD}
                alt="Laboratorio di Archeologia Digitale alla Sapienza"
              />
          </Link>
        </Col>
        <Col xs={6} className="text-end">
          <a href="https://www.uniroma1.it" title="Sapienza Università di Roma">
            <StyledLogo
                src={Sapienza}
                className="d-md-inline-block align-top"
                alt="Sapienza Università di Roma"
              />
          </a>
        </Col>
      </Row>
    </Container>
    <Navbar className="mb-5 bg-light" expand={true}>
      <Container>
        <Wrapper>
          <Nav className='d-flex justify-content-around'>
            <Nav.Link href={withPrefix(`/`)} title="Inizio">Inizio</Nav.Link>
            <Nav.Link href={withPrefix(`/notizie/`)} title="Notizie">Notizie</Nav.Link>
            <Nav.Link href={withPrefix(`/blog/`)} title="Blog">Blog</Nav.Link>
            <Nav.Link href={withPrefix(`/ricerca/`)} title="Ricerca">Ricerca</Nav.Link>
            <Nav.Link href={withPrefix(`/didattica/`)} title="Didattica">Didattica</Nav.Link>
          </Nav>
        </Wrapper>
      </Container>
    </Navbar>
  </>
  );
}

//styles
const StyledLogo = styled.img`
  max-width: 100% !important;
  @media (min-width: 576px) {
    max-width: 250px !important;
  }
`;
const Wrapper = styled.div`
  width: 100% !important;
  max-width: 600px !important;
  margin: auto;

  a.nav-link {
    font-family: "Cormorant Garamond", serif !important;
    font-size: 1.2rem !important;
    font-weight: 700;
    color: #151241 !important;
    
    &:hover{
      color: #1963F7 !important;
    }
  }
`;

export default Header
