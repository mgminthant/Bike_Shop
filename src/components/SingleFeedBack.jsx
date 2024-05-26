import React from "react";
import { CiStar } from "react-icons/ci";
import bike from "../assets/img/cover/ebike1.jpeg";

const SingleFeedBack = ({item }) => {
  return (
    <div className="single-feedback">
      <p>{item}</p>
      <div className="acc">
        <img src={bike} alt="" />
        <div className="rate">
          <h3>Wulan Aford</h3>
          <div className="">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeedBack;
