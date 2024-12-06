import productsData from "../data/index.json";

const getProduct = (productId) =>
  productsData.products.find((productObject) => productObject.id === productId);

export default getProduct;
