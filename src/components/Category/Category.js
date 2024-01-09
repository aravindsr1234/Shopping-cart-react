import './Category.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from "../../features/category/categorySlice";

const Category = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getCategoryData = useSelector((state) => { return state.category.getCategoryData })
    console.log(getCategoryData);

    useEffect(() => {
        const data = dispatch(getCategory("hello"));
        console.log(data)
    }, [dispatch]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const hello = (id) => {
        console.log(id)
        navigate(`/categoryProducts/${id}`);
    }

    return (
        <div className="category-slider" >
            <Slider {...sliderSettings}>
                {getCategoryData.map((data, index) => (
                    <div key={index} className="category" onClick={() => hello(data.id)}>
                        <img src={data.image} alt={data.category} />
                        <div className="category_content">
                            <h1>{data.categoryName}</h1>
                            <h5>+ Explore</h5>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Category;
