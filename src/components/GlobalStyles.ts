import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* 
-Fixes and general styling- 
*/
  body {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;line-height: 1.86;
    transition: all 0.5s ease-in-out;
    overflow-x:hidden;
  }

  #root{
    overflow-x: hidden;
  }

  button{
    background-color: transparent;
    border: none;
    color: inherit;
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
  

  h3{
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;
