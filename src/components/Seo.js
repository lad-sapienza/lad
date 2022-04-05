//import
import React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { Helmet } from "react-helmet";

const Seo = (props) => {
  return (
    <>
      <GatsbySeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: props.image,
              alt: props.title,
            },
          ],
        }}
      />
      <Helmet>
        {props.children}
        {props.url.indexOf("/blog/") > -1 && (
          <script src="https://hypothes.is/embed.js" async></script>
        )}
      </Helmet>
    </>
  );
};

export default Seo;
