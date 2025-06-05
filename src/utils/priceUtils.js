export const calculateDiscount = (originalPrice, discount) => {
  return Math.ceil(originalPrice - originalPrice * (discount / 100)) + " $";
};
