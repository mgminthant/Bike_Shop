import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../assets/style/auth/useraccount.css";
const AccountLayout = () => {
  const [id, setId] = useState("wish");

  const clickAccountMenu = () => {
    const item = document.getElementById(id);
    const navParent = document.getElementsByClassName("nav-parent")[0];

    const containerRect = navParent.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const scrollPosition =
      itemRect.left +
      navParent.scrollLeft -
      containerRect.width / 2 +
      itemRect.width / 2;
    navParent.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  useEffect(() => {
    clickAccountMenu();
  }, [id]);

  return (
    <div className="user-account">
      <div className="nav-parent">
        <div className="navbar">
          <NavLink to="overview" id="over" onClick={() => setId("over")}>
            OVERVIEW
          </NavLink>
          <NavLink to="deliaddress" id="deli" onClick={() => setId("deli")}>
            MY DELIVERY ADDRESSES
          </NavLink>
          <NavLink to="order" id="order" onClick={() => setId("order")}>
            MY ORDERS
          </NavLink>
          <NavLink to="WishList" id="wish" onClick={() => setId("wish")}>
            MY WISH LIST
          </NavLink>
          <NavLink to="changepw" id="ch_pw" onClick={() => setId("ch_pw")}>
            CHANGE PASSWORD
          </NavLink>
          <NavLink
            to="personalinfo"
            id="per_info"
            onClick={() => setId("per_info")}
          >
            PERSONAL INFORMATION
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AccountLayout;
