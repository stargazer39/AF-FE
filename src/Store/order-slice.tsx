import { createSlice } from '@reduxjs/toolkit'
const REDUCE_AMMOUNT = 1 //number of items to reduce in

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    selectedOrder: {},
  },
  reducers: {
    //this function is to replace cart at he first load. will replace the total amount, total quantitiiy,
    // action.payload should have total quanitity, items, totalAmount
    replaceSelectedOrder(state: any, action: any) {
      state.selectedOrder = action.payload.order || undefined
    },
  },
})

export const orderActions = orderSlice.actions

export default orderSlice
