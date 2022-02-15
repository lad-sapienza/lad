//import
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

//markup
const BlogPreview = (props) => {
  return (
    <StyledDiv className='shadow-sm p-3 mt-4'>
      <Link to={props.readMore} title={props.title}>
        <h5>{props.title}</h5>
        <StyledP>{props.author} | {props.date}</StyledP>
        <StyledP>{ props.excerpt }</StyledP>
      </Link>
    </StyledDiv>
  );
};

//styles
const StyledDiv = styled.div`
  border-bottom: 1px solid #1963F7;
  color: #636363;
`;
const StyledP = styled.p`
  font-size: 0.9rem;
`;
export default BlogPreview
