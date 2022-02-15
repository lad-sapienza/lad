//Gatsby
import React from "react";

import Seo from "../components/Seo";
import { withPrefix } from "gatsby";

import "./Layout.scss";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Favicon_32 from "../../static/favicon/favicon-32x32.png";
import Favicon_ico from "../../static/favicon/favicon-32x32.png";

import "bootstrap/dist/css/bootstrap.min.css"



//markup
const Layout = ({ children }) => {
  return (
    <> 
      <Seo
        title="LAD: Laboratorio di Archeologia Digitale alla Sapienza"
        description="LAD Laboratorio di Archeologia Digitale alla Sapienza promuove la ricerca, la sperimentazione e la didattica delle tecnologie digitali FLOS per l'archeologia e più in generale per gli studi umanistici."
        url="https://lad.saras.uniroma1.it"
        image={ withPrefix(`static/logos/lad-blue.png`) }>
       
        <link rel="shortcut icon" type="image/x-icon" href={Favicon_32} />
        <link rel="shortcut icon" type="image/x-icon" href={Favicon_ico} />
      </Seo>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
