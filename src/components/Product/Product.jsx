import './product.css';
import { useParams } from "react-router-dom";
import AddToCart from '../AddToCart/AddToCart';
import React, { useEffect, useState } from "react";
import CategoryBar from "../CategoryBar/CategoryBar";
import { useDispatch, useSelector } from 'react-redux';
import { product } from '../../features/product/productSlice';

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch()

    let [count, setCount] = useState("0");

    const images = [];

    const productData = useSelector((state) => state.product.productById);

    if (Array.isArray(productData.images)) {
        images.push(...productData.images);
    } else {
        console.log("productData.images is not an array");
    }
    console.log(images[0])

    useEffect(() => {
        const data = dispatch(product(id));
    }, [id])

    const decrease = () => {
        if (count <= 0) {
            count++
        }
        count--;
        setCount(count);
        console.log(count);
    }

    console.log(images.length);
    const increase = () => {
        if (count >= images.length - 1) {
            count--
        }
        count++;
        setCount(count);
        console.log(count);
    };

    return (
        <div className="product">
            <div className="productImages">
                <div className="sideImages">
                    {Array.isArray(productData.images) ? (
                        productData.images.map((image, index) => (
                            <img key={index} src={image} alt="" className="product_sideImage" onClick={() => setCount(index)} />
                        ))
                    ) : ("")}
                </div>
                <div className="image">
                    <button className="leftSideImage" onClick={decrease}><i class="fa-solid fa-chevron-left"></i></button>
                    <img src={images[count]} alt="" className="product_mainImage" />
                    <button className="rightSideImage" onClick={increase}><i class="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className="product_details">
                    <h1 className="productName">{productData.productName}</h1>
                    <h3 className="productDescription">{productData.description}</h3>
                    <hr />
                    <h1 className="productPrice"><i class="fa-solid fa-indian-rupee-sign"></i>{productData.price} MRP <del>300</del></h1>
                    <div className="product_actions">
                        <AddToCart />
                        <button className="productBuy">BUY NOW</button>
                    </div>
                    <hr />
                </div>
            </div>
            <CategoryBar />
        </div>
    );
};

export default Product;
