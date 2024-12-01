import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./cartPage.module.css";

const EmptyCart = () => (
  <>
    <p className={styles.paragraphText}>Your cart is currently empty.</p>
    <Link to="/products" className={styles.link}>
      Continue shopping
    </Link>
  </>
);

const CartPage = ({ items }) => (
  <div className={styles.flex}>
    <h1 className={styles.heading}>Shopping cart</h1>
    {items || <EmptyCart />}
  </div>
);

CartPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default CartPage;
