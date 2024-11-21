import { Carousel } from "@mantine/carousel";
import ProductPreview from "../../components/ProductPreview";
import productsData from "../../data/index.json";

const ProductsCarousel = () => {
  const slides = productsData.products.map((product) => (
    <Carousel.Slide>
      <ProductPreview productObject={product} key={product.id} />
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
