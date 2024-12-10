import { Modal } from "@mantine/core";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import PropTypes from "prop-types";
import styles from "./addedToCartModal.module.css";

const AddedToCartModal = ({
  modalOpened,
  setModalOpened,
  productName,
  productPreviewImagePath,
  priceFormatted,
  productSize,
}) => {
  return (
    <Modal.Root opened={modalOpened} onClose={() => setModalOpened(false)}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title className={styles.modalTitle}>
            <Check size={16} />
            Added to cart
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>
          <div className={styles.inner}>
            <div className={styles.productPreview}>
              <img
                src={productPreviewImagePath}
                className={styles.productImage}
              />
              <div className={styles.textContainer}>
                <p className={styles.productName}>{productName}</p>
                <small>{priceFormatted}</small>
                <small className={styles.productSize}>
                  Size: {productSize}g
                </small>
              </div>
            </div>
            <div className={styles.buttonGroup}>
              <Link to="/cart">
                <button type="button" className={styles.secondaryButton}>
                  View cart
                </button>
              </Link>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={() => {
                  alert(
                    "This site is currently a prototype.\n\nIf you have any feedback about the site, please email me at hello@henrylin.io. Thank you!",
                  );
                  setModalOpened(false);
                }}
              >
                Check out
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

AddedToCartModal.propTypes = {
  modalOpened: PropTypes.bool.isRequired,
  setModalOpened: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
  productPreviewImagePath: PropTypes.string.isRequired,
  priceFormatted: PropTypes.string.isRequired,
  productSize: PropTypes.number.isRequired,
};

export default AddedToCartModal;
