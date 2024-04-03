import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./app/features/CartSlice"
import cartDataReducer from './app/features/CartDataSlice'

export const store = configureStore({
    reducer:{
        cart : cartReducer,
        cartData : cartDataReducer
    },
})