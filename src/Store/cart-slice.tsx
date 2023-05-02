import { createSlice } from '@reduxjs/toolkit'
const REDUCE_AMMOUNT = 1 //number of items to reduce in

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartId: undefined,
    items: [],
    subTotal: 0,
    shippingCost: 0,
    customerID: undefined,
    totalAmount: 0,
    totalQuantitiy: 0,
    changed: false,
  },
  reducers: {
    //this function is to replace cart at he first load. will replace the total amount, total quantitiiy,
    // action.payload should have total quanitity, items, totalAmount
    replaceCart(state: any, action: any) {
      console.log('from slice', action.payload)
      state.cartId = action.payload._id || undefined
      state.subTotal = action.payload.subTotal || 0
      state.items = action.payload.products || []
      state.totalAmount =
        action.payload.subTotal + action.payload.shippingCost || 0
      state.shippingCost = action.payload.shippingCost || 0
      state.customerID = action.payload.customerId || undefined
      state.totalQuantitiy = action.payload.products.reduce(
        (acc: any, item: any) => acc + item.quantity,
        0,
      )
    },

    //this function is for add item
    //requiers a object with item details. for payload.item a item with amount. payload.amount is amount to increase
    //return void
    addItem(state: any, action: any) {
      state.totalAmount += action.payload.price
      state.subTotal += action.payload.price
      state.totalQuantitiy += 1
      state.changed = true
      let found = false
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].productId === action.payload.id) {
          state.items[i].quantity += 1
          found = true
          return
        }
      }

      if (!found) {
        state.items.push({ productId: action.payload.id, quantity: 1 })
      }
    },
    removeItem(state: any, action: any) {
      //payload=itme that needs to change
      state.totalAmount -= action.payload.price
      state.subTotal -= action.payload.price
      state.totalQuantitiy -= 1
      state.changed = true
      let isZero = false
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].productId === action.payload.id) {
          state.items[i].quantity -= 1
          console.log('this ran')
          if (state.items[i].quantity < 1) {
            isZero = true
          }
          break
        }
      }
      if (isZero) {
        state.items = state.items.filter((item: any) => item.quantity > 0)
      }
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice
