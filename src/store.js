import { configureStore } from "@reduxjs/toolkit";
import paymentSlice from "./features/payment/paymentSlice";
import productSlice from "./features/product/productSlice";
import categorySlice from "./features/category/categorySlice";
import addToCartSlice from "./features/addToCart/addToCartSlice";
import signupUserSlice from "./features/signupUserSlice/signupUserSlice";
import categoryRowSlice from "./features/categoryRowSlice/categoryRowSlice";
import signupAdminSlice from "./features/signupAdminSlice/signupAdminSlice";
import order from "./features/order/orderSlice";

const store = configureStore({
    reducer: {
        category: categorySlice,
        categoryRow: categoryRowSlice,
        product: productSlice,
        user: signupUserSlice,
        cart: addToCartSlice,
        payment: paymentSlice,
        admin: signupAdminSlice,
        order: order,
    },
});

export default store;