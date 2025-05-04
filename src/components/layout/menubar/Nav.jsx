import React from "react";
import { useSelector } from "react-redux";
import TopBar from "../topbar/TopBar.jsx";
import MenuBar from "./MenuBar";

import "../../../assets/style/nav.css";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const favouriteItems = useSelector(state=>state.favourite.favourites);

  const count ={
    cartItemscount: cartItems.reduce((total, item) => total + item.quantity, 0),
    favouriteItemsCount: favouriteItems.length,
  }
  

  return (
    <React.Fragment>
      <TopBar count={count} />
      <MenuBar />
    </React.Fragment>
  );
};

export default Nav;
