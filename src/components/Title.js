//import
import React from "react";
import styled from "styled-components";

//markup
const Title = (props) => {
  const text = props.title ? props.title : props.children;
  const align = ['right', 'left', 'center'].includes(props.align) ? props.align : "left";
  const CustomTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(props.tag) ? props.tag : 'h2';

  return (
    <Wrapper>
        <div className={`title ${align}`}>
          <CustomTag>{text}</CustomTag>
        </div>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.section`
  .title{
    h1, h2, h3, h4, h5, h6{
      font-family: "Cormorant Garamond", serif !important;
      font-weight: 900;
      border-bottom: 1px solid;
    }

    h2 {
      font-size: 2.5rem !important;
    }

    &.right{
      h1, h2, h3, h4, h5, h6{
        text-align: right;
      }
    }
    &.left{
      h1, h2, h3, h4, h5, h6{
        text-align: left;
      }
    }
    &.center{
      h1, h2, h3, h4, h5, h6{
        text-align: center;
      }
    }
  }
`;

export default Title;
