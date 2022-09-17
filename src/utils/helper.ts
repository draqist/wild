import { Dispatch, MutableRefObject, SetStateAction } from "react";
import { carouseldata } from "./data";

const { innerWidth } = window;
const length = carouseldata.length;

export const handleNextScroll = (
  nextslide: number,
  prevslide: number,
  setNextSlider: Dispatch<SetStateAction<number>>,
  setPrevSlider: Dispatch<SetStateAction<number>>,
  ref: MutableRefObject<null>
) => {
  if (nextslide === 0 && prevslide === length - 2) {
    // @ts-ignore
    ref.current.children[2]?.scrollIntoView({
      block: "start",
    });
    setNextSlider(nextslide === length - 1 ? 0 : nextslide + 1);
    setPrevSlider(nextslide === 0 ? 4 : nextslide - 1);
  } else {
    setNextSlider(nextslide === length - 1 ? 0 : nextslide + 1);
    setPrevSlider(nextslide === 0 ? 4 : nextslide - 1);
    // @ts-ignore
    ref.current?.scrollBy({
      left: innerWidth,
    });
  }
};
export const handlePrevScroll = (
  nextslide: number,
  prevslide: number,
  setNextSlider: Dispatch<SetStateAction<number>>,
  setPrevSlider: Dispatch<SetStateAction<number>>,
  ref: MutableRefObject<null>
) => {
  if (nextslide === 1 && prevslide === 4) {
    // @ts-ignore
    ref.current.children[6]?.scrollIntoView({
      block: "start",
    });
    setPrevSlider(prevslide === 4 ? prevslide - 1 : prevslide - 1);
    setNextSlider(prevslide === length - 1 ? 0 : prevslide + 1);
  } else {
    setPrevSlider(prevslide === 0 ? 4 : prevslide - 1);
    setNextSlider(prevslide === length - 1 ? 0 : prevslide + 1);
    // @ts-ignore
    ref?.current.scrollBy({
      left: -innerWidth,
    });
  }
};
