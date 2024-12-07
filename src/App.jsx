import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [cartProducts, setCartProducts] = useState({});
  // state structure is:
  // { productId1: countOfProductId1InCart, productId2: countOfProductId2InCart, ... }

  const addProductToCart = (productId, quantityToAdd) => {
    if (cartProducts.hasOwnProperty(productId)) {
      setCartProducts((previousCartProducts) => ({
        ...previousCartProducts,
        [productId]: previousCartProducts[productId] + quantityToAdd,
      }));
    } else {
      setCartProducts((previousCartProducts) => ({
        ...previousCartProducts,
        [productId]: quantityToAdd,
      }));
    }
  };

  const removeProductFromCart = (productId) =>
    setCartProducts((previousCartProducts) => {
      const newCartProducts = { ...previousCartProducts };
      delete newCartProducts[productId];
      return newCartProducts;
    });

  const countProductsInCart = () =>
    Object.values(cartProducts).reduce((a, b) => a + b, 0);

  return (
    <MantineProvider>
      <Header cartProductIdsCount={countProductsInCart()} />

      <main>
        <Outlet
          context={[
            cartProducts,
            addProductToCart,
            removeProductFromCart,
            setCartProducts,
          ]}
        />
      </main>

      <Footer />
    </MantineProvider>
  );
};

export default App;
