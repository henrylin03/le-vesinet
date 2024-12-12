import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import PropTypes from "prop-types";
import styles from "./imagesCarousel.module.css";

const ImagesCarousel = ({ imagePaths }) => {
  const [imageIsLoading, setImageIsLoading] = useState(true);
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const slides = imagePaths.map((imagePath) => (
    <Carousel.Slide key={imagePath}>
      <Skeleton visible={imageIsLoading}>
        <img
          src={imagePath}
          className={styles.image}
          onLoad={() => setImageIsLoading(false)}
        />
      </Skeleton>
    </Carousel.Slide>
  ));

  return (
    <article className={styles.carouselContainer}>
      <Carousel
        withIndicators
        loop
        mb={imageIsLoading ? "xs" : 0}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </article>
  );
};

ImagesCarousel.propTypes = {
  imagePaths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImagesCarousel;
