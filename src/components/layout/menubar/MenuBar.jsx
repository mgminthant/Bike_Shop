import { PiBicycleFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function MenuBar() {
  return (
    <div className="bottom-bar bg-white">
      <div className="logo">
        <PiBicycleFill />
        <span>Cod.</span>
      </div>
      <div className="menu">
        <NavLink to="">Home</NavLink>
        <NavLink to="product">Product</NavLink>
        <NavLink to="about">About</NavLink>
      </div>
    </div>
  );
}
