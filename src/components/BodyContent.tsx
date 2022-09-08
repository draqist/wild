import { motion } from "framer-motion";
import { ImageContainer, MainImage, OutlineTextContainer } from "../styles/imageStyles/ImageStyles";
import { Wrapper } from "../styles/Wrapper";
import { carouseldata } from "../utils/data";
import { Carousel } from "../utils/types";

export const BodyContent = ({ first_line, second_line, img_2x, i, id, img }: Carousel) => {
  return (
    <Wrapper img={img_2x} id={i.toString()}>
      <ImageContainer>
        <MainImage
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.65, ease: "easeInOut" },
            scale: 1,
          }}
        >
          <img src={img} alt="woman in black" />
          <h1>
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
        <OutlineTextContainer
          as={motion.div}
          initial={{ opacity: 0, y: "-50%", x: "-50%", scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: "-50%",
            x: "-50%",
            transition: { duration: 1.2, ease: "easeInOut" },
            scale: 1,
          }}
        >
          <h1>
            {first_line} <br />
            {second_line}
          </h1>
        </OutlineTextContainer>
      </ImageContainer>
    </Wrapper>
  );
};
