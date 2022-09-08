import { useState } from "react";
import {
  ImageContainer,
  MainImage,
  NextImage,
  OutlineTextContainer,
  PrevImage,
} from "./styles/imageStyles/ImageStyles";
import { Wrapper } from "./styles/Wrapper";
import { carouseldata } from "./utils/data";

function App() {
  const [slider, setSlider] = useState<number>(0);

  function scroll(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function handleScroll(dir: string) {
    if (dir === "next" && slider <= carouseldata.length && slider !== carouseldata.length - 1) {
      setSlider(slider + 1);
    } else if (dir === "next" && slider === carouseldata.length - 1) {
      setSlider(0);
    } else if (dir === "prev" && slider <= carouseldata.length && slider !== 0) {
      setSlider(slider - 1);
    } else if (dir === "prev" && slider === 0) {
      setSlider(carouseldata.length - 1);
    } else if (dir === "prev" && slider <= carouseldata.length - 1 && slider === 0) {
      setSlider(slider - 1);
    }
  }
  return (
    <Wrapper>
      <h3>xyz photography</h3>
      <NextImage onClick={() => handleScroll("next")} />
      <ImageContainer>
        <MainImage>
          <img src={carouseldata[slider].img} alt="woman in black" />
          <h1>
            {carouseldata[slider].first_line} <br />
            {carouseldata[slider].second_line}
          </h1>
          <div className="indicator">
            <p> 1 of shit </p>
            <p>kk</p>
          </div>
        </MainImage>
        <OutlineTextContainer>
          <h1>
            {carouseldata[slider].first_line} <br />
            {carouseldata[slider].second_line}
          </h1>
        </OutlineTextContainer>
      </ImageContainer>
      <PrevImage onClick={() => handleScroll("prev")} />
    </Wrapper>
  );
}

export default App;
