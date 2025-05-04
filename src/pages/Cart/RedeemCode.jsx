import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redeemCodeFn } from "../../Redux/slices/redeemSlice";

export default function RedeemCode() {
  const dispatch = useDispatch();
  const [code, setCode] = useState("");

  const message = useSelector((state) => state.redeemCode.message);

  const onRedeemHanlder = () => {
    dispatch(redeemCodeFn(code));
    setCode("");
  };
  return (
    <div className="reedem">
      <div className="did-floating-label-content">
        <input
          type="text"
          placeholder=" "
          className="did-floating-input"
          value={code}
          name="code"
          onChange={(e) => setCode(e.target.value)}
        />
        <label htmlFor="code" className="did-floating-label">
          Reedem coupon code
        </label>
      </div>
      <button onClick={onRedeemHanlder}>+</button>
      <small>{message}</small>
    </div>
  );
}
