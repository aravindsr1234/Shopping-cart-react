import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
    'user',
    async (data) => {
        const response = await axios.post(`http://localhost:4000/user`, data);
        console.log(response.data);
        return response.data
    },
);

export const getAllUsers = createAsyncThunk(
    'getUser',
    async () => {
        const response = await axios.get(`http://localhost:4000/user`);
        return response.data;
    }
)

const initialState = {
    user: [],
    getAllUser: [],
    status: 'idle',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.status = "success";
                state.user = action.payload;
            })
            .addCase(createUser.rejected, (state) => {
                state.status = "failed";
            })

            .addCase(getAllUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.status = "success";
                state.getAllUser = action.payload;
            })
            .addCase(getAllUsers.rejected, (state) => {
                state.status = "failed";
            })
    },
});

export default userSlice.reducer;