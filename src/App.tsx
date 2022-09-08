import { useState } from "react";
import BodyContent from "./components/BodyContent";
import { NextImage, PrevImage } from "./styles/imageStyles/ImageStyles";
import { BodyWrapper } from "./styles/Wrapper";
import { carouseldata } from "./utils/data";
import { handleNextScroll, handlePrevScroll } from "./utils/helper";

function App() {
  const [nextslide, setNextSlider] = useState<number>(1);
  const [prevslide, setPrevSlider] = useState<number>(4);

  return (
    <BodyWrapper id="wrapper">
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
      <PrevImage
        img={carouseldata[prevslide].img}
        onClick={() => handlePrevScroll(nextslide, prevslide, setNextSlider, setPrevSlider)}
      />
    </BodyWrapper>
  );
}

export default App;
