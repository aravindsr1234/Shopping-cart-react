import React, { useEffect } from "react";
import './categoryBar.css';
import { useSelector } from "react-redux";
import CategoryRow from "../CategoryRow/CategoryRow";

const CategoryBar = () => {

    const data = useSelector((state) => state.category.getCategoryData);

    return (
        <div className="container categoryBar">
            {data.map((category, index) => (
                <div key={index} className="categoryRow">
                    <h1>{category.categoryName} <a href={`/categoryProducts/${category.id}`}>See all</a></h1>
                    <CategoryRow categoryId={category.id} />
                </div>
            ))}
        </div>
    );
};

export default CategoryBar;
