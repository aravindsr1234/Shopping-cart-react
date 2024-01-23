import { useState } from "react";
import './OrderProductBtn.css';

const OrderProductBtn = ({ data }) => {
    const [OrderData, setDatat] = useState(data);
    console.log(OrderData);
    if (data) {
        {
            data.map((data) => (
                console.log(data)
            ))
        }
    };
    const [orderPdtModal, setOrderPdtModal] = useState(false)
    return (
        <>
            <button onClick={() => setOrderPdtModal(true)}>Product Details</button>
            <div className={orderPdtModal ? 'modal-container active' : 'modal-container'}>
                {orderPdtModal && (
                    <div className="modal-content">
                        <i onClick={() => setOrderPdtModal(false)} class="fa-regular fa-circle-xmark"></i>
                        <table className="product-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item, index) => (
                                    <tr key={index} className="product-details">
                                        <td><img src={item.images[0]} alt="" className="product-image" /></td>
                                        <td className="product-name">{item.productName}</td>
                                        <td className="additional-info">{item.price}</td>
                                        <td className="additional-info">{item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </>
    );
};

export default OrderProductBtn;