import { Dispatch, SetStateAction } from "react";
import { carouseldata } from "./data";

const { innerWidth } = window;
const length = carouseldata.length;
export const handlePrevScroll = (
  nextslide: number,
  prevslide: number,
  setNextSlider: Dispatch<SetStateAction<number>>,
  setPrevSlider: Dispatch<SetStateAction<number>>
) => {
  const flowers = document.getElementById("4");
  const element = document.getElementById("wrapper");
  if (nextslide === 1 && prevslide === 4) {
    flowers?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setPrevSlider(prevslide === 4 ? prevslide - 1 : prevslide - 1);
    setNextSlider(prevslide === length - 1 ? 0 : prevslide + 1);
  } else {
    setPrevSlider(prevslide === 0 ? 4 : prevslide - 1);
    setNextSlider(prevslide === length - 1 ? 0 : prevslide + 1);
    element?.scrollBy({
      left: -innerWidth,
      behavior: "smooth",
    });
  }
};
export const handleNextScroll = (
  nextslide: number,
  prevslide: number,
  setNextSlider: Dispatch<SetStateAction<number>>,
  setPrevSlider: Dispatch<SetStateAction<number>>
) => {
  const element = document.getElementById("wrapper");
  const flowers = document.getElementById("0");
  if (nextslide === 0 && prevslide === 3) {
    flowers?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setNextSlider(nextslide === length - 1 ? 0 : nextslide + 1);
    setPrevSlider(nextslide === 0 ? 4 : nextslide - 1);
  } else {
    setNextSlider(nextslide === length - 1 ? 0 : nextslide + 1);
    setPrevSlider(nextslide === 0 ? 4 : nextslide - 1);
    element?.scrollBy({
      left: innerWidth,
      behavior: "smooth",
    });
  }
};
