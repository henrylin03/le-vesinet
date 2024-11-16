import { Carousel } from "@mantine/carousel";
import productsData from "../../../data/index.json";
import styles from "./productsCarousel.module.css";

const ProductsCarousel = () => {
  const slides = productsData.products.map((product) => (
    <Carousel.Slide className={styles.slide}>
      <img
        src={`${product.imageFolderPath}/preview.webp`}
        className={styles.previewImage}
      />
      <p className={styles.productName}>{product.name}</p>
      <p className={styles.price}>${product.priceAUD} AUD</p>
    </Carousel.Slide>
  ));

  return (
    <article>
      <Carousel slideSize={0} align="start" height="100%" slideGap="lg" loop>
        {slides}
      </Carousel>
    </article>
  );
};

export default ProductsCarousel;
