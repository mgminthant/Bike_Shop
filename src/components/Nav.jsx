import React, { useEffect,useRef, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdManageAccounts, MdPermPhoneMsg } from "react-icons/md";
import { PiBicycleFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
// style
import "../styles/nav.css";
import { HiMail } from "react-icons/hi";

const Nav = () => {
  const [isTop,setIsTop] = useState(false);
  const ref = useRef(null);

  useEffect(()=>{
    const handleScroll=()=>{
      const bar = ref.current.getBoundingClientRect();

      if(bar.top===0){
        setIsTop(true);
      }else{
        setIsTop(false);
      }
    }
    window.addEventListener('scroll',handleScroll)

    return ()=> window.removeEventListener('scroll',handleScroll)
  },[])

  return (
    <React.Fragment>
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
          <FaHeart />
          <FaShoppingCart />
          <MdManageAccounts />
        </div>
      </div>
      <div className={`bottom-bar ${isTop ? 'bg-white' : ''}`} ref={ref}>
        <div className="logo">
          <PiBicycleFill />
         <span>Cod.</span>
        </div>
        <div className="menu">
          <NavLink to='./'>Home</NavLink>
          <NavLink to='./product'>Product</NavLink>
          <NavLink to='./about'>About</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
