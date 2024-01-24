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
            <div className="order-summary-product">
                <table class="cart-table product-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody id="cartBody">
                        {data.cartData?.map((data, index) => (
                            <tr>
                                {/* <div className="order-Product" key={index}> */}
                                <td><img className="order-product-image" src={data.images[0]} alt="" /></td>
                                <td><h1>{data.productName}</h1></td>
                                <td><h1>{data.price}</h1></td>
                                <td><h1>{data.quantity}</h1></td>
                                {/* </div> */}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className="user-details">
                <h1>UserName : {data.userName}</h1>
                <h1>Status : {data.status}</h1>
            </div>
            <hr />
            <div className="order-summary-addresss">
                <div className="address-container">
                    <div>
                        <h1>BillingAddress : </h1>
                    </div>
                    <div>
                        <h1>{data.billingAddress?.line1}</h1>
                        <h1>{data.billingAddress?.city}</h1>
                        <h1>{data.billingAddress?.country}</h1>
                    </div>
                </div>
                <hr />
                <div className="address-container">
                    <div>
                        <h1>ShippinAddress :</h1>
                    </div>
                    <div>
                        <h1>{data.shippingAddress?.line1}</h1>
                        <h1>{data.shippingAddress?.city}</h1>
                        <h1>{data.shippingAddress?.country}</h1>
                        <h1>{data.shippingAddress?.postal_code}</h1>
                    </div>
                </div>
            </div>
            <div className="order-summary-footer">
            <DownloadOrderSummary data={data} />
            </div>
        </div>
    );
};

export default OrderSummary;