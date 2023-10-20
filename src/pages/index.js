//import
import React from "react";
import { graphql, withPrefix } from "gatsby";
import styled from "styled-components";
//components
import Team from "../components/Team";
import Layout from "../templates/Layout";
import BlogPreview from "../components/BlogPreview";
//others
import { Row, Col, Container } from "react-bootstrap";
import Seo from "../components/Seo";

//markup
const Index = ({ data }) => {
  return (
    <Layout>
      <Seo
        title="Home page ufficiale del LAD: Laboratorio di Archeologia Digitale alla Sapienza"
        description="Benvenuti al sto del LAD: Laboratorio di Archeologia Digitale alla Sapienza  promuove la ricerca, la sperimentazione e la didattica delle tecnologie digitali FLOS per l'archeologia."
        url={data.site.siteMetadata.siteUrl}
        image={`${data.site.siteMetadata.siteUrl}${withPrefix(
          `/logos/lad-blue.png`
        )}`.replace(/([^:]\/)\/+/g, "$1")}
      />
      <Wrapper>
        <Container>
          <Row className="index">
            <Col className="col-intro" sm={8}>
              <Container>
                <section id="intro">
                  <h1 className="border-bottom">
                    LAD: Laboratorio di Archeologia Digitale alla Sapienza
                  </h1>
                  <p>
                    LAD: Laboratorio di Archeologia Digitale alla Sapienza
                    promuove la ricerca, la sperimentazione e la didattica delle
                    tecnologie digitali per l'archeologia e più in generale per
                    gli studi umanistici. Il LAD contribuisce allo sviluppo e
                    promozione della cultura FLOS (
                    <em>free, libre e open source</em>) e alla pubblicazione ad
                    accesso aperto di dati e risultati della ricerca.
                  </p>
                </section>

                <section id="chi-siamo">
                  <Team />
                </section>

                <section id="cosa-facciamo">
                  <h2 className="border-bottom">Cosa facciamo</h2>
                  <p>
                    Il LAD sperimenta l'applicazione delle tecnologie alla
                    ricerca archeologica. Negli ultimi decenni Internet e il suo
                    più famoso servizio, il Web, hanno letteralmente invaso le
                    nostre vite, diventando strumenti di comunicazione sempre
                    più totalizzanti, un'esperienza che si è vista esasperare
                    durante i lunghi periodi di isolamento sociale dovuto alla
                    pandemia. Da vari anni, anche la ricerca archeologica ha
                    sperimentato i canali comunicativi offerti dalla Rete,
                    all'inizio esclusivamente per raccontarsi e allargare il
                    proprio pubblico e, successivamente, anche per potenziare la
                    propria ricerca. Banche dati online, webGIS, cloud computing
                    e ora anche intelligenza artificiale sono solo alcune delle
                    parole chiave che stanno diventando sempre più familiari
                    anche per le ricerche “tradizionali”.
                  </p>
                  <p>
                    Il LAD è rivolto all'esplorazione di queste potenzialità, a
                    creare ponti e facilitare l'interscambio tra la ricerca
                    archeologia e il mondo dell'Information and Communication
                    Technology (ICT). Il LAD quindi cerca di studiare, indagare,
                    capire, esplorare, governare ed anticipare quello che sembra
                    ormai essere il panorama futuro della nostra ricerca.
                  </p>
                  <p>
                    Infine, il LAD sposa una visione etica delle applicazioni
                    tecnologiche, ponendo l'accento sulla trasparenza dei
                    processi, la condivisione, la riproducibilità e la reciproca
                    collaborazione. Per questo motivo pone il focus principale
                    sulle tecnologie open source e sul software libero. Tutti i
                    nostri progetti sono distribuiti con licenze aperte e
                    pubblicati in repository ad accesso aperto!
                  </p>

                  <section>
                    <h2 className="border-bottom">Metodologie e strumenti</h2>
                    <p>
                      Il LAD ha maturato una lunga esperienza nell'ideazione,
                      creazione e implementazioni di
                      <strong> Sistemi Informativi Archeologici </strong>
                      sperimentando e consolidando strumenti relativi alla
                      gestione di banche dati relazionali, piattaforme
                      <strong> GIS</strong>, <strong> WebGIS </strong> e
                      strumenti innovativi per la gestione e pubblicazione
                      digitale dei dati archeologici attraverso tecnologie Web.
                    </p>
                    <p>
                      Inoltre, il LAD ha maturato nel tempo molta esperienza nel
                      rilievo archeologico tradizionale e strumentale, diretto e
                      indiretto. <em>Total station</em> e droni per il rilievo
                      fotogrammetrico fanno parte del nostro strumentario di
                      ricerca sul campo.
                    </p>
                    <p>
                      Ecco una lista non ragionata e in ordine alfabetico di
                      strumenti, linguaggi, standard, software, ecc. con i quali
                      ci troviamo estremamente a nostro agio e che usiamo
                      quotidianemente:
                    </p>
                    <p className="bg-light p-3">
                      {[
                        "QGIS",
                        "GRASS",
                        "AutoCAD",
                        "ArcGIS",

                        "PostgreSQL",
                        "MySQL",
                        "SQLite",
                        "BraDypUS",

                        "HTML",
                        "CSS",
                        "PHP",
                        "JavaScript",
                        "React",
                        "Gatsby",
                        "Jekyll",

                        "WebMapping",
                        "GeoNode",
                        "WebTiles",
                        "Vector Tiles",
                        "Leaflet",
                        "MapLibre",
                        "WebGIS",
                        "Cartografia Storica Digitale",

                        "Fotogrammetria",
                        "Agisoft Metashape",

                        "Droni",
                        "Stazione Totale",
                        "Laser Scanner",
                        "GPS differenziale",

                        "GARR Cloud",
                        "Web Server",
                        "Linux",
                        "Debian",
                        "Git",
                        "Bash",

                        "E-publishing",
                        "Adobe Illustrator",
                        "Inkscape",
                        "Adobe Indesign",
                        "Adobe Photoshop",
                        "Gimp",
                        "Imagemagick",
                      ]
                        .sort()
                        .join(", ")}
                      .
                    </p>
                  </section>

                  <h2 className="border-bottom">
                    Quadro istituzionale e collaborazioni
                  </h2>
                  <p>
                    Il LAD è un laboratorio stabile ufficiale del{" "}
                    <a
                      href="https://saras.uniroma1.it/"
                      title="Dipartimento SARAS"
                    >
                      Dipartimento SARAS
                    </a>{" "}
                    della{" "}
                    <a
                      href="https://www.uniroma1.it/"
                      title="Sapienza Università di Roma"
                    >
                      Sapienza Università di Roma
                    </a>
                    .
                  </p>
                  <p>
                    Dal 2022 il LAD ha attivato una convenzione di ricerca
                    scientifica con il{" "}
                    <a href="https://www.garr.it/" title="Consortium GARR">
                      Consortium GARR
                    </a>{" "}
                    per la fornitura di servizi istituzionali relativi alla{" "}
                    <a
                      href="https://www.garr.it/it/infrastrutture/infrastruttura-cloud/infrastruttura-cloud"
                      title="piattaforma Cloud GARR"
                    >
                      piattaforma Cloud GARR
                    </a>
                    , con <em>data center</em> localizzati in Italia.
                  </p>
                </section>
              </Container>
            </Col>

            {/* Ultimi articoli */}
            <Col sm={4}>
              <Container className="mb-3">
                <h2 className="border-bottom text-center">In evidenza</h2>
                {data.highlight.nodes.map((node, i) => (
                  <BlogPreview
                    key={i}
                    title={node.frontmatter.title}
                    readMore={node.fields.slug}
                    img={node.frontmatter.img}
                  />
                ))}
              </Container>

              
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  );
};

//style
const Wrapper = styled.section`
  .col-intro a {
    color: #1963f7;
  }
  col-intro. a:hover {
    text-decoration: none !important;
    color: rgba(21, 71, 254, 0.7);
  }
  .container {
    padding-top: 2rem;
  }
  h1,
  h2 {
    color: rgba(0, 45, 137, 0.9);
    font-weight: 200 !important;
  }
`;

//graphQL
export const query = graphql`
{
  site {
    siteMetadata {
      siteUrl
    }
  }
  highlight: allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {inhome: {eq: true}}}
  ) {
    nodes {
      frontmatter {
        autore
        date(formatString: "DD MMMM YYYY", locale: "it-IT")
        title
        sommario
        img {
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              quality: 80
              formats: [AUTO, AVIF, WEBP]
              width: 400
            )
          }
        }
      }
      fields {
        slug
      }
    }
  }
}
`;

export default Index;
