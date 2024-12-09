import { useState } from "react";
import { LoaderCircle, Check } from "lucide-react";
import PropTypes from "prop-types";
import styles from "./addToCartButton.module.css";

const AddingToCartButton = () => (
  <button type="button" className={styles.addingButton} disabled>
    <LoaderCircle size={20} className={styles.loadingIcon} />
    <p>Adding</p>
  </button>
);

const AddedToCartButton = () => (
  <button type="button" className={styles.addedButton} disabled>
    <Check size={20} />
    <p>Added to cart</p>
  </button>
);

const AddToCartButton = ({
  productId,
  productQuantity,
  setModalOpened,
  addProductToCart,
  setProductQuantity,
}) => {
  const [buttonState, setButtonState] = useState(null);
  // state can be `null` (default), "adding", and "added"

  const handleClick = async () => {
    if (productQuantity < 1) return setProductQuantity(1);

    setButtonState("adding");

    try {
      await addProductToCart(productId, productQuantity);
      setModalOpened(true);
      setProductQuantity(1);
      setButtonState("added");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      setButtonState(null);
    }

    setTimeout(() => setButtonState(null), 3000);
  };

  if (!buttonState)
    return (
      <button
        type="button"
        className={styles.buttonDefault}
        onClick={handleClick}
      >
        Add to Cart
      </button>
    );
  else
    return buttonState === "adding" ? (
      <AddingToCartButton />
    ) : (
      <AddedToCartButton />
    );
};

AddToCartButton.propTypes = {
  productId: PropTypes.number.isRequired,
  productQuantity: PropTypes.number.isRequired,
  setModalOpened: PropTypes.func.isRequired,
  addProductToCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default AddToCartButton;
