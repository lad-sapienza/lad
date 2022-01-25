//React
import React from "react";

//Gatsby
import styled from "styled-components";

//Components
import { Container } from "react-bootstrap";
import {GiFeather} from "react-icons/gi"

const PostLayout = (props) => {
  return (
    <Wrapper>
      <Container>
        <div className="post-info">
          <h1>{props.title}</h1>
          <h2>
            <GiFeather className="icon" />
            {props.autore}
          </h2>
        </div>
      </Container>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  h1 {
    font-family: "Cormorant Garamond", serif;
    font-weight: 800;
    font-size: 2.5rem;
    text-align: center;
  }
  h2 {
    font-family: "Cormorant Garamond", serif;
    font-weight: 800;
    font-size: 1.5rem ;
    text-align: center;
  }
  .container {
    margin: 5rem 0 3rem 0;
  }
  .icon {
    margin-right: 1rem;
  }
`;

export default PostLayout;
