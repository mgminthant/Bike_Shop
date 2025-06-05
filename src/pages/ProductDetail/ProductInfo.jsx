import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { IoMdHeartEmpty } from "react-icons/io";
import { CiMail, CiCircleInfo } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";

import { addToCart } from "../../redux/slices/cartSlice.js";
import AddAlert from "../../components/overlays/notification/Notification.jsx";

import { calculateDiscount } from "../../utils/priceUtils.js";
import { calculateInstockOrNot } from "../../utils/stockUtils.js";

export default function ProductInfo({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [frameSize, setFrameSize] = useState(null);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(false);

  const totalProductInCart = useSelector((state) => state.cart.items);
  const currentProductInCart = totalProductInCart.find((cartProduct) => {
    return cartProduct.id === product.id;
  });

  const isReachIncLimit =   currentProductInCart?.quantity+quantity
       === product.instock || quantity===product.instock;

  const isReachDecLimit = quantity === 1;

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!frameSize) {
      setError("Please select frame size");
      return;
    } else {
      dispatch(addToCart({ id: product.id, framesize: frameSize, quantity }));
      setAlert(true);
      setError(null);
    }
  };
  return (
    <div className="product-info">
      {alert && (
        <AddAlert
          whatAdd={"Cart"}
          go={"Cart"}
          setAlert={setAlert}
          goToHandler={() => navigate("/cart")}
        />
      )}
      <div className="price-guarantee">
        <span>Price guarantee</span>
        <CiCircleInfo />
      </div>

      <div className="brand">Lapierre</div>

      <h1 className="product-title">{product.title}</h1>

      <div className="frame-size-info">
        <span>Bike frame size</span>
        <CiCircleInfo />
      </div>

      <div className="form-group">
        <label htmlFor="frameSize">Frame Size</label>
        <div className={`select-wrapper ${error ? "error" : ""}`}>
          <select onChange={(e) => setFrameSize(e.target.value)}>
            <option value="">Please select...</option>
            {product.framesizes.map((size) => (
              <option value={size} key={size}>
                {size}
              </option>
            ))}
          </select>
          <FaChevronDown className={'select-icon'}/>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="price-section">
        {product.discount ? (
          <>
            <div className="discount-detail">Discount {product.discount}%</div>
            <div className="original-price">{product.price} $</div>
            <div className="current-price discount-price">
              {calculateDiscount(product.price, product.discount)}
            </div>
          </>
        ) : (
          <div className="current-price">{product.price} $</div>
        )}
      </div>

      <div className="availability-section">
        <div className="assembling">
          <span className="label">Assembling | </span>
          <span className="value">Bulky good </span>
          {frameSize && <span>| Still 2+ instock</span>}
        </div>
        <div className="availability">
          {frameSize ? (
            <span>In stock – Delivery time to Germany 1-4 working days**</span>
          ) : (
            <>
              <span className="label">Availability:</span>
              <span className="value highlight">please select.</span>
            </>
          )}
        </div>
      </div>

      <div className="shipping-info">
        <p>
          Price incl. VAT excl. <a href="#">Shipping & Handling</a>
        </p>
        <p>
          + Bulky Goods/Item 9,99 € for shipment to <a href="#">Germany</a>.
          <a href="#">Bike assembling and shipping</a>
        </p>
      </div>

      <div
        className={`add-to-cart-section  ${
          calculateInstockOrNot(product.instock, currentProductInCart?.quantity)
            ? "outofstock"
            : ""
        }`}
      >
        <div className="quantity-selector">
          <button
            type="button"
            className={`quantity-btn ${isReachDecLimit ? "unclick" : ""}`}
            onClick={decrementQuantity}
          >
            <FiMinus />
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="quantity-input"
          />
          <button
            type="button"
            className={`quantity-btn ${isReachIncLimit ? "unclick" : ""}`}
            onClick={incrementQuantity}
          >
            <FiPlus />
          </button>
        </div>
        <button onClick={handleAddToCart} className={`add-to-cart-btn`}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
