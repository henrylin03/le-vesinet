import { useState } from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@mantine/core";
import PropTypes from "prop-types";
import toMoneyFormat from "../../helpers/toMoneyFormat";
import styles from "./productPreview.module.css";

const ProductPreview = ({ productObject }) => {
  const [imageIsLoading, setImageIsLoading] = useState(true);

  return (
    <article>
      <Link to={`/products/${productObject.id}`} className={styles.link}>
        <Skeleton visible={imageIsLoading} radius={16}>
          <img
            src={productObject.images[0]}
            onLoad={() => setImageIsLoading(false)}
            className={styles.previewImage}
          />
        </Skeleton>

        <div className={styles.textContainer}>
          <p className={styles.productName}>{productObject.name}</p>
          <p className={styles.price}>
            {toMoneyFormat(productObject.priceAUD)}
          </p>
        </div>
      </Link>
    </article>
  );
};

ProductPreview.propTypes = {
  productObject: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    priceAUD: PropTypes.number.isRequired,
  }),
};

export default ProductPreview;
