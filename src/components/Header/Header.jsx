import React from "react";
import './Header.css';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="outer-layout">
            <div className="container">
                <header>
                    <div className="header_logo">
                        <a href="/"><h3>Shop-Cart</h3></a>
                    </div>
                    <div className="header_category">
                        <a href="/h"><h4 className="hover_effect">Laptop</h4></a>
                        <a href="/home"><h4 className="hover_effect">Mobiles</h4></a>
                        <a href="/home"><h4 className="hover_effect">Watches</h4></a>
                        <a href="/home"><h4 className="hover_effect">Books</h4></a>
                        <a href="/home"><h4 className="hover_effect">Sports</h4></a>
                    </div>
                    <div className="header_search">
                        <button className="header_search_icon"><i class="fa-solid fa-magnifying-glass"></i></button>
                        <input type="search" className="search" placeholder="Search" />
                    </div>
                    <div className="header_actions">
                        <div className="header_profile">
                            <h6>Profile</h6>
                        </div>
                        <div className="header_wishlist">
                            <h6>Wishlist</h6>
                        </div>
                        <div className="header_bag">
                            <button className="CartButton" onClick={() => navigate('/cart')}>Cart</button>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;