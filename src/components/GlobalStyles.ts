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
  

  h3{
    margin-block-start: 0;
    margin-block-end: 0;
  }

  p{
    margin-block-start: 0;
    margin-block-end: 0;
    }
`;
