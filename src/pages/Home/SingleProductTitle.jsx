import React from "react";

const SingleProductList = ({ img, text }) => {
  return (
    <div className="single-title-parent">
      <div className="circle"></div>
      <div className="text-img">
        <div>
        <h2>{text}</h2>
          <button>VIEW MORE</button>
        </div>
          <img src={img} alt="" />
      </div>
    </div>
  );
};

export default SingleProductList;
