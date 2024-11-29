import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./productPreview.module.css";

const ProductPreview = ({ productObject }) => (
  <article>
    <Link to={`/products/${productObject.id}`} className={styles.link}>
      <img src={productObject.images[0]} className={styles.previewImage} />
      <div className={styles.textContainer}>
        <p className={styles.productName}>{productObject.name}</p>
        <p className={styles.price}>${productObject.priceAUD} AUD</p>
      </div>
    </Link>
  </article>
);

ProductPreview.propTypes = {
  productObject: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    priceAUD: PropTypes.number.isRequired,
  }),
};

export default ProductPreview;
