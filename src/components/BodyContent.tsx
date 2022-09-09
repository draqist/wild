import { motion } from "framer-motion";
import { ImageContainer, MainImage, OutlineTextContainer } from "../styles/imageStyles/ImageStyles";
import { Wrapper } from "../styles/Wrapper";
import { mainimageanime, outlineanimation } from "../utils/animations";
import { carouseldata } from "../utils/data";
import { Carousel } from "../utils/types";

export const BodyContent = ({ first_line, second_line, img_2x, i, alt, id, img }: Carousel) => {
  return (
    <Wrapper img={img_2x} id={i.toString()}>
      <ImageContainer>
        <MainImage as={motion.div} variants={mainimageanime} initial="initial" whileInView="animate">
          <img src={img} alt={alt} />
          <h1 aria-hidden="true">
            {first_line} <br />
            {second_line}
          </h1>
          <div className="indicator">
            <p>
              {" "}
              {i + 1} of {carouseldata.length}{" "}
            </p>
            <p>kk</p>
          </div>
        </MainImage>
        <OutlineTextContainer as={motion.div} variants={outlineanimation} initial="initial" whileInView="animate">
          <h1>
            {first_line} <br />
            {second_line}
          </h1>
        </OutlineTextContainer>
      </ImageContainer>
    </Wrapper>
  );
};
