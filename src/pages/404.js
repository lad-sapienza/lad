//import
import React from "react";
import Layout from "../templates/Layout";
import { Container} from "react-bootstrap";
import Favicon from "../components/Favicon";

const Errore404 = () => {
  return (
    <Layout>
      <Container>
        <h1>Errore: risorsa non trovata</h1>
          <p>Siamo spiacenti, ma non è stato possibile trovare il contenuto richiesto.</p>
          <p>Si prega di segnalare questo errore all'indirizzo <a href="julian.bogdani@uniroma1.it" title="Segnalateci un errore">julian.bogdani@uniroma1.it</a> e cercheremo di risolverlo il prima possibile.</p>
      </Container>
    </Layout>
  );
};

export default Errore404;

export const Head = () => <Favicon />

