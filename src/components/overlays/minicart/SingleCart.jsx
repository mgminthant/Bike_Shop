import React from "react";
import { CiTrash } from "react-icons/ci";
import { deleteCartItem } from "../../../Redux/action";
import "../../../assets/style/cart/cart.css";

const SingleCart = ({ item }) => {
  return (
    <div className="single-cart">
      <div className="item-desc">
        <img src={item.img} alt="" />
        <div>
          <p className="name">{item.name}</p>
          <small> Frame Size - {item.frame_size}</small>
          <small>Quantity: {item.quantity}</small>
        </div>
      </div>
      <div className="trash-price">
        <CiTrash onClick={() => dispatch(deleteCartItem(item.id))} />
        <p>{item.price.toLocaleString()}$</p>
      </div>
    </div>
  );
};

export default SingleCart;
