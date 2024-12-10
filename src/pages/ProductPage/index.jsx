import { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import QuantityInput from "../../components/QuantityInput";
import ImagesGrid from "../../components/ImagesGrid";
import ImagesCarousel from "../../components/ImagesCarousel";
import AddedToCartModal from "../../components/AddedToCartModal";
import getProduct from "../../helpers/getProduct";
import toMoneyFormat from "../../helpers/toMoneyFormat";
import styles from "./productPage.module.css";
import AddToCartButton from "../../components/AddToCartButton";

const ProductPage = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [modalOpened, setModalOpened] = useState(false);
  const { productId } = useParams();
  const [, addProductToCart] = useOutletContext();
  const isNarrowScreen = useMediaQuery("(max-width: 899px)");

  const productObject = getProduct(productId);
  const priceFormatted = toMoneyFormat(productObject.priceAUD);

  return (
    <>
      <AddedToCartModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
        productName={productObject.name}
        productPreviewImagePath={productObject.images[0]}
        priceFormatted={priceFormatted}
        productSize={productObject.sizeGrams}
      />

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
              <p>{priceFormatted}</p>
            </div>

            <div className={styles.descriptionAndBuyContainer}>
              <p className={styles.paragraphText}>
                {productObject.description}
              </p>
              <div className={styles.buyActions}>
                <QuantityInput
                  quantityState={productQuantity}
                  quantityStateSetter={setProductQuantity}
                />
                <AddToCartButton
                  productId={productId}
                  productQuantity={productQuantity}
                  setModalOpened={setModalOpened}
                  addProductToCart={addProductToCart}
                  setProductQuantity={setProductQuantity}
                />
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
    </>
  );
};

export default ProductPage;
