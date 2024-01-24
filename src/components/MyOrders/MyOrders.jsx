import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findById } from "../../features/order/orderSlice";
import './MyOrders.css';

const MyOrders = () => {
    const dispatch = useDispatch();

    const userId = JSON.parse(localStorage.getItem('userId'));

    const data = useSelector((state) => state.order.orderData);
    console.log(data);

    useEffect(() => {
        dispatch(findById(userId));
    }, [dispatch, userId]);

    return (
        <div className="myorder-container">
            <h1>MyOrders</h1>
            {data.map((data, index) => (
                <div className="myorder-data">
                    <table class="cart-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody id="cartBody">
                            {data.cartData.map((data) => (
                                <>
                                    <tr>
                                        <td><img className="myOrder-image" src={data.images[0]} alt="" /></td>
                                        <td>{<h1>{data.productName}</h1>}</td>
                                        <td>{<h1>{data.price}</h1>}</td>
                                        <td>{<h1>{data.quantity}</h1>}</td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                    {<h1>UserName : {data.userName}</h1>}
                    {<h1>status : {data.status}</h1>}
                    {<h1>TotalPrice : {data.totalPrice}</h1>}
                    {<h1>BillingAddress : {data.billingAddress.line1 + " " + data.billingAddress.city + " " + data.billingAddress.country}</h1>}
                    {<h1>ShippingAddress : {data.shippingAddress.line1 + " " + data.shippingAddress.city + " " + data.shippingAddress.country}</h1>}
                </div>
            ))}
        </div>
    );
};

export default MyOrders;