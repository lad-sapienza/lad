//import
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


//markup
const BlogPreview = (props) => {
  const sezione = {
    title: '',
    url: ''
  };
  if (props.readMore.includes('/ricerca/')){
    sezione.title = 'Ricerca';
    sezione.url = '/ricerca/';
  } else if (props.readMore.includes('/notizie/')){
    sezione.title = 'Notizie';
    sezione.url = '/notizie/';
  } else if (props.readMore.includes('/blog/')){
    sezione.title = 'Blog';
    sezione.url = '/blog/';
  }
  console.log(props);
  return (
    <StyledDiv className={`shadow p-3 mt-4 text-center ${props.pinned ? `border border-primary` : ''}`}>
      <Link to={props.readMore} title={props.title}>
        {props.img && props.img.childImageSharp && (
          <GatsbyImage
            className="mb-3"
            image={props.img.childImageSharp.gatsbyImageData}
            alt={props.title}
          />
        )}
        
        <h5>{props.title} {props.pinned}</h5>
        { ( props.author && props.date ) ? <p className="pt-1 pb-1 mt-3 border-bottom">Di {props.author} | {props.date}</p> :  ''} 
        {props.excerpt && <p>{props.excerpt}</p> }
      </Link>
      <div className="mt-3 p-2 fs-6 bg-light text-end">
        Sezione: <Link to={sezione.url} title="Tutte ">{ sezione.title }</Link>
      </div>
    </StyledDiv>
  );
};

//styles
const StyledDiv = styled.div`
  border-bottom: 1px solid #1963f7;
  color: #636363;
  a {
    color: #212529;
  }

  p {
    font-size: 0.9rem;
  }
`;
export default BlogPreview;
