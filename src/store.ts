import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./app/features/CartSlice"

export const store = configureStore({
    reducer:{
        cart : cartReducer,
    },
})