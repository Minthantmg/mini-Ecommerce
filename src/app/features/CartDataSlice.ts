import {createSlice} from "@reduxjs/toolkit";
import {cartItems, Products} from "../../../constants";

const initialState = {
    cartData: cartItems,
    amount: 1,
    total: 0,
    isLoading: true,
};
const cartDataSlice = createSlice({
    name: 'cartData',
    initialState,
    reducers: {},
});

export default cartDataSlice.reducer
