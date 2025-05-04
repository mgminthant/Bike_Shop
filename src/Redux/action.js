import {
  ACCOUNT,
  ADDTOCART,
  ADDTOHEART,
  CLICKACCOUNT,
  CLICKCART,
  CLICKHEART,
  DELETEALLHEART,
  DELETECARTITEM,
  DELETEHEARTITEM,
  SHOPPINGCART,
  DELETESHOPCARTDATA,
  INCREASEQUANTITY,
  DECREASEQUANTITY
} from "./actionType";

export const addToCart = (bike_data) => ({
  type: ADDTOCART,
  payload: bike_data,
});

export const addToHeart = (bike_data) => ({
  type: ADDTOHEART,
  payload: bike_data,
});

export const clickAccount = (con) => ({
  type: CLICKACCOUNT,
  payload: { con },
});

export const clickCart = (con) => ({
  type: CLICKCART,
  payload: { con },
});

export const clickHeart = (con) => ({
  type: CLICKHEART,
  payload: { con },
});

export const account = (con) => ({
  type: ACCOUNT,
  payload: { con },
});

export const deleteCartItem = (id) => ({
  type: DELETECARTITEM,
  payload: { id },
});

export const deleteHeartItem = (id) => ({
  type: DELETEHEARTITEM,
  payload: { id },
});

export const deleteAllHeartItem = () => ({
  type: DELETEALLHEART,
  payload: {},
});

export const shoppingCart = (data) => ({
  type: SHOPPINGCART,
  payload: { data },
});

export const deleteShopCartdata = (id) => ({
  type: DELETESHOPCARTDATA,
  payload: { id },
});

export const increaseQuantity = (id,count) => ({
  type: INCREASEQUANTITY,
  payload: { id,count },
});

export const decreaseQuantity = (id,count) => ({
  type: DECREASEQUANTITY,
  payload: { id,count },
});