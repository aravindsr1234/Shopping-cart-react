import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const category_URL = 'http://localhost:4000';

export const getCategory = createAsyncThunk(
    'category/getCategory',
    async () => {
        const response = await axios.get(category_URL);
        console.log(response);
        return response.data;
    },
);

const initialState = {
    getCategoryData: [],
    status: 'idle',
    error: null,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.status = "success";
                state.getCategoryData = action.payload;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
    },
});

export default categorySlice.reducer;