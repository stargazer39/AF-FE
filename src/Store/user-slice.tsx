import { createSlice } from '@reduxjs/toolkit'
const REDUCE_AMMOUNT = 1 //number of items to reduce in

const userSlice = createSlice({
  name: 'user',
  initialState: {
    customer: undefined,
  },
  reducers: {
    //this function is to replace cart at he first load. will replace the total amount, total quantitiiy,
    // action.payload should have total quanitity, items, totalAmount
    replaceCustomer(state: any, action: any) {
      state.customer = action.payload.customer || undefined
    },
  },
})

export const userActions = userSlice.actions

export default userSlice
