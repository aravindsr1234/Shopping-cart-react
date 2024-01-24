import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrder = createAsyncThunk(
    'order',
    async () => {
        const response = await axios.get(`http://localhost:4000/order`);
        console.log('response', response);
        return response.data;
    }
);

export const getOrderById = createAsyncThunk(
    'orderById',
    async (id) => {
        const response = await axios.get(`http://localhost:4000/order/?id=${id}`);
        console.log('response', response);
        return response.data;
    }
);

export const findById = createAsyncThunk(
    'findById',
    async (id) => {
        console.log(id);
        const response = await axios.get(`http://localhost:4000/order/orderById/?id=${id}`);
        console.log('response', response);
        return response.data;
    }
);

const initialState = {
    orderData: [],
    status: 'idle',
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrder.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.status = "success";
                state.orderData = action.payload;
            })
            .addCase(getOrder.rejected, (state) => {
                state.status = "failed";
            })

            .addCase(getOrderById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getOrderById.fulfilled, (state, action) => {
                state.status = "success";
                state.orderData = action.payload;
            })
            .addCase(getOrderById.rejected, (state) => {
                state.status = "failed";
            })

            .addCase(findById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(findById.fulfilled, (state, action) => {
                state.status = "success";
                state.orderData = action.payload;
            })
            .addCase(findById.rejected, (state) => {
                state.status = "failed";
            })
    }
});

export default orderSlice.reducer;