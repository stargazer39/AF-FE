import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart-slice'
import userSlice from './user-slice'
import orderSlice from './order-slice'

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
    order: orderSlice.reducer,
  },
})

export default store
