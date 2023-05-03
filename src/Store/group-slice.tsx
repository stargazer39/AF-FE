import { createSlice } from "@reduxjs/toolkit";
const REDUCE_AMMOUNT = 1; //number of items to reduce in

const groupSlice = createSlice({
  name: "group",
  initialState: {
    selectedGroup: undefined,
  },
  reducers: {
    //this function is to replace cart at he first load. will replace the total amount, total quantitiiy,
    // action.payload should have total quanitity, items, totalAmount
    replaceSelectedGroup(state: any, action: any) {
      state.selectedGroup = action.payload.selectedGroup || undefined;
    },
  },
});

export const groupActions = groupSlice.actions;

export default groupSlice;
