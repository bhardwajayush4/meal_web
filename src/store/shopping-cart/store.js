import { configureStore } from '@reduxjs/toolkit'
import cartSlices from './cartSlices';
import CartUiSlice from './cart-Product';

const store = configureStore({
    reducer:{
        cart: cartSlices.reducer,
        UiCart: CartUiSlice.reducer
    }
})

export default store;