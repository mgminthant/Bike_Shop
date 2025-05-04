import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  avaliableCodes: [
    {
      code: "save20",
      discountValue: 20,
      discountType: "fixed",
    },
    {
      code: "save20%",
      discountValue: 20,
      discountType: "percentage",
    },
  ],
  usedCodes: [],
  discount: {
    type: "",
    value: 0,
  },
  message: "",
};

const redeemCodeSlice = createSlice({
  name: "redeemCode",
  initialState,
  reducers: {
    redeemCodeFn: (state, action) => {
      const code = action.payload.trim().toLowerCase();
      const validCode = state.avaliableCodes.find(
        (redeem) => redeem.code.toLowerCase().trim() === code
      );

      if (validCode) {
        if (state.usedCodes.includes(code)) {
          state.message = "You have already used this code!";
          return;
        }

        state.usedCodes.push(code);
        state.message = "Redeem Success!";

        state.discount.type = validCode.discountType;
        state.discount.value = validCode.discountValue;
      } else {
        state.message = "Invalid Redeem Code!";
      }
    },
    resetRedeemState: (state) => {
      state.discount = { type: "", value: 0 };
      state.message = "";
    },
  },
});

export const { redeemCodeFn, resetRedeemState } = redeemCodeSlice.actions;

export default redeemCodeSlice.reducer;
