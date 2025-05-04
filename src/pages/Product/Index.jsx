import React, { useState } from "react";
import { useSelector } from "react-redux";

import SingleProduct from "./SingleProduct.jsx";
import Filter from "./Filter.jsx";
import useFilter from "../../hooks/useFilter.js";

import "../../assets/style/product/product.css";

const Product = () => {
  const [select, setSelect] = useState("");
  const [cls, setCls] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  let totalBikes = useSelector((state) => state.bikes.bikeList);

  const prop = {
    setSelect,
    cls,
    setCls,
    setSearchTerm,
  };

  const filterBikes = useFilter(totalBikes, searchTerm, select, cls);
  return (
    <div className="product-parent">
      <Filter prop={prop} />
      <div className="single-product-parent">
        {filterBikes.map((item, index) => (
          <SingleProduct key={index} item={item} id={index} />
        ))}
      </div>
    </div>
  );
};

export default Product;
