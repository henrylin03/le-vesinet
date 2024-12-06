import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import PropTypes from "prop-types";
import CartTable from "./CartTable";
import CartList from "./CartList";
import getProduct from "../../../helpers/getProduct";
import styles from "./cartItems.module.css";

const CartItems = ({
  cartProducts,
  setCartProducts,
  removeProductFromCart,
}) => {
  const [productQuantities, setProductQuantities] = useState(cartProducts);
  const isNarrowScreen = useMediaQuery("(max-width: 699px)");

  const getCartTotal = () => {
    let total = 0;
    for (const productId in productQuantities) {
      const productObject = getProduct(productId);
      const subtotal = productQuantities[productId] * productObject.priceAUD;
      total += subtotal;
    }
    return total;
  };

  const removeProduct = (productId) => {
    removeProductFromCart(productId);
    setProductQuantities((prev) => {
      const newProductQuantities = { ...prev };
      delete newProductQuantities[productId];
      return newProductQuantities;
    });
  };

  return (
    <>
      {isNarrowScreen ? (
        <CartList
          productQuantities={productQuantities}
          setProductQuantities={setProductQuantities}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          removeProduct={removeProduct}
          getCartTotal={getCartTotal}
        />
      ) : (
        <CartTable
          productQuantities={productQuantities}
          setProductQuantities={setProductQuantities}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          removeProduct={removeProduct}
          getCartTotal={getCartTotal}
        />
      )}

      <div className={styles.buttonGroup}>
        <Link
          to="/products"
          aria-label="Return to page with all Le Vesinet's products"
        >
          <button type="button" className={styles.continueShoppingButton}>
            Continue shopping
          </button>
        </Link>

        <button
          type="button"
          className={styles.checkoutButton}
          onClick={() =>
            alert(
              "This site is currently a prototype.\n\nIf you have any feedback about the site, please email me at hello@henrylin.io. Thank you!",
            )
          }
        >
          Check out
        </button>
      </div>
    </>
  );
};

CartItems.propTypes = {
  cartProducts: PropTypes.objectOf(PropTypes.number).isRequired,
  setCartProducts: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

export default CartItems;
