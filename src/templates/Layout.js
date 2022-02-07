//Gatsby
import React from "react";

import { Helmet } from "react-helmet";

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
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
