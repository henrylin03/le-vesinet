import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Table } from "@mantine/core";
import QuantityInput from "../../../components/QuantityInput";
import getProduct from "../../../helpers/getProduct";
import styles from "./cartItems.module.css";

const CartTable = ({
  productQuantities,
  setProductQuantities,
  cartProducts,
  setCartProducts,
  removeProduct,
  getCartTotal,
}) => {
  const generateTableRows = () => {
    let tableRows = [];
    for (const productId in cartProducts) {
      if (productQuantities[productId] <= 0) removeProduct(productId);

      const productObject = getProduct(productId);

      const setProductQuantity = (newQuantity) => {
        setProductQuantities((previousProductQuantities) => ({
          ...previousProductQuantities,
          [productId]: newQuantity,
        }));
      };

      const productRow = (
        <Table.Tr key={productId}>
          <Table.Td>
            <Link to={`/products/${productId}`} className={styles.productCell}>
              <img
                src={productObject.images[0]}
                className={styles.productImage}
              />
              <p className={styles.productName}>{productObject.name}</p>
            </Link>
          </Table.Td>
          <Table.Td>
            <div className={styles.quantityInputContainer}>
              <QuantityInput
                quantityState={productQuantities[productId]}
                quantityStateSetter={setProductQuantity}
              />
              <a
                className={styles.link}
                onClick={() => removeProduct(productId)}
              >
                Remove
              </a>
            </div>
          </Table.Td>
          <Table.Td>
            ${productQuantities[productId] * productObject.priceAUD}
          </Table.Td>
        </Table.Tr>
      );

      tableRows.push(productRow);
    }
    return tableRows;
  };

  return (
    <Table className={styles.table} verticalSpacing="md" captionSide="bottom">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product</Table.Th>
          <Table.Th>Quantity</Table.Th>
          <Table.Th>Subtotal</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody className={styles.tableBody}>
        {generateTableRows()}
        <Table.Tr>
          <Table.Td colSpan={4}></Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td colSpan={4} className={styles.updateCartCell}>
            <a
              className={styles.link}
              onClick={() => setCartProducts(productQuantities)}
            >
              Update cart
            </a>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
      <Table.Tfoot className={styles.total}>
        <Table.Tr>
          <Table.Td colSpan={3}>Total</Table.Td>
          <Table.Td>${getCartTotal()}</Table.Td>
        </Table.Tr>
      </Table.Tfoot>

      <Table.Caption>
        <p>Tax included and shipping calculated at check out</p>
      </Table.Caption>
    </Table>
  );
};

CartTable.propTypes = {
  productQuantities: PropTypes.objectOf(PropTypes.number).isRequired,
  setProductQuantities: PropTypes.func.isRequired,
  cartProducts: PropTypes.objectOf(PropTypes.number).isRequired,
  setCartProducts: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  getCartTotal: PropTypes.func.isRequired,
};

export default CartTable;