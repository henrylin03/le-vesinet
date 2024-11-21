import PropTypes from "prop-types";
import styles from "./productPreview.module.css";

const ProductPreview = ({ productObject }) => (
  <article className={styles.card}>
    <img
      src={`${productObject.imageFolderPath}/preview.webp`}
      className={styles.previewImage}
    />
    <div className={styles.textContainer}>
      <p className={styles.productName}>{productObject.name}</p>
      <p className={styles.price}>${productObject.priceAUD} AUD</p>
    </div>
  </article>
);

ProductPreview.propTypes = {
  productObject: PropTypes.shape({
    imageFolderPath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    priceAUD: PropTypes.number.isRequired,
  }),
};

export default ProductPreview;
