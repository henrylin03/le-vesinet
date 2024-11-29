import { useState } from "react";
import { useParams } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import { useMediaQuery } from "@mantine/hooks";
import Header from "../../components/Header";
import ImagesGrid from "../../components/ImagesGrid";
import ImagesCarousel from "../../components/ImagesCarousel";
import Footer from "../../components/Footer";
import getProduct from "./getProduct";
import styles from "./productPage.module.css";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const isNarrowScreen = useMediaQuery("(max-width: 899px)");
  const { productId } = useParams();
  const productObject = getProduct(productId);

  const handleKeyDown = (event) => {
    if (event.key === "Backspace" || event.key === "Delete") return;
    if (!/[0-9]/.test(event.key)) event.preventDefault();
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "") return setQuantity("");
    setQuantity(inputValue);
  };

  const handleBlur = (event) => {
    if (!event.target.value || parseInt(event.target.value) === 0)
      setQuantity(1);
  };

  return (
    <>
      <Header />

      <main>
        <div className={styles.inner}>
          <section className={styles.grid}>
            {isNarrowScreen ? (
              <ImagesCarousel imagePaths={productObject.images} />
            ) : (
              <ImagesGrid imagePaths={productObject.images} />
            )}

            <section className={styles.text}>
              <div className={styles.basicInformation}>
                <h1 className={styles.heading}>{productObject.name}</h1>
                <small className={styles.paragraphText}>
                  <b>Size: </b>
                  {productObject.sizeGrams}g
                </small>
                <p>${productObject.priceAUD}</p>
              </div>

              <div className={styles.descriptionAndBuyContainer}>
                <p className={styles.paragraphText}>
                  {productObject.description}
                </p>
                <div className={styles.buyActions}>
                  <div className={styles.quantityInputs}>
                    <button
                      type="button"
                      className={styles.adjustQuantityButton}
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <input
                      type="number"
                      onFocus={(event) => event.currentTarget.select()}
                      onKeyDown={handleKeyDown}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={quantity}
                      className={styles.numberInput}
                    />
                    <button
                      type="button"
                      className={styles.adjustQuantityButton}
                      onClick={() => setQuantity(Number(quantity) + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button type="button" className={styles.addToCartButton}>
                    Add to Cart
                  </button>
                </div>
              </div>

              <ul className={styles.shippingAndReturnPolicy}>
                <li>Free shipping over $100 (Standard)</li>
                <li>Free shipping over $150 (Express)</li>
                <li>30 day return policy</li>
              </ul>
            </section>
          </section>
        </div>

        <section className={styles.bottom}>
          <h2 className={styles.sectionHeading}>Product Details</h2>
          <p className={styles.paragraphText}>{productObject.details}</p>
          <h2 className={styles.sectionHeading}>How to Use</h2>
          <p className={styles.paragraphText}>{productObject.instructions}</p>
          <h2 className={styles.sectionHeading}>Ingredient List</h2>
          <p className={styles.paragraphText}>
            {productObject.ingredients.join(", ")}
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
