import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoryRow = createAsyncThunk(
    'categoryRow/getCategoryRow',
    async (id) => {
        const response = await axios.get(`http://localhost:4000/product`);
        console.log(response.data);
        return response.data;
    },
);

const initialState = {
    getCategoryRow: [],
    status: 'idle',
};

const categoryRowSlice = createSlice({
    name: 'categoryRow',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoryRow.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getCategoryRow.fulfilled, (state, action) => {
                state.status = "success";
                state.getCategoryRow = action.payload;
            })
            .addCase(getCategoryRow.rejected, (state) => {
                state.status = "failed";
            })
    },
});

export default categoryRowSlice.reducer;
