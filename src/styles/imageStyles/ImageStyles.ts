import styled from "styled-components";
import { wrapperBg } from "../../utils/types";

export const ImageContainer = styled.div`
  position: relative;
  color: white;
  display: grid;
  place-items: center;
  margin-top: 80px;
  width: 100%;
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
  transition: all 2s ease-in;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
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
    gap: 24px;
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
`;
