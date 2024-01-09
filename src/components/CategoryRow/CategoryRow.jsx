import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryRow } from "../../features/categoryRowSlice/categoryRowSlice";

const CategoryRow = ({ categoryId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector((state) => state.categoryRow.getCategoryRow)
    console.log("fetch data from categoryRow", data);

    useEffect(() => {
        const data = dispatch(getCategoryRow(categoryId));
    }, [categoryId, dispatch])

    const filt = data.filter((filter) => (filter.categoryId === categoryId))
    console.log(filt);

    const productById = async (id) => {
        console.log(id);
        navigate(`/product/${id}`);
    }

    return (
        <div className="product-flux">
            {filt.map((item, index) => (
                <div className="products" onClick={() => { productById(item._id) }}>
                    <div>
                        <img src={item.images[0]} alt="" />
                        <div className="product_content">
                            <h1>{item.productName}</h1>
                            <h2>13th Gen Laptops</h2>
                            <h3>Rs:{item.price}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default CategoryRow;

