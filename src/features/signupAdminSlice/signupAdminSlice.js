import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createAdmin = createAsyncThunk(
    'admin',
    async (data) => {
        const response = await axios.post('http://localhost:4000/admin/register', data);
        console.log(response.data);
        return response.data;
    }
)

const initialState = {
    admin: [],
    status: '',
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createAdmin.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createAdmin.fulfilled, (state, action) => {
                state.status = "success";
                state.admin = action.payload;
            })
            .addCase(createAdmin.rejected, (state) => {
                state.status = "failed";
            })
    },
});

export default adminSlice.reducer;