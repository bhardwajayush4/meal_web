import { createSlice } from "@reduxjs/toolkit";

const CartUiSlice = createSlice({
    name:'CartUiSlice',
    initialState:{cartIsVisible: false},
    reducers:{
        toggle(state,action){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
}) 
export const CartUiActions = CartUiSlice.actions;
export default CartUiSlice  