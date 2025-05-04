import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import "../../../assets/style/auth/login.css";
import { NavLink } from "react-router-dom";

const Login = ({ setShowLogin }) => {
  const [showEye, setShowEye] = useState(false);
  const [pwValue, setPwValue] = useState("");
  return (
    <div className="account-parent">
      <div className="account">
        <div className="account-topbar">
          <IoClose onClick={() => setShowLogin(false)} className="close" />
          <span>Account</span>
        </div>
        <div className="second-account-parent">
          <h2>Login to your account </h2> <br />
          <br />
          <div className="did-floating-label-content">
            <input type="text" placeholder=" " className="did-floating-input" />
            <label htmlFor="" className="did-floating-label">
              Enter email or number*
            </label>
          </div>
          <br /> <br />
          <div className="did-floating-label-content">
            <input
              type={showEye ? "text" : "password"}
              placeholder=" "
              value={pwValue}
              onChange={(e) => setPwValue(e.target.value)}
              className="did-floating-input"
            />
            <label htmlFor="" className="did-floating-label">
              Password*
            </label>
            <span className={`${pwValue !== "" ? "value" : ""}`}>
              {showEye ? (
                <FaRegEye onClick={() => setShowEye(false)} />
              ) : (
                <FaRegEyeSlash
                  onClick={() => {
                    setShowEye(true);
                    if (pwValue === "") {
                      return;
                    }
                  }}
                />
              )}
            </span>
          </div>
          <div className="mem">
            <input type="checkbox" />
            <label htmlFor="name">Remember me</label>
          </div>
          <div className="got">
            <CiLock />
            <span>Forgot password?</span>
          </div>
          <button className="login">LOG IN</button> <br />
          <div className="line"></div>
          <div className="join-parent">
            <h2>New To Cod.Bike?</h2> <br />
            <NavLink
              to="/createaccount"
              className="join"
              onClick={() => setShowLogin(false)}
            >
              JOIN NOW
            </NavLink>
            <br /> <br />
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>Quickly create your order with saved data</span>
            </div>
            <br />
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>Quickly access your order history</span>
            </div>
            <br />
            <div>
              <IoMdCheckmarkCircleOutline />
              <span>
                Manage personal customer data, shipping addresses and default
                payment method
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
