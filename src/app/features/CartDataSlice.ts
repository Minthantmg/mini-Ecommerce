import {createSlice} from "@reduxjs/toolkit";
import {cartItems, Products} from "../../../constants";
import {toast} from "@/components/ui/use-toast";
import {className} from "postcss-selector-parser";

const initialState = {
    cartData: cartItems,
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
        clearCart: (state) => {
            state.cartData = []
            toast({
                title: "Checkout successfully",
            });
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartData = state.cartData.filter((item) => item.id !== itemId)
        },
        increase: (state, {payload}) => {
            const cartData = state.cartData.find((item) =>
                item.id === payload)
            // @ts-ignore
            cartData.quantity += 1
        },
        decrease: (state, {payload}) => {
            const cartData = state.cartData.find((item) =>
                item.id === payload)
            // @ts-ignore
            cartData.quantity -= 1
        },
        calculateTotal: (state) => {
            let amount = 0
            let total = 0
            state.cartData.forEach((item) => {
                // @ts-ignore
                amount += item.quantity
                // @ts-ignore
                total += item.quantity * item.price
            })
            state.total = total
        }
    },
});


export const {
    addItemToCart, clearCart,
    removeItem,increase,
    decrease,calculateTotal
} = cartDataSlice.actions;
export default cartDataSlice.reducer
