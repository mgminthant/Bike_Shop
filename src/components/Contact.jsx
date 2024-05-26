import React from "react";
import ReactDom from "react-dom";
import "../styles/contact.css";
const Contact = () => {
  return ReactDom.createPortal(
    <div className="bg-parent">
      <div className="contact-parent">
      <div className="contact-left">
        <h5>SUBSCRIBE</h5>
        <p>
          Subscribe us and you won't miss the new arrivals, as well as discounts
          and sales
        </p>
        <input type="text" placeholder="E-mail" /> <button>SEND</button>
        <h5 className="touch">STAY IN TOUCH</h5>
        <p>Questins? Please write us at: min'sbike@gmail.com</p>
      </div>
      <div className="contact-right">
        <div className="">
          <h5>INFO</h5>
          <span>FAQ</span>
          <span>Shipping + Heading</span>
          <span>2024 Catalog</span>
          <span>Search</span>
          <h5 className="shop">SHOP</h5>
          <span>Road Bike</span>
          <span>Mountain Bike</span>
          <span>2024 Catalog</span>
          <span>BMX Bike</span>
        </div>
        <div className="">
          <span className="contact">Contacts</span>
          <span>Exchanges</span>
          <span>Returns</span>
          <span className="margin-cls">City Bike</span>
          <span>Kids Bike</span>
        </div>
      </div>
    </div>
    <h4 className="dev">Design and Develop by <u>Min Thant</u></h4>
    </div>,
    document.getElementById("portal")
  );
};

export default Contact;
