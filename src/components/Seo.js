//import
import React from "react";

import { Helmet } from "react-helmet";

const Seo = (props) => {

  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="canonical" href={props.url} />

      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      {props.img && <meta property="og:image" content={props.img} />}
    
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:url" content={props.url} />
      {props.img && <meta property="twitter:image" content={props.img} />}

      {props.children}
    </Helmet>
  );
};

export default Seo;
