import { createSlice } from "@reduxjs/toolkit";
const REDUCE_AMMOUNT = 1; //number of items to reduce in

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: undefined,
    selectedUser: undefined,
  },
  reducers: {
    //this function is to replace cart at he first load. will replace the total amount, total quantitiiy,
    // action.payload should have total quanitity, items, totalAmount
    replaceUser(state: any, action: any) {
      state.currentUser = action.payload.currentUser || undefined;
    },
    replaceSelectedUser(state: any, action: any) {
      state.selectedUser = action.payload.selectedUser || undefined;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
