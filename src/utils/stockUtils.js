export const calculateInstockOrNot = (currentProductinstock, cartProductQuantity) => {
  return (
    currentProductinstock === 0 ||
    cartProductQuantity === currentProductinstock
  );
};

