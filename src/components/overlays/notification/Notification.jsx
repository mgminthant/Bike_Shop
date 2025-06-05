import React from "react";
import "../../../assets/style/notification.css";

import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const AddAlert = ({ whatAdd, go, setAlert, goToHandler,isFavourite }) => {

  return (
    <div className="add-alert-parent">
      <div className="">
        <small>
          <IoCheckmarkCircleSharp />
          <small>{whatAdd==='WishList' ? (isFavourite ? "Added to " : "Remove From ") : "Added to "} {whatAdd}</small>
        </small>
        <small className="btn" onClick={goToHandler}>
          Go To {go}
        </small>
        <IoCloseCircleSharp className="close" onClick={() => setAlert("")} />
      </div>
    </div>
  );
};

export default AddAlert;
