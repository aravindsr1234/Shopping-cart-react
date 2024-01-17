import './Cart.css';
import React, { useEffect, useState } from 'react';
import { cart, getCart } from '../../features/addToCart/addToCartSlice';
import { quantityCount } from '../../features/addToCart/addToCartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../features/addToCart/addToCartSlice';
import StripeButton from '../StripeButton/StripeButton';

const Cart = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  
  const [filterData, setFilterData] = useState([]);
  const [quantityCounts, setQuantityCounts] = useState(1);
  const q = quantityCounts;
  console.log("count of product quantity", quantityCounts);
  const [quantity, setQuantity] = useState(0);
  let prices = 0;
  let total = 0;
  const userId = JSON.parse(localStorage.getItem('userId'));
  console.log(data);

  useEffect(() => {
    dispatch(getCart(userId));
    if (!userId) {
      return <p>Loading...</p>;
    }
  }, [dispatch]);

  const cartItem = useSelector((state) => state.cart.getCarts);

  useEffect(() => {
    if (cartItem && cartItem.length > 0 && cartItem[0].items) {
      console.log(cartItem[0].items.product);
      setData(cartItem[0].items.product)
    } else {
      console.log("Cart item empty.");
    }
  }, [cartItem])

  const quantityIncrease = async (id, value) => {
    dispatch(increment(id));
  }

  const quantityDecrease = (id) => {
    dispatch(decrement(id));
  }

  return (
    <div className='container'>
      <div className='flex'>
        <div className='cartborder'>
          <div className='cartDatas'>
            {data.map((data) => (
              <div className='cartListItem'>
                <div className='cartListImage'>
                  <img src={data.images[0]} width={120} height={130} alt="" />
                  <div className='cartItemDetails'>
                    {prices = prices + data.price}
                    <h3>{data.productName}</h3> 
                    <h3>{data.price}</h3>
                    {/* {total = data.price * data.quantity} */}
                    <div className='quantityRemove'>
                      <div className="CartQuantity">
                        <button className='CountMinus' style={{ padding: '6px' }} onClick={() => quantityDecrease(data._id, 1)} >-</button>
                        <input type="text" id='count' value={data.quantity} style={{ textAlign: 'center', padding: '6px', width: '15px', margin: '0 5px' }} />
                        <button className='countPlus' style={{ padding: '6px' }} onClick={() => quantityIncrease(data._id, 1)}>+</button>
                      </div>
                      <div className='remove'>
                        <h3>Remove</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='cartPriceDetails'>
            <h2>Price Details:</h2>
            <h3>Price</h3>
            <h3>Delivery Charges : 40Rp</h3>
            <h2>Total Amount : {total + prices}</h2>
            <StripeButton cartData={data} totalPrice={total + prices} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Cart;
