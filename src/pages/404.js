//import
import React from "react";
import Layout from "../templates/Layout";
import { Container} from "react-bootstrap";

const Errore404 = ({ data }) => {
  return (
    <Layout>
      <Container>
          <p>Siamo spiacenti, ma il contenuto richiesto non è stato trovato...</p>
      </Container>
    </Layout>
  );
};

export default Errore404;
