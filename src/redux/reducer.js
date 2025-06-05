import { combineReducers } from "@reduxjs/toolkit";
import data from "../data/data";
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
  DECREASEQUANTITY,
} from "./actionType";

const productReducer = (state = data, action) => {
  switch (action.type) {
    case CLICKACCOUNT:
      return { ...state, showAccount: action.payload.con };
    case CLICKCART:
      return { ...state, showCart: action.payload.con };
    case CLICKHEART:
      return { ...state, showHeart: action.payload.con };
    case ACCOUNT:
      return { ...state, isHaveAccount: action.payload.con };
    default:
      return state;
  }
};

const addToCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADDTOCART:
      if (state.find((item) => item.id === action.payload.id)) {
        return state.map((item) => {
          if (
            item.id === action.payload.id &&
            item.quantity === action.payload.stock
          ) {
            return { ...item, quantity: item.quantity + 1, clickable: false };
          } else if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      return [
        ...state,
        {
          id: action.payload.id,
          img: action.payload.img,
          price: action.payload.price,
          name: action.payload.pd_name,
          quantity: 1,
          frame_size: action.payload.frame_size,
          clickable: true,
        },
      ];
    case DELETECARTITEM:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

const addToHeartReducer = (state = [], action) => {
  switch (action.type) {
    case ADDTOHEART:
      return [
        ...state,
        {
          id: action.payload.id,
          img: action.payload.img,
          price: action.payload.price,
          name: action.payload.pd_name,
        },
      ];
    case DELETEHEARTITEM:
      return state.filter((item) => item.id !== action.payload.id);
    case DELETEALLHEART:
      return state.splice();
    default:
      return state;
  }
};

const shoppingCartReducer = (state = [], action) => {
  switch (action.type) {
    case SHOPPINGCART:
      return [...action.payload.data];
    case DELETESHOPCARTDATA:
      return state.filter((item) => item.id !== action.payload.id);
    case INCREASEQUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.count }
          : item
      );
    case DECREASEQUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: (item.quantity -= action.payload.count) }
          : item
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: addToCartReducer,
  heart: addToHeartReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
