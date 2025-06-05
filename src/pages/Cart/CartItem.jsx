import { CiTrash } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function ShopCartItem({
  item,
  deleteCartItem,
  removeId,
  setRemoveId,
  decreaseQuantity,
  increaseQuantity,
  isReachDecLimit,
  isReachIncLimit,
  country,
}) {
  const handleCheckboxChange = (isChecked) => {
    setRemoveId((prev) => {
      if (isChecked) {
        return prev.filter((id) => id !== item.id);
      } else {
        return [...prev, item.id];
      }
    });
  };

  return (
    <div className="single-shop-cart">
      <div className="shop-cart">
        <div>
          <input
            type="checkbox"
            checked={removeId.includes(item.id) ? false : true}
            onChange={(e) => handleCheckboxChange(e.target.checked)}
          />
          <img src={item.img} alt="" />
        </div>
        <div>
          <p className="name">{item.desc.pd_name}</p>
          <small>
            Frame Size - <b>{item.framesize}</b>
          </small>
          <small>
            Still <b>{item.desc.instock}</b> instock
          </small>
          <small className="stock-not">
            In stock – Delivery time to {country} 2-5 working days
          </small>
        </div>
        <CiTrash onClick={() => deleteCartItem()} className="trash" />
      </div>
      <div className="count-div">
        <div className="counter">
          <FiMinus
            onClick={decreaseQuantity}
            className={`${isReachDecLimit ? "unclick" : ""}`}
          />
          <b>{item.quantity}</b>
          <FiPlus
            onClick={increaseQuantity}
            className={`${isReachIncLimit ? "unclick" : ""}`}
          />
        </div>
        <div className="price">{item.price}$</div>
        <div className="shop-total-price">
          {item.price * item.quantity}$
          <CiTrash onClick={() => deleteCartItem()} />
        </div>
      </div>
    </div>
  );
}
