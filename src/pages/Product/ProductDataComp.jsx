import React from "react";
import { NavLink } from "react-router-dom";

import { calculateDiscount } from "../../utils/priceUtils";

import {FaArrowUpRightFromSquare, FaCartPlus} from "react-icons/fa6";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { calculateInstockOrNot } from "../../utils/stockUtils";
import {BiArrowFromLeft, BiArrowFromRight, BiRightArrow, BiSolidLeftArrow} from "react-icons/bi";

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
            calculateInstockOrNot(item.desc.instock, singleItemInCart?.quantity) ? "outofstock" : ""
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
              {calculateDiscount(item.price, item.discount)}
            </span>
          )}
        </h4>
        <h4 className={`${item.desc.instock > 0 ? "instock" : "outstock"}`}>
          *
          {item.desc.instock > 0
            ? `${"Instock - " + item.desc.instock}`
            : "Out of Stock"}
        </h4>
        <h5>Framesize : {item.default_frame_size}</h5>
        <p>{item.desc.pd_name}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center",
            gap: "10px",
          }}
        >
          <button
            onClick={buyNowBtnHandler}
            className={`buynowbtn ${item.desc.instock === 0 ? "dis-btn" : ""}`}
          >
            Buy Now
          </button>
         <button className={'detail'}>
           <NavLink to={`/product/detail/${item.id}`}>View Detail <FaArrowUpRightFromSquare/></NavLink>
         </button>
        </div>
      </div>
    </React.Fragment>
  );
}
