import { useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdManageAccounts, MdPermPhoneMsg } from "react-icons/md";
import { HiMail } from "react-icons/hi";

import MiniCart from "../../overlays/minicart/MiniCart.jsx";
import Login from "../../overlays/Auth/Login.jsx";

export default function TopBar({ count }) {
  const isAuth = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const [isOpenCart, setIsOpenCart] = useState(false);
  const [showLogin,setShowLogin] = useState(false);

  const handleLogin=()=>{
    setShowLogin(true);
  }

  return (
    <div className="top-bar">
      <div className="left">
        <div className="ph">
          <MdPermPhoneMsg />
          <span>+959 967484766</span>
        </div>
        <div className="email">
          <HiMail />
          <span>min'sbike@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <div
          className="heart"
          onClick={() => {
            if (isAuth) {
              navigate("/acc/wishlist");
            } else {
              handleLogin();
            }
          }}
        >
          <FaHeart />
          <span className="noti">{count.favouriteItemsCount}</span>
        </div>
        {isOpenCart && <MiniCart setIsOpenCart={setIsOpenCart}/>}
        <div className="cart" onClick={() => setIsOpenCart(true)}>
          <FaShoppingCart />
          <span className="noti">{count.cartItemscount}</span>
        </div>
        <MdManageAccounts onClick={handleLogin}/>
      </div>
      {/* show login  */}
      {showLogin && <Login setShowLogin={setShowLogin}/>}
    </div>
  );
}
