import { createSlice } from "@reduxjs/toolkit";
const REDUCE_AMMOUNT = 1; //number of items to reduce in

const postSlice = createSlice({
  name: "post",
  initialState: {
    selectedPost: {},
  },
  reducers: {
    //this function is to replace cart at he first load. will replace the total amount, total quantitiiy,
    // action.payload should have total quanitity, items, totalAmount
    replaceSelectedPost(state: any, action: any) {
      state.selectedPost = action.payload.post || undefined;
    },
  },
});

export const orderActions = postSlice.actions;

export default postSlice;
