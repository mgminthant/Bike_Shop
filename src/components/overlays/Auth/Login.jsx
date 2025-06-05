import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoClose } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

import "../../../assets/style/auth/login.css";
import {useForm} from "react-hook-form";

const Login = ({ setShowLogin }) => {
  const [showEye, setShowEye] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitted },
  } = useForm();

  const password = watch("password");
  const onSubmit = () => {
  };

  return (
    <div className="account-parent">
      <div className="account">
        <div className="account-topbar">
          <IoClose onClick={() => setShowLogin(false)} />
          <span>Account</span>
        </div>
        <div className="second-account-parent">
          <h2>Login to your account </h2> <br/>
          <br/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="did-floating-label-content">
              <input
                  type="text"
                  placeholder=" "
                  className="did-floating-input"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                      message: "Invalid email address",
                    },
                  })}
              />
              {isSubmitted && errors.email && (
                  <small>{errors.email.message}</small>
              )}
              <label htmlFor="" className="did-floating-label">
                E-mail address*
              </label>
            </div>
          <br/> <br/>
          <div className="did-floating-label-content">
            <input
                type={showEye ? "text" : "password"}
                placeholder=" "
                className="did-floating-input"
                {...register("password", {required: "Password is required"})}
            />
            {errors.password && <small>{errors.password.message}</small>}
            <label htmlFor="" className="did-floating-label">
              Password*
            </label>
            <section className={`${(password !== "" && password) ? "value" : ""}`}>
              {showEye ? (
                  <FaRegEye onClick={() => setShowEye(false)}/>
              ) : (
                  <FaRegEyeSlash
                      onClick={() => {
                        if (!password || password === "") {
                          return;
                        }
                        setShowEye(true);
                      }}
                  />
              )}
            </section>
          </div>
          <div className="mem">
            <input type="checkbox"/>
            <label htmlFor="name">Remember me</label>
          </div>
          <div className="got">
            <CiLock/>
            <span>Forgot password?</span>
          </div>
          <button className="login" type="submit">LOG IN</button>
          </form>
          <br/>
          <div className="line"></div>
          <div className="join-parent">
            <h2>New To Cod.Bike?</h2> <br/>
            <NavLink
                to="/createaccount"
                className="join"
                onClick={() => setShowLogin(false)}
            >
              JOIN NOW
            </NavLink>
            <br/> <br/>
            <div>
              <IoMdCheckmarkCircleOutline/>
              <span>Quickly create your order with saved data</span>
            </div>
            <br/>
            <div>
              <IoMdCheckmarkCircleOutline/>
              <span>Quickly access your order history</span>
            </div>
            <br/>
            <div>
              <IoMdCheckmarkCircleOutline/>
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
