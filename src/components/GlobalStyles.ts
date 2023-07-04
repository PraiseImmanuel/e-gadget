import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* 
-Fixes and general styling- 
*/
  body {
    box-sizing: border-box;
    color: #333;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;line-height: 1.86;
    transition: all 0.25s ease-in-out;
    overflow-x:hidden;
  }

  #root{
    overflow-x: hidden;
  }

  button{
    background-color: transparent;
    border: none;
    color: inherit;
    cursor:pointer;
    font: inherit;
    text-transform: inherit;

    &:focus{
      outline:none;
    }
  }

  ul{
    margin-block-start: 0;
    margin-block-end: 0;
  }

  a{
    color:inherit;font:inherit;
    text-decoration:none;
  }
  

  h2,h3,h4{
    margin-block-start: 0;
    margin-block-end: 0;
  }

  h1{
    letter-spacing: -.025em;
  }

  h2{
    letter-spacing: -.03em;
  }

  h3{
    letter-spacing: -.01em;
  }

  p{letter-spacing: -.01em;}

  p{
    margin-block-start: 0;
    margin-block-end: 0;
    }
`;
