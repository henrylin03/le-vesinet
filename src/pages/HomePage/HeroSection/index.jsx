import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/hero/hero.webp";
import heroImage780w from "../../../assets/images/hero/hero-780w.webp";
import styles from "./heroSection.module.css";

const HeroSection = () => (
  <section className={styles.hero}>
    <picture className={styles.backgroundImage}>
      <source media="(min-width: 780px)" srcSet={heroImage} />
      <source media="(max-width: 779px)" srcSet={heroImage780w} />
      <img className={styles.backgroundImage} src={heroImage} />
    </picture>

    <div className={styles.inner}>
      <h2 className={styles.heroTitle}>
        Concise formulation, effortless results
      </h2>
      <p className={styles.subText}>
        We pursue the fundamentals with simplified, essential and purposeful
        ingredients.
      </p>

      <Link to="/products" aria-label="Go to products page">
        <button className={styles.button} type="button">
          Shop now
        </button>
      </Link>
    </div>
  </section>
);

export default HeroSection;
