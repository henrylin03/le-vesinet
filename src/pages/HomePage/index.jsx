import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import ProductsCarousel from "./ProductsCarousel";
import styles from "./homePage.module.css";

const HomePage = () => (
  <>
    <HeroSection />

    <section className={styles.grid}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>A superlative range</h2>

        <p className={styles.paragraphText}>
          Introducing our moisturisers - a key component to your skin regimen
          that boasts key potent ingredients to sustain hydration, catered to
          all skin types.
        </p>

        <Link to="/products" className={styles.link}>
          Shop now
        </Link>
      </div>

      <img
        src="images/moisturisersNextToClayBowl.webp"
        alt="Le Vesinet hand moisturisers next to a clay bowl"
        className={styles.image}
      />
    </section>

    <section className={styles.ourProductsSection}>
      <div className={styles.top}>
        <h2 className={styles.heading}>Our Products</h2>
        <Link
          to="/products"
          aria-label="See all products"
          className={styles.viewAllLink}
        >
          View all
        </Link>
      </div>

      <ProductsCarousel />
    </section>
  </>
);

export default HomePage;
