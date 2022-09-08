import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
      }
      #root{
        margin:0 auto;
        height: 100%;
    }
    body{
      margin: 0;
      height: 100%;
      width: 100%;
      scroll-behavior: smooth;
    }
    h1{
      margin: 0;
      text-align: center;
      font-size: 220px;
      font-weight:400 ;
      line-height: 186px;
      text-transform: uppercase;
      letter-spacing: 6px;
    }
`;
export default GlobalStyles;
