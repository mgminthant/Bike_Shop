import React from "react";
import { FaCartPlus } from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function ProductDataComp({
  item,
  toggleHeartHandler,
  buyNowBtnHandler,
  addToCartHandler,
  singleItemInCart,
  isFavoriteItem,
}) {
  return (
    <React.Fragment>
      <div className="pd-discount-icon">
        <div className={`${item.discount > 0 && "discount"}`}>
          {item.discount > 0 && "- " + item.discount + "%"}
        </div>
        <div
          className={`icon ${
            item.desc.instock === 0 ||
            singleItemInCart?.quantity === item.desc.instock
              ? "outofstock"
              : ""
          }`}
        >
          <FaCartPlus onClick={addToCartHandler} />
          {isFavoriteItem ? (
            <FaHeart onClick={toggleHeartHandler} />
          ) : (
            <FaRegHeart onClick={toggleHeartHandler} />
          )}
        </div>
      </div>
      <img src={item.img} alt="" />
      <div className="pd-text">
        <h4>
          <span className={`${item.discount && "del"}`}>
            {item.price.toLocaleString() + " $"}
          </span>
          {item.discount !== 0 && (
            <span className="dis-price">
              {Math.ceil(
                item.price - item.price * (item.discount / 100)
              ).toLocaleString() + " $"}
            </span>
          )}
        </h4>
        <h4 className={`${item.desc.instock > 0 ? "instock" : "outstock"}`}>
          *
          {item.desc.instock > 0
            ? `${"Instock - " + item.desc.instock}`
            : "Out of Stock"}
        </h4>
        <p>{item.desc.pd_name}</p>
        <button
          onClick={buyNowBtnHandler}
          className={`${item.desc.instock === 0 ? "dis-btn" : ""}`}
        >
          Buy Now
        </button>
      </div>
    </React.Fragment>
  );
}
