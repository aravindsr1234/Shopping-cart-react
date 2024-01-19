import { useState } from "react";

const OrderProductBtn = ({ data }) => {
    const [OrderData, setDatat] = useState([data]);
    if (data) {
        console.log('data', OrderData);
        {
            OrderData.map((data) => (
                console.log(data)
            ))
        }
    }
    const [orderPdtModal, setOrderPdtModal] = useState(true)
    return (
        <>
            <button>Order Product</button>
            {orderPdtModal ?
                // <>
                //     {OrderData.map((data, index) => (
                //         console.log(data?.productName)
                //     ))}
                // </>
                <h1>Hello</h1>

                : null}
        </>
    );
};

export default OrderProductBtn;