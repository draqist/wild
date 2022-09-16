import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BodyContent } from "./components/BodyContent";
import { Mouse } from "./components/mouse";
import { NextImage, PrevImage } from "./styles/BodyStyles/ImageStyles";
import { Button, DetailsDiv, FlexContainer, Splash } from "./styles/Wrapper";
import { splashanimation, splashtext } from "./utils/animations";
import { carouseldata } from "./utils/data";
import { handleNextScroll, handlePrevScroll } from "./utils/helper";

export function App() {
  const [nextslide, setNextSlider] = useState<number>(1);
  const [prevslide, setPrevSlider] = useState<number>(4);
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  useEffect(() => {
    // This changes the carousel navigation based on what image is being displayed
    scrollXProgress.onChange((scrollvalue) => {
      if (scrollvalue > 0.2 && scrollvalue <= 0.25) {
        setPrevSlider(0);
        setNextSlider(2);
      } else if (scrollvalue > 0.425 && scrollvalue <= 0.5) {
        setPrevSlider(1);
        setNextSlider(3);
      } else if (scrollvalue > 0.7 && scrollvalue <= 0.75) {
        setPrevSlider(2);
        setNextSlider(4);
      } else if (scrollvalue > 0.95 && scrollvalue <= 1) {
        setPrevSlider(3);
        setNextSlider(0);
      } else if (scrollvalue === 0) {
        setNextSlider(1);
        setPrevSlider(4);
      }
    });
  });
  return (
    <>
      <FlexContainer id="wrapper" ref={ref}>
        <h3>xyz photography</h3>
        <NextImage
          img={carouseldata[nextslide].img}
          onClick={() => {
            handleNextScroll(nextslide, prevslide, setNextSlider, setPrevSlider, ref);
          }}
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
        <DetailsDiv>
          <h3> Johanna Hobel for SI </h3>
          <h4> DEc 2021 </h4>
          <Button>Have a look</Button>
        </DetailsDiv>
        <PrevImage
          img={carouseldata[prevslide].img}
          onClick={() => handlePrevScroll(nextslide, prevslide, setNextSlider, setPrevSlider, ref)}
        />
        <Mouse ref={ref} />
      </FlexContainer>
      <Splash as={motion.div} variants={splashanimation} initial="initial" animate="animate">
        <div>
          <motion.h2 variants={splashtext} initial="initial" animate="animate">
            {" "}
            XYZ photography
          </motion.h2>
        </div>
      </Splash>
    </>
  );
}
