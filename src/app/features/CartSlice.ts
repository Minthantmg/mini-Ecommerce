import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {useProducts} from "../../../hook/useProducts";


export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    console.log(data)
    return data.json()
})
const initialState = {
    data: [],
    isLoading: false,
    error: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default cartSlice.reducer;
