import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleHeartItem from "../../components/SingleHeartItem";
import "../../styles/useraccount.css";
import { deleteAllHeartItem } from "../../Redux/action";
const WishList = () => {
  const heartItems = useSelector((state) => state.heart);
  const dispatch = useDispatch();
  return (
    <div className="wish-list">
      <div className="top">
        <h1>Wish List</h1>
        <small>
          {heartItems.length} item{heartItems.length > 1 ? "s" : ""} saved
        </small>
      </div>
      {heartItems.length === 0 && (
        <h2 className="empty">Your Wish List is empty!</h2>
      )}
      {heartItems.map((item, index) => (
        <SingleHeartItem item={item} key={index} />
      ))}
      {heartItems.length !== 0 && (
        <p className="remove" onClick={() => dispatch(deleteAllHeartItem())}>
          Remove all products
        </p>
      )}
    </div>
  );
};

export default WishList;
