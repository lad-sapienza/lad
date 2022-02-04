//import
import React from "react";
import styled from "styled-components";

//markup
const Title = (props) => {
  const title = props.title;
  const align = props.align === "right" ? "right" : "left";

  return (
    <Wrapper>
        <div className={`title ${align}`}>
          <h3>{title}</h3>
        </div>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  h3 {
    font-family: "Cormorant Garamond", serif !important;
    font-size: 2.5rem !important;
    font-weight: 900;
    border-bottom: 1px solid;
  }
  .title.right {
    text-align: right;
  }
  .title.left {
    text-align: left;
  }
`;

export default Title;
