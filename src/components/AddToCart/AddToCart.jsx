import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCart, cart, cartData } from "../../features/addToCart/addToCartSlice";
import axios from "axios";

const AddToCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cartBtn, setCartBtn] = useState(true);
    const [data, setData] = useState([]);
    const [userIdCart, setUserIdCart] = useState('');
    console.log("userIDCart", userIdCart);
    const [cartDataStore, setCartDataStore] = useState([]);
    const [cartDatas, setCartDatas] = useState({
        userId: '',
        productIds: '',
    });
    const productId = useSelector((state) => state.product.productById._id);
    const userId = JSON.parse(localStorage.getItem('userId'));
    console.log("userId",userId);
    const products = useSelector((state) => state.cart.getCarts);
    const carts = useSelector((state) => state.cart);

    useEffect(() => {
        setUserIdCart(userId);
        dispatch(getCart(userId));
        if (!userId) {
        }
        dispatch(cartData());
        setCartDatas({ userId: userIdCart, productIds: productId });
    }, [dispatch, productId]);

    useEffect(() => {
        if (products && products.length > 0 && products[0].items) {
            setData(products[0].items.product)
        } else {
        }
        if (products && products.length > 0 && products[0]._id) {
            setUserIdCart(products[0]._id);
        }
        setBtn()
    }, [products]);

    // useEffect(() => {
    //     setBtn();
    // }, [setBtn]);

    function setBtn() {
        const result = data.findIndex(data => data._id === productId);
        if (result === -1) {
            setCartBtn(true);
        }
        else {
            setCartBtn(false);
        }
    }
    console.log(cartBtn);

    const addCart = () => {
        setCartBtn(false);
        const token = JSON.parse(localStorage.getItem('token'));
        if (!token) {
            navigate('/login');
            return;
        }
        dispatch(cart(cartDatas));
    };

    return (
        <div>
            {cartBtn ? (
                <button className="productBag" onClick={addCart}>
                    ADD TO BAG
                </button>
            ) : (
                <button className="productBag" onClick={() => navigate('/cart')}>
                    GO TO BAG
                </button>
            )}
        </div>
    );
};

export default AddToCart;
