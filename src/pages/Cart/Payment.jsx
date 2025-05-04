import { useSelector } from "react-redux";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import RedeemCode from "./RedeemCode";
import TotalPrice from "./TotalPrice";

const Payment = ({ total_cart_items, removeId }) => {
  return (
    <div>
      <div
        className={`payment ${
          removeId.length === total_cart_items.length ? "no-payment" : ""
        }`}
      >
        {removeId.length === total_cart_items.length ? (
          <p>Please select at least one item to proceed to checkout.</p>
        ) : (
          <>
            <h5>DELIVERY TIME</h5>
            <small className="bike-ord">
              BIKE24 generally only dispatches complete orders
            </small>
            <div className="fact">
              <IoMdCheckmarkCircleOutline />
              <span>Quickly create your order with saved data</span>
            </div>
            <div className="fact">
              <IoMdCheckmarkCircleOutline />
              <span>Quickly access your order history</span>
            </div>
            <h5 className="ord-sum">ORDER SUMMARY</h5>
            <TotalPrice
              total_cart_items={total_cart_items}
              removeId={removeId}
            />
          </>
        )}
        <div className="paypal">PayPal</div>
        <small className="pay">The safer, easier way to pay</small>
        <div className="amazon-parent">
          <div className="amazon">Amazon Pay</div>
          <small className="pay">Use your Amazon account</small>
        </div>
        <div className="checkout">CHECKOUT</div>
      </div>
      {removeId.length !== total_cart_items.length && <RedeemCode />}
    </div>
  );
};

export default Payment;
