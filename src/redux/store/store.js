import { configureStore } from "@reduxjs/toolkit";
import totalProductsReducer from "../slices/totalProductsSlice";
import authReducer from "../slices/authSlice";
import cartReducer from "../slices/cartSlice";
import favouriteReducer from "../slices/favouriteSlice";
import redeemCodeReducer from "../slices/redeemSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    totalProducts: totalProductsReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    redeemCode: redeemCodeReducer,
  },
});
