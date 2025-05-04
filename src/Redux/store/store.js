import { configureStore } from "@reduxjs/toolkit";
import bikeReducer from "../slices/bikeSlice";
import authReducer from "../slices/authSlice";
import cartReducer from "../slices/cartSlice";
import favouriteReducer from "../slices/favouriteSlice";
import redeemCodeReducer from "../slices/redeemSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    bikes: bikeReducer,
    cart: cartReducer,
    favourite: favouriteReducer,
    redeemCode: redeemCodeReducer,
  },
});
