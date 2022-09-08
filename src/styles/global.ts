import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
      font-family: "Tungsten";
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
    h3 {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 2px;
    position: absolute;
    top: 16px;
    left: 16px;
    color: white;
    z-index: 4;
  }
`;
