import styled from "styled-components";
import { wrapperBg } from "../../utils/types";

export const ImageContainer = styled.div`
  position: relative;
  color: white;
  display: grid;
  place-items: center;
  margin-top: 80px;
  width: 100%;
  @media (min-width: 1020px) and (max-width: 1260px) {
    margin-top: 380px;
  }
  @media (max-width: 768px) {
    margin-top: 270px;
  }
  @media (max-width: 412px) {
    margin-top: 200px;
  }
`;

export const OutlineTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #ffffff;
    background-clip: text;
  }
  width: 100%;
`;
export const MainImage = styled.div`
  width: 512px;
  height: 680px;
  overflow: hidden;
  position: relative;
  border: 1px solid black;
  border-radius: 20px;
  transition: all 0.75s ease-in-out;
  @media (min-width: 1020px) and (max-width: 1260px) {
    width: 490px;
    height: 660px;
  }
  @media (max-width: 768px) {
    width: 360px;
    height: 510px;
  }
  @media (max-width: 412px) {
    width: 300px;
    height: 410px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transition: all 0.5s ease-out;
    :hover {
      transform: scale(1.1);
      transition: all 0.5s ease-in-out;
      filter: blur(1px);
    }
  }
  h1 {
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }
  .indicator {
    display: flex;
    align-items: center;
    /* gap: 24px; */
    position: relative;
    top: -170px;
    z-index: 4;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    p {
      color: white;
      font-size: 14px;
      font-weight: 300;
    }
  }
`;
export const NextImage = styled.div<wrapperBg>`
  width: 248px;
  height: 330px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: purple;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 4;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  :hover {
    filter: blur(1.1px);
    transition: all 0.2s ease-in;
  }
  @media (min-width: 1024px) and (max-width: 1260px) {
    width: 180px;
    height: 230px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 180px;
    height: 210px;
  }
  @media (max-width: 412px) {
    width: 100px;
    height: 140px;
    background-size: cover;
  }
`;
export const PrevImage = styled.div<wrapperBg>`
  width: 248px;
  height: 330px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: blue;
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 4;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
  :hover {
    filter: blur(1.1px);
    transition: all 0.2s ease-in;
  }
  @media (min-width: 1024px) and (max-width: 1260px) {
    width: 180px;
    height: 230px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 180px;
    height: 210px;
  }
  @media (max-width: 412px) {
    width: 100px;
    height: 140px;
    background-size: cover;
  }
`;
