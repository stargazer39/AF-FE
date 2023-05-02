import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import userSlice from "./user-slice";
import postSlice from "./post-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    post: postSlice.reducer,
  },
});

export default store;
