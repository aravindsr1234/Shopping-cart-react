import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { paymentDetails } from "../../features/payment/paymentSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import './paymentSuccess.css';

const PaymentSuccess = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    console.log(id);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const paymentData = useSelector((state) => state.payment.paymentDetails);
    const status = paymentData.status;
    if (paymentData.status === 'complete') {
        const editOrderStatus = axios.put(`http://localhost:4000/order/?id=${id}`, { status: status });
        console.log("after edit data in order collection", editOrderStatus);

    }

    useEffect(() => {
        dispatch(paymentDetails(id));
    }, [id]);

    return (
        <>
            <div className="paymentContainer">
                <div className="paymentIcon">
                    <i class="fa-solid fa-check"></i>
                </div>
                <h1 className="paymentHead">Payment Successful</h1>
                <h3>Payment Status: {paymentData.payment_status}</h3>
                <button onClick={() => navigate('/')}>Done</button>
            </div>
        </>
    );
};

export default PaymentSuccess;