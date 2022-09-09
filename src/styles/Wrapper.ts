import styled from "styled-components";
import { wrapperBg } from "../utils/types";

export const Wrapper = styled.div<wrapperBg>`
  width: 100%;
  height: 100vh;
  background-size: cover;
  font-family: "Tungsten", sans-serif;
  color: white;
  background-color: black;
  background-image: url(${(props) => props.img});
  flex-shrink: 0;
  scroll-snap-align: center;
`;

export const BodyWrapper = styled.div`
  display: flex;
  overflow-y: hidden;
  padding: 0;
  height: 100vh;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;

  #progress {
    position: fixed;
    transform: rotate(-90deg);
    z-index: 6;
    pointer-events: none;
    transform: translate3d(0, 0, 0);
  }
  #progress .indicator {
    stroke: white;
  }
  circle {
    stroke-dashoffset: 0;
    stroke-width: 1.25%;
    fill: none;
  }
  .bg {
    stroke: white;
    opacity: 0.1;
  }
  .dot {
    fill: white;
  }
`;

export const ButtonDiv = styled.div`
  width: 109px;
  position: absolute;
  right: 155px;
  height: 100px;
  bottom: 93px;
  letter-spacing: 0.08em;
  font-family: "Helvetica";
  color: white;
  font-weight: 400;
  @media (min-width: 1024px) and (max-width: 1260px) {
    right: 93px;
    bottom: 60px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    right: 60px;
    bottom: 60px;
  }
  @media (max-width: 412px) {
    right: 40px;
    bottom: 50px;
  }
  h3 {
    font-size: 10px;
    margin: 0;
    position: relative;
    left: 0;
    line-height: 12px;
    top: 0;
  }
  h4 {
    text-align: right;
    margin: 16px 0;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  text-align: center;
  border-radius: 24px;
  background-color: white;
  color: black;
  text-transform: uppercase;
  outline: none;
  border: none;
  cursor: none;
  font-size: 10px;
  :hover {
    border-radius: 6px;
    color: #fff;
    background-color: black;
    transition: all 0.2s ease-in;
  }
`;

export const Splash = styled.div`
  position: absolute;
  z-index: 30;
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  text-transform: uppercase;
  div {
    height: 180px;
    overflow: hidden;
  }
  h2 {
    font-size: 220px;
    letter-spacing: 8px;
    color: white;
    line-height: 220px;
  }
`;
