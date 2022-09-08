import styled from "styled-components";
import img from "../images/image01@2x.jpg";

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  height: 100vh;
  background-size: cover;
  font-family: "Tungsten", sans-serif;
  color: white;
  background-color: black;
  background-image: url(${img});
  ::after {
    filter: blur(200px);
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
  }
`;
