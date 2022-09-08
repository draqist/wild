import { createGlobalStyle } from "styled-components";
import TungstenBold from "./Tungsten-Bold.woff";
import TungstenBold2 from "./Tungsten-Bold.woff2";
import TungstenSemi from "./Tungsten-Semibold.woff";
import TungstenSemi2 from "./Tungsten-Semibold.woff2";

export const GlobalFonts = createGlobalStyle`
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
`;
