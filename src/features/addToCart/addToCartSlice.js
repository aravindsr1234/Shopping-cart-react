import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cart: [],
    getCarts: [],
    cartData: [],
    count: '',
    status: 'idle',
};

export const getCart = createAsyncThunk(
    'getCart',
    async (id) => {
        if (!id) {
            return 0
        }
        const res = await axios.get(`http://localhost:4000/cart/cartById/?id=${id}`);
        return res.data;
    },
);

export const cart = createAsyncThunk(
    'createCart',
    async (data) => {
        console.log(data);
        const res = await axios.post('http://localhost:4000/cart/createCart', data);
        console.log(res.data);
        return res.data;
    },
);

export const cartData = createAsyncThunk(
    'getCartData',
    async () => {
        const res = await axios.get('http://localhost:4000/cart');
        console.log(res);
        return res.data;
    },
);

export const quantityCount = createAsyncThunk(
    'count',
    async ({ id, quantityCounts }) => {
        console.log("start", id, quantityCounts);
        const res = await axios.put(`http://localhost:4000/product/?id=${id}`, { quantity: quantityCounts });
        console.log(res);
        return res.data;
    },
);

const cartSlice = createSlice({
    name: 'createCart',
    initialState,
    reducers: {
        increment: (state, action) => {
            const id = action.payload;
            const item = state.getCarts[0].items.product.find((item) => item._id === id);
            if(item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const id = action.payload;
            const item = state.getCarts[0].items.product.find((item) => item._id === id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(cart.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(cart.fulfilled, (state, action) => {
                state.status = "success";
                state.cart = action.payload;
            })
            .addCase(cart.rejected, (state) => {
                state.status = "failed";
            })

            .addCase(getCart.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.getCarts = action.payload;
            })
            .addCase(getCart.rejected, (state) => {
                state.status = "Failed";
            })

            .addCase(cartData.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(cartData.fulfilled, (state, action) => {
                state.cartData = action.payload;
            })
            .addCase(cartData.rejected, (state) => {
                state.status = "Failed";
            })

            .addCase(quantityCount.pending, (state) => {
                state.status = "Loading";
            })
            .addCase(quantityCount.fulfilled, (state, action) => {
                state.count = action.payload;
            })
            .addCase(quantityCount.rejected, (state) => {
                state.status = "Failed";
            })
    },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;