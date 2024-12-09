import { Link, NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import PropTypes from "prop-types";
import PageLinks from "./PageLinks";
import brandingImage from "../../assets/images/branding/branding.svg";
import styles from "./header.module.css";

const Header = ({ cartProductIdsCount }) => (
  <header className={styles.header}>
    <Link to="/" aria-label="Go to home page" className={styles.branding}>
      <img
        className={styles.brandingImage}
        src={brandingImage}
        alt="Le Vesinet branding"
      />
    </Link>

    <PageLinks />

    <NavLink to="/cart" className={styles.cartLink}>
      <button
        type="button"
        className={styles.cartButton}
        aria-label="Go to shopping cart"
      >
        <ShoppingBag />
        <span
          className={styles.counter}
          aria-label="Number of items in shopping cart"
        >
          <small>{cartProductIdsCount}</small>
        </span>
      </button>
    </NavLink>
  </header>
);

Header.propTypes = {
  cartProductIdsCount: PropTypes.number.isRequired,
};

export default Header;
