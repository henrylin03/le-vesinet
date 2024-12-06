import { useOutletContext } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import styles from "./cartPage.module.css";

const CartPage = () => {
  const [cartProducts, , removeProductFromCart, setCartProducts] =
    useOutletContext();
  const isEmpty = Object.keys(cartProducts).length === 0;

  return (
    <section className={styles.flex}>
      <h1 className={styles.heading}>Shopping cart</h1>
      {isEmpty > 0 ? (
        <EmptyCart />
      ) : (
        <CartItems
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          removeProductFromCart={removeProductFromCart}
        />
      )}
    </section>
  );
};

export default CartPage;
