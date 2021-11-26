//Gatsby
import React from "react";

//Components
import Header from "../components/Header";


//markup
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
