//Gatsby
import React from "react";

import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";

import "./Layout.scss";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Favicon_32 from "../../static/favicon/favicon-32x32.png";
import Favicon_ico from "../../static/favicon/favicon-32x32.png";



//markup
const Layout = ({ children }) => {
  return (
    <> 
      <Helmet>
        <link rel="shortcut icon" type="image/x-icon" href={Favicon_32} />
        <link rel="shortcut icon" type="image/x-icon" href={Favicon_ico} />

        <title>
          LAD Laboratorio di Archeologia Digitale alla Sapienza, responsabile
          Julian Bogdani
        </title>

        <meta
          name="description"
          content="LAD Laboratorio di Archeologia Digitale alla Sapienza promuove la ricerca, la sperimentazione e la didattica delle tecnologie digitali FLOS per l'archeologia e più in generale per gli studi umanistici."
        />
        <link rel="canonical" href="https://lad.saras.uniroma1.it" />

        <meta property="og:title" content="LAD: Laboratorio di Archeologia Digitale alla Sapienza" />
        <meta property="og:description" content="LAD Laboratorio di Archeologia Digitale alla Sapienza promuove la ricerca, la sperimentazione e la didattica delle tecnologie digitali FLOS per l'archeologia e più in generale per gli studi umanistici." />
        <meta property="og:url" content="https://lad.saras.uniroma1.it" />
        <meta property="og:image" content={ withPrefix(`static/logos/lad-blue.png`) } />
       
        <meta property="twitter:title" content="LAD: Laboratorio di Archeologia Digitale alla Sapienza" />
        <meta property="twitter:description" content="LAD Laboratorio di Archeologia Digitale alla Sapienza promuove la ricerca, la sperimentazione e la didattica delle tecnologie digitali FLOS per l'archeologia e più in generale per gli studi umanistici." />
        <meta property="twitter:url" content="https://lad.saras.uniroma1.it" />
        <meta property="twitter:image" content={ withPrefix(`static/logos/lad-blue.png`) } />

      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
