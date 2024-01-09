import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:4000/product?id="

export const product = createAsyncThunk(
    'product',
    async (id) => {
        if (!id) {
            const response = await axios.get('http://localhost:4000/product');
            console.log(response);
            return response.data;
        }
        const response = await axios.get(url + `${id}`);
        console.log(response.data);
        return response.data;
    }
)

const initialState = {
    productById: [],
    status: 'idle',
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(product.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(product.fulfilled, (state, action) => {
                state.productById = action.payload;
            })
            .addCase(product.rejected, (state, action) => {
                state.status = "failed";
            })
    },
});

export default productSlice.reducer;