//Gatsby
import React from "react";
import { withPrefix } from "gatsby";

import "./Layout.scss";

//Components
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"



//markup
const Layout = ({ children }) => {

  const meta = {
    "baseURL" : `https://lad.saras.uniroma1.it`,
    "title"   : `LAD: Laboratorio di Archeologia Digitale alla Sapienza`,
    "description": `LAD Laboratorio di Archeologia Digitale alla Sapienza  promuove la ricerca, la sperimentazione e la didattica delle tecnologie digitali FLOS per l'archeologia e più in generale per gli studi archeologici e umanistici.`
  };


  return (
    <>
      <Seo
        title={ meta.title }
        description={ meta.description }
        url={ meta.baseURL }
        image={ withPrefix(`static/logos/lad-blue.png`) }
      >
        <link rel="shortcut icon" type="image/x-icon" href={ withPrefix(`static/favicon/favicon-32x32.png`) } />
      </Seo>
       
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;