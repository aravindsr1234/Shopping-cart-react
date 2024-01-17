import axios from "axios";

const StripeButton = ({ cartData, totalPrice }) => {
    console.log("TOTAL PRIZE IN STRIPE",totalPrice);
    const url = 'http://localhost:4000';

    const handleCheckOut = () => {
        const userId = JSON.parse(localStorage.getItem('userId'));
        const dataDetails = axios.post(`${url}/create-checkout-session`, {
            cartData,
            totalPrice,
            userId: userId
        }).then((res) => {
            if (res.data.url) {
                console.log(res.data.url);
                window.location.href = res.data.url;    
            }
        })
            .catch((err) => console.log(err.message));
    }
    return (
        <>
            <button onClick={() => handleCheckOut()}>CheckOut</button>
        </>
    );
};

export default StripeButton; 
