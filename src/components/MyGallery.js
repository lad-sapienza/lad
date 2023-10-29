//import
import React from "react";
import Gallery from "@browniebroke/gatsby-image-gallery";

const MyGallery = (props) => {
  // const images = props.data.images.edges.map(({ node }) => node.childImageSharp);
  const images = props.images.edges.filter(e => e.node.relativePath.includes(props.page)).map(({ node }) => {
    node.childImageSharp.caption = node.name;
    node.childImageSharp.title = node.name;
    node.childImageSharp.thumbAlt = node.name;
    return node.childImageSharp
  });

  if(images.length < 1){
    return;
  }

  return <>
    <hr className="my-5" />
    <h2>Galleria di immagini</h2>
    <Gallery images={images} />
    </>;
};


export default MyGallery;
