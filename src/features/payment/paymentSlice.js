import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const paymentDetails = createAsyncThunk(
    'payment',
    async (id) => {
        const response = await axios.get(`http://localhost:4000/payment/?id=${id}`);
        // console.log(response);
        return response.data;
    }
);

const initialState = {
    paymentDetails: [],
    status: '',
};

const paymentSlice = createSlice({
    name: 'payments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(paymentDetails.pending, (state) => {
                state.status = "loading";
            })
            .addCase(paymentDetails.fulfilled, (state, action) => {
                state.status = "success";
                state.paymentDetails = action.payload;
            })
            .addCase(paymentDetails.rejected, (state) => {
                state.status = "failed";
            })
    },
});

export default paymentSlice.reducer;