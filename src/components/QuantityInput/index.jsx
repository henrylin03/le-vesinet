import PropTypes from "prop-types";
import { Plus, Minus } from "lucide-react";
import styles from "./quantityInput.module.css";

const QuantityInput = ({ quantityState, quantityStateSetter }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Backspace" || event.key === "Delete") return;
    if (!/[0-9]/.test(event.key)) event.preventDefault();
  };

  const handleChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "") return quantityStateSetter("");
    quantityStateSetter(inputValue);
  };

  const handleBlur = (event) => {
    if (!event.target.value) quantityStateSetter(1);
  };

  return (
    <article className={styles.container}>
      <button
        type="button"
        className={styles.button}
        onClick={() =>
          quantityState >= 1 && quantityStateSetter(quantityState - 1)
        }
      >
        <Minus size={16} />
      </button>
      <input
        type="number"
        onFocus={(event) => event.currentTarget.select()}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onBlur={handleBlur}
        value={quantityState}
        className={styles.numberInput}
      />
      <button
        type="button"
        className={styles.button}
        onClick={() => quantityStateSetter(Number(quantityState) + 1)}
      >
        <Plus size={16} />
      </button>
    </article>
  );
};

QuantityInput.propTypes = {
  quantityState: PropTypes.number.isRequired,
  quantityStateSetter: PropTypes.func.isRequired,
};

export default QuantityInput;
