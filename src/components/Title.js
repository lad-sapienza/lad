//import
import React from "react";
import styled from "styled-components";

//markup
const Title = (props) => {
  const title = props.title;
  const align = props.align === "right" ? "right" : "left";
  const CustomTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(props.tag) ? props.tag : 'h2';

  return (
    <Wrapper>
        <div className={`title ${align}`}>
          <CustomTag>{title}</CustomTag>
        </div>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  h3 {
    font-family: "Cormorant Garamond", serif !important;
  }
  h2 {
    font-size: 2.5rem !important;
    font-weight: 900;
    border-bottom: 1px solid;
  }
  h1.title.right,
  h2.title.right,
  h3.title.right,
  h4.title.right,
  h5.title.right,
  h6.title.right {
    text-align: right;
  }
  h1.title.left,
  h2.title.left,
  h3.title.left,
  h4.title.left,
  h5.title.left,
  h6.title.left {
    text-align: left;
  }
`;

export default Title;
