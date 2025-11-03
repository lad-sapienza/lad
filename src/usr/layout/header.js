import * as React from "react"
import { Link, withPrefix } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap"
import LAD from "../images/lad-blue.png"
import Sapienza from "../images/sapienza.png"

const HeaderSection = ({ siteTitle }) => (
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
    <Navbar className="mb-5 bg-light d-print-none" expand={true}>
      <Container>
        <Wrapper>
          <Nav className="d-flex justify-content-around text-center">
            <Nav.Link href={withPrefix(`/`)} title="Inizio">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>{" "}
              <span className="d-none d-md-block">Inizio</span>
            </Nav.Link>
            <Nav.Link href={withPrefix(`/#chi-siamo`)} title="Chi siamo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-person"
                viewBox="0 0 16 16"
              >
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
              <span className="d-none d-md-block">Chi siamo</span>
            </Nav.Link>
            <Nav.Link href={withPrefix(`/notizie/`)} title="Notizie">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-newspaper"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
              </svg>
              <span className="d-none d-md-block">Notizie</span>
            </Nav.Link>
            <Nav.Link href={withPrefix(`/blog/`)} title="Blog">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-body-text"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5m0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
                />
              </svg>
              <span className="d-none d-md-block">Blog</span>
            </Nav.Link>
            <Nav.Link href={withPrefix(`/ricerca/`)} title="Ricerca">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eyedropper"
                viewBox="0 0 16 16"
              >
                <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708zM2 12.707l7-7L10.293 7l-7 7H2z" />
              </svg>
              <span className="d-none d-md-block">Ricerca</span>
            </Nav.Link>
            <Nav.Link href={withPrefix(`/didattica/`)} title="Didattica">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-easel2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0M2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5zm9.61 1H4.39l-.25 1h7.72z"
                />
              </svg>
              <span className="d-none d-md-block">Didattica</span>
            </Nav.Link>
          </Nav>
        </Wrapper>
      </Container>
    </Navbar>
  </>
)

//styles
const StyledLogo = styled.img`
  max-width: 100% !important;
  @media (min-width: 576px) {
    max-width: 250px !important;
  }
`
const Wrapper = styled.div`
  width: 100% !important;
  max-width: 600px !important;
  margin: auto;

  a.nav-link {
    font-family: "Lora", serif !important;
    font-weight: 700;
    color: #151241 !important;

    &:hover {
      color: #1963f7 !important;
    }
  }
`

export default HeaderSection
