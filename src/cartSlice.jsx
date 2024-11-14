import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "mycart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      state.cart.push(actions.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
