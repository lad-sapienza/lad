//Gatsby
import React from "react";
import "./Layout.scss";

//Components
import Header from "../components/Header";
import Footer from "../components/Footer";


//markup
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
