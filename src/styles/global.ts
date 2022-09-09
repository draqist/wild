import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        scrollbar-width: 0;
      }
      #root{
        margin:0 auto;
        height: 100%;
        scrollbar-width: 0;
    }
    body{
      margin: 0;
      height: 100%;
      width: 100%;
      scroll-behavior: smooth;
      font-family: "Tungsten";
      cursor: none;
    }
    h1{
      margin: 0;
      text-align: center;
      font-size: 220px;
      font-weight:400 ;
      line-height: 186px;
      text-transform: uppercase;
      letter-spacing: 6px;
      @media (min-width: 1024px) and (max-width: 1260px) {
        font-size: 210px;
      }
      @media (max-width: 768px){
        font-size: 140px;
        line-height: 120px;
      }
      @media (min-width: 348px) and (max-width: 765px){
        font-size: 100px;
        line-height: 90px;
      }
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
  ::-webkit-scrollbar {
    display: none;
  }
`;
