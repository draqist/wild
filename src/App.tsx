import { useRef, useState } from "react";
import { BodyContent } from "./components/BodyContent";
import { Mouse } from "./components/mouse";
import { NextImage, PrevImage } from "./styles/BodyStyles/ImageStyles";
import { BodyWrapper, Button, ButtonDiv } from "./styles/Wrapper";
import { carouseldata } from "./utils/data";
import { handleNextScroll, handlePrevScroll } from "./utils/helper";

export function App() {
  const [nextslide, setNextSlider] = useState<number>(1);
  const [prevslide, setPrevSlider] = useState<number>(4);
  const ref = useRef(null);
  return (
    <BodyWrapper id="wrapper" ref={ref}>
      <Mouse ref={ref} />
      <h3>xyz photography</h3>
      <NextImage
        img={carouseldata[nextslide].img}
        onClick={() => handleNextScroll(nextslide, prevslide, setNextSlider, setPrevSlider)}
      />
      {carouseldata?.map((data, i) => (
        <BodyContent
          key={i}
          first_line={data.first_line}
          second_line={data.second_line}
          img={data.img}
          img_2x={data.img_2x}
          id={data.id}
          i={i}
          alt={data.alt}
        />
      ))}
      <ButtonDiv>
        <h3> Johanna Hobel for SI </h3>
        <h4> DEc 2021 </h4>
        <Button>Have a look</Button>
      </ButtonDiv>
      <PrevImage
        img={carouseldata[prevslide].img}
        onClick={() => handlePrevScroll(nextslide, prevslide, setNextSlider, setPrevSlider)}
      />
    </BodyWrapper>
  );
}
