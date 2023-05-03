import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import userSlice from "./user-slice";
import postSlice from "./post-slice";
import groupSlice from "./group-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    post: postSlice.reducer,
    group: groupSlice.reducer,
  },
});

export default store;
