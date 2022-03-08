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
      {props.image && <meta property="og:image" content={props.image} />}
    
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta property="twitter:url" content={props.url} />
      {props.image && <meta property="twitter:image" content={props.image} />}

      {props.children}
      { props.url.indexOf('/blog/') > -1 && <script src="https://hypothes.is/embed.js" async></script> }

    </Helmet>
  );
};

export default Seo;
