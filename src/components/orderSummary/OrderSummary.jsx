import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../features/order/orderSlice";
import { useParams } from "react-router-dom";
import './OrderSummary.css';
import DownloadOrderSummary from "../DownloadOrderSummary/DownloadOrderSummary";


const OrderSummary = () => {
    const dispatch = useDispatch();
    let { id } = useParams();
    const [datas, setData] = useState();

    const data = useSelector((state) => state.order.orderData);
    console.log('data', datas);

    useEffect(() => {
        setData(data);
        dispatch(getOrderById(id))
    }, [dispatch])

    return (
        <div className="order-summary">
            {data.cartData?.map((data, index) => (
                <div className="order-Product" key={index}>
                    <img src={data.images[0]} alt="" />
                    <h1>{data.productName}</h1>
                    <h1>{data.price}</h1>
                    <h1>{data.quantity}</h1>
                </div>
            ))}
            <div className="user-details">
                <h1>{data.userName}</h1>
                <h1>{data.status}</h1>
                <h1>{data.totalPrice}</h1>
            </div>
            <div className="address-container">
                <h1>{data.billingAddress?.line1}</h1>
                <h1>{data.billingAddress?.city}</h1>
                <h1>{data.billingAddress?.country}</h1>
            </div>
            <div className="address-container">
                <h1>{data.shippingAddress?.line1}</h1>
                <h1>{data.shippingAddress?.city}</h1>
                <h1>{data.shippingAddress?.country}</h1>
                <h1>{data.shippingAddress?.postal_code}</h1>
            </div>
                <DownloadOrderSummary data={data}/>
        </div>
    );
};

export default OrderSummary;