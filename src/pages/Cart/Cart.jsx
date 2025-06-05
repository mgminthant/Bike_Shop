import React from "react";

export default function CartTitle() {
  return (
    <>
      <h2 className={"your-cart"}>Your Cart</h2>
      <div className="shop-cart-menu">
        <span>PRODUCT</span>
        <section>
          <small>QUANTITY</small>
          <small>PRICE</small>
          <small>SUM</small>
        </section>
      </div>
    </>
  );
}
