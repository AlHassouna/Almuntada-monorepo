import React, {useState, useEffect, FC} from "react";
import {
  SlideshowContainer,
  SlideshowImage,
  SlideshowText,
  MuiButton,
  SliderImage
} from '../../styled/slideshow.styled';
import {Typography} from "@material-ui/core";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {IPimages} from "../../API/pimages/types";

interface Props {
  slides: Array<IPimages>;
  autoplay?: boolean;
  delay?: number;
}


const Slideshow: FC<Props> = ({
                                slides,
                                autoplay,
                                delay,

                              }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(() => {
        const index = (currentIndex + 1) % slides.length;
        setCurrentIndex(index);
      }, delay);

      return () => clearInterval(intervalId);
    }
  }, [currentIndex, autoplay, delay, slides.length]);

  const currentSlide = slides[currentIndex];

  const imageVariants = {
    initial: {opacity: 0},
    animate: {opacity: 0.8},
  };

  const textVariants = {
    initial: {opacity: 0, y: 0},
    animate: {opacity: 1, y: 0},
  };

  return (
    <SlideshowContainer>
      <motion.div
        key={currentSlide.imgUrl}
        variants={imageVariants}
        animate="animate"
        transition={{duration: 1}}
      >
        <SlideshowImage>
          <SliderImage property={currentSlide.imgUrl}
          />
        </SlideshowImage>


      </motion.div>
      <motion.div
        key={currentSlide.title}
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration: 1, delay: 0.2}}
      >
        <SlideshowText>
          <Typography variant="h2">
            {currentSlide.title}
          </Typography>
          {/*<Typography variant="h4">*/}
          {/*  {currentSlide.description}*/}
          {/*</Typography>*/}
          {/*<MuiButton variant="contained" color="primary"*/}
          {/*           onClick={currentSlide.button.link ? () => router.push(currentSlide.button.link) : onClick*/}

          {/*           }>*/}
          {/*  {currentSlide.button.text}*/}
          {/*</MuiButton>*/}
        </SlideshowText>
      </motion.div>
    </SlideshowContainer>
  );
};

export default Slideshow;




