const toMoneyFormat = (price) =>
  `$${(Math.round((price + Number.EPSILON) * 100) / 100).toFixed(2)}`;

export default toMoneyFormat;
