import {createSlice} from "@reduxjs/toolkit";
import {cartItems, Products} from "../../../constants";

const initialState = {
    cartData: cartItems,
    quantity: 0,
    total: 0,
    isLoading: true,
};
const cartDataSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            // @ts-ignore
            state.cartData.push({...action.payload});
        },
    },
});

export const {addItemToCart} = cartDataSlice.actions;
export default cartDataSlice.reducer
