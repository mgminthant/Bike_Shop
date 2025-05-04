// components/Button.jsx
import React from "react";

export default function Button({
  children,
  type = "button",
  className = "",
  ...rest
}) {
  return (
    <button type={type} className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
}
