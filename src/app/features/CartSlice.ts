import { createSlice } from "@reduxjs/toolkit";
import {Products} from "../../../constants";

const initialState = {
    cartItems: Products,
    amount: 0,
    total: 0,
    isLoading: true,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {}
});

export default cartSlice.reducer
