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
`;
