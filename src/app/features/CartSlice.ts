import { createSlice } from "@reduxjs/toolkit";
import {cartItems, Products} from "../../../constants";

const initialState = {
    cartItems: Products,
    amount: 1,
    total: 0,
    isLoading: true,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload);
            state.total = state.cartItems.reduce((acc, item) => {
                const price = parseFloat(item.price);
                return acc + (price * item.quantity);
            }, 0);
        },
    },
});

export default cartSlice.reducer
