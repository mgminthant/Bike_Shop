import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import SingleCart from "./SingleCart";
import "../../../assets/style/cart/cart.css";
import { clickCart } from "../../../Redux/action";
import { useNavigate } from "react-router-dom";
import useGetData from "../../../hooks/useGetData";

import '../../../assets/style/cart/minicart.css';
const MiniCart = ({ setIsOpenCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let cart_items = useSelector((state) => state.cart.items);

  cart_items = cart_items.map((cartItem) => {
    let item = useGetData(cartItem.id);
    return { ...item, quantity: cartItem.quantity };
  });

  const cartCount = cart_items.reduce(
    (total, bike) => total + bike.quantity,
    0
  );

  const totalCartPrice = cart_items.reduce(
    (total, bike) => total + bike.price * bike.quantity,
    0
  );

  return (
    <div className="account-parent">
      <div className="account">
        <div className="account-topbar">
          <IoClose onClick={() => setIsOpenCart(false)} />
          <span>Cart</span>
        </div>
        <div className="cart-title">
          <h5>YOUR CART</h5>
          <span>
            {cartCount === 0 ? "No" : cartCount} Article
            {cartCount > 1 && "s"}
          </span>
        </div>
        {cartCount === 0 && <small className="empty">The cart is empty!</small>}
        {cart_items.map((item) => (
          <SingleCart item={item} key={item.id} />
        ))}

        <div className="total-price">
          <h5>Total amount incl. VAT*:</h5>
          <h4>
            {cart_items.length === 0 ? "0,00" : totalCartPrice.toLocaleString()}
            $
          </h4>
        </div>
        <div className="cart-btn-group">
          <button className="go-cart" onClick={() => navigate("/cart")}>
            GO TO SHOPPING CART
          </button>
          <button className="go-shop">CONTINUE SHOPPING</button>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
