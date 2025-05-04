// components/Input.jsx
import React from "react";

const Input = React.forwardRef(
  ({ id, placeholder, className, error, ...rest }, ref) => {
    return (
      <div className="input-group">
        <input
          id={id}
          placeholder={placeholder}
          ref={ref}
          className={`input-field ${error ? "input-error" : ""} ${className}`}
          {...rest}
        />
        {error && <p className="input-error-text">{error.message}</p>}
      </div>
    );
  }
);

export default Input;
