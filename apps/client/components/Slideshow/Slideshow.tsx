import React, {useState, useEffect, FC} from "react";
import {
  SlideshowImage,
  SlideshowText,
  MuiButton,
  SliderImage
} from '../../styled/slideshow.styled';
import {Typography} from "@material-ui/core";
import {motion} from "framer-motion";
import {useRouter} from "next/router";

interface Props {
  slides: Array<Slide>;
  autoplay?: boolean;
  delay?: number;
  onClick?: () => void;
}

interface Slide {
  title: string;
  description: string;
  image: string;
  button: {
    text: string;
    link?: string;
  };
  position: string
}

const Slideshow: FC<Props> = ({
                                slides,
                                autoplay,
                                delay,
                                onClick
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
    animate: {opacity: 0.7},
  };

  const textVariants = {
    initial: {opacity: 0, y: 0},
    animate: {opacity: 1, y: 0},
  };

  return (
    <div>
      <motion.div
        key={currentSlide?.image}
        variants={imageVariants}
        animate="animate"
        transition={{duration: 2}}
      >
        <SlideshowImage>
          <SliderImage property={currentSlide?.image} className={currentSlide?.position}
          />
        </SlideshowImage>
      </motion.div>
      <motion.div
        key={currentSlide?.title}
        variants={textVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration: 1, delay: 0.6}}
      >
        <SlideshowText>
          <Typography variant="h2">
            {currentSlide?.title}
          </Typography>
          <Typography variant="h4">
            {currentSlide?.description}
          </Typography>
          <MuiButton variant="contained" color="primary"
                     onClick={currentSlide?.button[0].link ? () => router.push(currentSlide?.button[0].link) : onClick

                     }>
            {currentSlide.button[0].text}
          </MuiButton>
        </SlideshowText>
      </motion.div>
    </div>
  );
};

export default Slideshow;
