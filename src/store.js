import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/productSlice";
import categorySlice from "./features/category/categorySlice";
import addToCartSlice from "./features/addToCart/addToCartSlice";
import signupUserSlice from "./features/signupUserSlice/signupUserSlice";
import categoryRowSlice from "./features/categoryRowSlice/categoryRowSlice";

const store = configureStore({
    reducer: {
        category: categorySlice,
        categoryRow: categoryRowSlice,
        product: productSlice,
        user: signupUserSlice,
        cart: addToCartSlice,
    },
});

export default store;