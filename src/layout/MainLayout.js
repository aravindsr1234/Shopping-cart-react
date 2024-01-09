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
import CategoryProducts from "../components/CategoryProduct/CategoryProduct";

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