//import
import React from "react";
import { GatsbySeo } from "gatsby-plugin-next-seo";

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
    </>
  );
};

export default Seo;
