import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import PropTypes from "prop-types";
import styles from "./imagesCarousel.module.css";

const ImagesCarousel = ({ imagePaths }) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  const slides = imagePaths.map((imagePath) => (
    <Carousel.Slide key={imagePath}>
      <figure>
        <img src={imagePath} className={styles.image} />
      </figure>
    </Carousel.Slide>
  ));

  return (
    <article className={styles.carouselContainer}>
      <Carousel
        withIndicators
        loop
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
