import { useState } from "react";
import PropTypes from "prop-types";
import { Skeleton } from "@mantine/core";
import styles from "./imagesGrid.module.css";

const ImagesGrid = ({ imagePaths }) => {
  const [imageIsLoading, setImageIsLoading] = useState(true);

  return (
    <article className={styles.images}>
      {imagePaths.map((imagePath) => (
        <div className={styles.gridItem} key={imagePath}>
          <Skeleton visible={imageIsLoading} radius={8} height="100%">
            <img
              src={imagePath}
              className={styles.image}
              onLoad={() => setImageIsLoading(false)}
            />
          </Skeleton>
        </div>
      ))}
    </article>
  );
};

ImagesGrid.propTypes = {
  imagePaths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImagesGrid;
