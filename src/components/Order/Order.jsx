import { useEffect, useState } from "react";
import { getOrder } from "../../features/order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import OrderProductBtn from "../OrderProductBtn/OrderProductBtn";
import Search from "../Search/Search";
import { format } from 'date-fns';
import './Order.css';

const Order = () => {
    const dispatch = useDispatch();

    // const [data, setData] = useState([]);
    const [orderData, setOrderData] = useState([false]);
    console.log('orderData', orderData);

    const data = useSelector((state) => state.order.orderData);
    
    useEffect(() => {
        
        dispatch(getOrder());
    }, [dispatch]);

    useEffect(() => {
        setOrderData(data)
    }, [data]);

    return (
        <>
            <Search />
            {orderData ?
                <div className="order_table">
                    <table>
                        <thead>
                            <tr>
                                <th>OrderId</th>
                                {/* <th>email</th> */}
                                <th>UserName</th>
                                <th>status</th>
                                <th>Order button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderData.map((data, index) => (
                                <tr>
                                    <td>{data._id}</td>
                                    {/* <td>{data.email}</td> */}
                                    <td>{data.userName}</td>
                                    <td>{data.status}</td>
                                    <td><OrderProductBtn data={data.cartData} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> : ""}
        </>
    );
};

export default Order;