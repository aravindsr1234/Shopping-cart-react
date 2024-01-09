import './CategoryProduct.css';
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryRow } from "../../features/categoryRowSlice/categoryRowSlice";

const CategoryProducts = () => {
    const { id } = useParams();
    let categoryId = id;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryRow(id));
    }, [id, dispatch]);

    const product = useSelector((state) => state.categoryRow.getCategoryRow);
    console.log(product);

    const filterData = product.filter((filter) => (filter.categoryId === categoryId));

    const productById = async (id) => {
        console.log(id);
        navigate(`/product/${id}`);
    }

    return (
        <div className="product_layout">
            {Array.isArray(filterData) ? (
                filterData.map((product, index) => (
                    <div className="products" key={index} onClick={() => { productById(product._id) }}>
                        <img src={product.images[0]} alt="" />
                        <div className="product_content">
                            <h1>{product.productName}</h1>
                            <h2>13th Gen Laptops</h2>
                            <h3>Rs:{product.price}</h3>
                        </div>
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
}

export default CategoryProducts;
