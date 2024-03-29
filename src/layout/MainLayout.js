import React from "react";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import Category from "../components/Category/Category";
import SignupUser from "../components/SignupUser/SignupUser";
import LoginUser from "../components/LoginUser/LoginUser";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaymentSuccess from "../components/PaymentSuccess/PaymentSuccess";
import AdminLogin from "../components/AdminLogin/AdminLogin";
import CategoryProducts from "../components/CategoryProduct/CategoryProduct";
import AdminSignUp from "../components/AdminSignUp/AdminSignUp";
import AdminPanel from "../components/AdminPanel/AdminPanel";
import AdminCategory from "../components/AdminCategory/AdminCategory";
import AdminProduct from "../components/AdminProduct/AdminProduct";
import Order from "../components/Order/Order";
import AllUsers from "../components/AllUsers/AllUsers";
import AdminCategoryProduct from "../components/AdminCategoryProduct/AdminCategoryProduct";
import OrderSummary from "../components/orderSummary/OrderSummary";
import AdminProductById from "../components/AdminProductById/AdminProductById";
import MyOrders from "../components/MyOrders/MyOrders";

const MainLayout = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/SignupUser" element={<SignupUser />} />
                    <Route path="/login" element={<LoginUser />} />
                    <Route path="/categoryProducts/:id" element={<CategoryProducts />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/paymentSuccess" element={<PaymentSuccess />} />
                    <Route path="/adminLogin" element={<AdminLogin />} />
                    <Route path="/adminSignup" element={<AdminSignUp />} />
                    {/* <Route path="/adminPanel" element={<AdminPanel />} /> */}
                    <Route path="/adminPanel" element={<AdminCategory />} />
                    <Route path="/adminCategory" element={<AdminCategory />} />
                    <Route path="/adminProduct/:id" element={<AdminProduct />} />
                    <Route path="/adminCategoryProduct/:id" element={<AdminCategoryProduct />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/users" element={<AllUsers />} />
                    <Route path="/orderSummary/:id" element={<OrderSummary />} />
                    <Route path="/adminProductById/:id" element={<AdminProductById />} />
                    <Route path="/myOrders" element={<MyOrders />} />
                    <Route path="/" element={<>
                        <Category />
                        <CategoryBar />
                        <Footer />
                    </>} />
                </Routes>
            </Router>
        </>
    )
}

export default MainLayout