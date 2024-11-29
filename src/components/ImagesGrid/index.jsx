import PropTypes from "prop-types";
import styles from "./imagesGrid.module.css";

const ImagesGrid = ({ imagePaths }) => (
  <article className={styles.images}>
    {imagePaths.map((imagePath) => (
      <div className={styles.gridItem} key={imagePath}>
        <img src={imagePath} className={styles.image} />
      </div>
    ))}
  </article>
);

ImagesGrid.propTypes = {
  imagePaths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImagesGrid;
