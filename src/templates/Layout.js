//Gatsby
import React from "react";
import { withPrefix } from "gatsby";

import "./Layout.scss";

//Components
import Seo from "../components/Seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


//markup
const Layout = ({ children }) => {

  return (
    <>
      <Seo
        title="LAD: Laboratorio di Archeologia Digitale alla Sapienza"
        description="LAD Laboratorio di Archeologia Digitale alla Sapienza  promuove la ricerca, la sperimentazione e la didattica delle tecnologie digitali FLOS per l'archeologia e più in generale per gli studi archeologici e umanistici."
        url="https://lad.saras.uniroma1.it"
        image={ withPrefix(`static/logos/lad-blue.png`) }
      >
        <link rel="shortcut icon" href={ withPrefix("/favicon/favicon.ico")} />
        <link rel="icon" type="image/x-icon" href={ withPrefix(`/favicon/favicon.ico`) } />
        <link rel="icon" type="image/png" sizes="16x16" href={ withPrefix(`/favicon/favicon-16x16.png`) } />
        <link rel="icon" type="image/png" sizes="32x32" href={ withPrefix(`/favicon/favicon-32x32.png`) } />
        <link rel="apple-touch-icon" type="image/png" sizes="32x32" href={ withPrefix(`/favicon/apple-touch-icon.png`) } />
        
      </Seo>
       
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;