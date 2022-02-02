//React
import React from "react";

//Gatsby
import styled from "styled-components";

import { Container } from "react-bootstrap";

//markup
const Title = (props) => {
  const title = props.title;
  const align = props.align === "right" ? "right" : "left";

  return (
    <Wrapper>
        <div className={`title ${align}`}>
          <h2>{title}</h2>
        </div>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  h2 {
    font-family: "Cormorant Garamond", serif !important;
    font-size: 2.5rem !important;
    /* text-transform: uppercase; */
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
