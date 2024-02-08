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

// export const getAllUsers = createAsyncThunk(
//     'getUser',
//     async () => {
//         const response = await axios.get(`http://localhost:4000/user`);
//         console.log(response);
//         return response.data;
//     }
// );
export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async ({ currentPage, searchValue, itemsPerPage }) => {
        try {
            const response = await axios.get(`http://localhost:4000/user?page=${currentPage}&size=${itemsPerPage}&search=${searchValue}`);
            console.log("resoponse.log", response.data);
            const { users, usersCount } = response.data;
            console.log("users, count", users, usersCount);
            return { users, totalUsers: usersCount[0].totalCount };
        } catch (error) {
            throw new Error('Failed to retrieve users');
        }
    }
);

const initialState = {
    user: [],
    getAllUser: [],
    searchValue: [""],
    totalUsers: 0,
    currentPage: 1,
    itemsPerPage: 4,
    searchValue: '',
    status: 'idle',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
    },
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

            // .addCase(getAllUsers.pending, (state) => {
            //     state.status = "loading";
            // })
            // .addCase(getAllUsers.fulfilled, (state, action) => {
            //     state.status = "success";
            //     state.getAllUser = action.payload;
            // })
            // .addCase(getAllUsers.rejected, (state) => {
            //     state.status = "failed";
            // })
            .addCase(getAllUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log(action.payload.users);
                state.user = action.payload.users;
                state.totalUsers = action.payload.totalUsers;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setCurrentPage, setSearchValue } = userSlice.actions
export default userSlice.reducer;