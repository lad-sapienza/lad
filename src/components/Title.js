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
  .title {
  }
  .title.right {
    text-align: right;
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 2rem;
    border-top: solid;
    border-bottom: solid;
    border-width: 0.1rem;
    border-color: rgb(145, 145, 145);
    text-transform: uppercase;
  }
  .title.left {
    text-align: left;
    font-family: "Cormorant Garamond", serif !important;
    font-weight: 800;
    font-size: 2rem;
    border-top: solid;
    border-bottom: solid;
    border-width: 0.1rem;
    border-color: rgb(145, 145, 145);
    text-transform: uppercase;
  }
`;

export default Title;
