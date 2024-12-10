import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ActionIcon, Skeleton } from "@mantine/core";
import { Trash2 } from "lucide-react";
import QuantityInput from "../../../components/QuantityInput";
import getProduct from "../../../helpers/getProduct";
import toMoneyFormat from "../../../helpers/toMoneyFormat";
import styles from "./cartList.module.css";

const CartList = ({
  productQuantities,
  setProductQuantities,
  cartProducts,
  setCartProducts,
  removeProduct,
  getCartTotal,
}) => {
  const [imageIsLoading, setImageIsLoading] = useState(true);

  const generateProductRows = () => {
    let rows = [];
    for (const productId in cartProducts) {
      if (productQuantities[productId] <= 0) removeProduct(productId);

      const productObject = getProduct(productId);

      const setProductQuantity = (newQuantity) => {
        setProductQuantities((previousProductQuantities) => ({
          ...previousProductQuantities,
          [productId]: newQuantity,
        }));
      };

      const productSubtotal = toMoneyFormat(
        productQuantities[productId] * productObject.priceAUD,
      );

      const productRow = (
        <div className={styles.productRow} key={productObject.id}>
          <Link to={`/products/${productId}`}>
            <Skeleton visible={imageIsLoading}>
              <img
                src={productObject.images[0]}
                className={styles.productImage}
                onLoad={() => setImageIsLoading(false)}
              />
            </Skeleton>
          </Link>

          <div className={styles.right}>
            <Link to={`/products/${productId}`}>
              <p className={styles.productName}>{productObject.name}</p>
            </Link>
            <small className={styles.subtotal}>
              Subtotal: {productSubtotal}
            </small>
            <div className={styles.quantityAdjust}>
              <QuantityInput
                quantityState={productQuantities[productId]}
                quantityStateSetter={setProductQuantity}
              />
              <ActionIcon
                variant="subtle"
                color="gray"
                size="lg"
                radius="xl"
                aria-label="Delete product from cart"
                onClick={() => removeProduct(productId)}
              >
                <Trash2 size="60%" />
              </ActionIcon>
            </div>
          </div>
        </div>
      );

      rows.push(productRow);
    }

    return rows;
  };

  return (
    <section className={styles.section}>
      <article className={styles.cart}>{generateProductRows()}</article>
      <a
        className={styles.link}
        onClick={() => setCartProducts(productQuantities)}
      >
        Update cart
      </a>
      <div className={styles.total}>
        <p>Total</p>
        <p>{toMoneyFormat(getCartTotal())}</p>
      </div>
      <small className={styles.taxAndShipping}>
        Tax included and shipping calculated at check out
      </small>
    </section>
  );
};

CartList.propTypes = {
  productQuantities: PropTypes.objectOf(PropTypes.number).isRequired,
  setProductQuantities: PropTypes.func.isRequired,
  cartProducts: PropTypes.objectOf(PropTypes.number).isRequired,
  setCartProducts: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  getCartTotal: PropTypes.func.isRequired,
};

export default CartList;
