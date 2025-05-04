import React from "react";
import { useSelector } from "react-redux";

export default function TotalPrice({ total_cart_items, removeId }) {
  removeId.map((id) => {
    total_cart_items = total_cart_items.filter((item) => item.id !== id);
  });
  const totalPrice = total_cart_items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const redeemState = useSelector((state) => state.redeemCode.discount);

  const calculateFinalPrice = () => {
    if (!redeemState || !redeemState.type) return totalPrice;

    switch (redeemState.type) {
      case "fixed":
        return Math.max(0, totalPrice - redeemState.value);
      case "percentage":
        return Math.max(0, totalPrice - (redeemState.value / 100) * totalPrice);
      default:
        return totalPrice;
    }
  };

  const finalPrice = calculateFinalPrice();
  const bulkyCost = 5;
  const shippingCost = 10;
  const totalWithExtras = finalPrice + bulkyCost + shippingCost;

  return (
    <>
      <div className="cost">
        <p>Total Product Value incl. VAT:</p>
        <h5>{totalPrice.toFixed(2)}$</h5>
      </div>
      <div className="cost">
        <p>Bulky cost:</p>
        <h5>{bulkyCost}$</h5>
      </div>
      <div className="cost ship">
        <p>Shipping cost:</p>
        <h5>{shippingCost}$</h5>
      </div>
      <div className="total">
        <p>Total amount incl. VAT:</p>
        <h5>{totalWithExtras.toFixed(2)}$</h5>
      </div>
    </>
  );
}
