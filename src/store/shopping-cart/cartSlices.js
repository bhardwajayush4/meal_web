import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalquantity: 0,
    totalamount: 0,
}

const cartSlices = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addItemCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalquantity++;

            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalprice: newItem.price,
                })
                console.log(existingItem)
            }

            else {
                existingItem.quantity++;
                existingItem.totalprice = existingItem.totalprice + newItem.price
            }

            state.totalamount = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
        },

        removeItemCart(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalquantity--

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
                state.quantity--
            }
            else {
                existingItem.quantity--
                existingItem.totalprice = existingItem.totalprice - existingItem.price
            }

            state.totalamount = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
        },

        deleteItem(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalquantity--;

            if (existingItem) {
                state.items = state.items.filter(item => item.id !== id)
            }
            state.totalamount = state.items.reduce((total, item) => total + item.price * item.quantity, 0)
        }
    }
});

export const CartActions = cartSlices.actions

export default cartSlices