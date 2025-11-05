import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ArticleImage = ({ imageData, caption, altText }) => {
   return imageData &&
    imageData.childImageSharp &&
    imageData.childImageSharp.gatsbyImageData && (
      <ImageWrapper>
        <figure>
          <GatsbyImage
            image={imageData.childImageSharp.gatsbyImageData}
            key={imageData.childImageSharp.gatsbyImageData.src}
            alt={caption ? caption : altText}
          />
        </figure>
        {caption && <p className="caption">{caption}</p>}
      </ImageWrapper>
    )
}

const ImageWrapper = styled.section`
  margin-top: 5rem;
  margin-bottom: 5rem;

  p.caption {
    font-family: "Lora", serif !important;
    font-weight: 300 !important;
    font-size: 1rem;
    text-align: center;
  }
`

export default ArticleImage
