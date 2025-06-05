import { useState } from "react";
import { updateQuantity, removeFromCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import useGetData from "../../hooks/useGetData";
import useClientInfo from "../../hooks/useClientInfo";

import Payment from "./Payment";
import ShopCartItem from "./CartItem";
import CartTitle from "./Cart";
import RecommendProduct from "./RecommendProduct";

import "../../assets/style/cart/cart.css";
import SelectUi from "./SelectUi";

const Cart = () => {
  const dispatch = useDispatch();
  const [removeId, setRemoveId] = useState([]);
  let totalProducts = useSelector((state) => state.totalProducts.products);

  let total_cart_items = useSelector((state) => state.cart.items);

  const { country } = useClientInfo().location;

  total_cart_items = total_cart_items.map((cartItem) => {
    let item = useGetData(cartItem.id);
    return {
      ...item,
      quantity: cartItem.quantity,
      framesize: cartItem.framesize,
    };
  });

  return total_cart_items.length > 0 ? (
      <>
    <div className="shop-cart-parent">
        <div className="shop-cart-list">
          <div>
            <SelectUi removeId={removeId} setRemoveId={setRemoveId} />
            <CartTitle />
          </div>
          {total_cart_items.map((item) => (
            <ShopCartItem
              item={item}
              country={country}
              removeId={removeId}
              setRemoveId={setRemoveId}
              isReachDecLimit={item.quantity === 1}
              isReachIncLimit={
                totalProducts.find((product) => product.id === item.id).desc
                  .instock === item.quantity
              }
              key={item.id}
              deleteCartItem={() => dispatch(removeFromCart(item.id))}
              decreaseQuantity={() =>
                dispatch(updateQuantity({ id: item.id, type: "dec" }))
              }
              increaseQuantity={() =>
                dispatch(updateQuantity({ id: item.id, type: "inc" }))
              }
            />
          ))}
        </div>
      <Payment total_cart_items={total_cart_items} removeId={removeId} />
    </div>
  <RecommendProduct />
      </>
  ) : (
    <h1 className={"empty-text"}>Your Cart is empty</h1>
  );
};

export default Cart;
