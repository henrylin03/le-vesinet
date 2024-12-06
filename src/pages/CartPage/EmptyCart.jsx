import { Link } from "react-router-dom";
import styles from "./cartPage.module.css";

const EmptyCart = () => (
  <>
    <p className={styles.paragraphText}>Your cart is currently empty.</p>
    <Link to="/products" className={styles.link}>
      Continue shopping
    </Link>
  </>
);

export default EmptyCart;
