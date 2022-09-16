import { createGlobalStyle } from "styled-components";
import TungstenBold from "../fonts/Tungsten-Bold.woff";
import TungstenBold2 from "../fonts/Tungsten-Bold.woff2";
import TungstenSemi from "../fonts/Tungsten-Semibold.woff";
import TungstenSemi2 from "../fonts/Tungsten-Semibold.woff2";

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
    @font-face {
        font-family: 'Tungsten';
        src: local('Tungsten Bold'), local('TungstenBold'),
        url(${TungstenBold}) format('woff'),
        url(${TungstenBold2}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family:'Tungsten';
        src: local('Tungsten Semi'), local('Tungsten Semi'),
        url(${TungstenSemi}) format('woff'),
        url(${TungstenSemi2}) format('woff2');
        font-weight: 600;
        font-style: normal;
    };
    body{
      margin: 0;
      height: 100%;
      width: 100%;
      /* scroll-behavior: smooth; */
      font-family: "Tungsten", sans-serif;
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
