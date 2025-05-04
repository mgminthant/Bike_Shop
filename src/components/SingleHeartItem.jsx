import React from "react";
import { CiTrash } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { deleteHeartItem } from "../Redux/action";

const SingleHeartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="single-heart">
      <div className="img-pr">
        <img src={item.img} alt="" />
        <div>
          <p className="name">{item.name}</p>
          <p>{item.price.toLocaleString()}$</p>
          <small>
            Still 10+in stock In stock - Delivery time to Germany 2-6 working
            days
          </small>
        </div>
          <CiTrash onClick={() => dispatch(deleteHeartItem(item.id))} className="res"/>
      </div>
      <div className="trash-price">
        <CiTrash onClick={() => dispatch(deleteHeartItem(item.id))} className="res-none"/>
        <small className="date">Item added 2024-06-08</small>
        <div className="btn-group">
          <button>VIEW DETAILS</button>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default SingleHeartItem;
