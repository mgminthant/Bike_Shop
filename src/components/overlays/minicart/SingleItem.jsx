import { CiTrash } from "react-icons/ci";
import { deleteCartItem } from "../../../redux/action";
import "../../../assets/style/cart/cart.css";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../../redux/slices/cartSlice.js";

const SingleItem = ({ item }) => {
    const dispatch = useDispatch();
  return (
    <div className="single-cart">
      <div className="item-desc">
        <img src={item.img} alt="" />
        <div>
          <p className="name">{item.name}</p>
          <small> Frame Size - {item.frame_size}</small>
          <small>Quantity: {item.quantity}</small>
        </div>
      </div>
      <div className="trash-price">
        <CiTrash onClick={() => dispatch(removeFromCart(item.id))} />
        <p>{item.price}$</p>
      </div>
    </div>
  );
};

export default SingleItem;
