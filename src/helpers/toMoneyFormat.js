const toMoneyFormat = (number) => {
  // if a product price has two decimal points, then it is displayed as such

  // if a product price has no decimal point, then add '.00' to the end of it

  // if a product price has 1 decimal point, then add trailing zero (eg $1.2 is displayed as $1.20)

  // if a product price has >2 decimal points, then it is rounded to 2 decimal points

  return number;
};

export default toMoneyFormat;
