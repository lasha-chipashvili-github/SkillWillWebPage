import './cart.css'
import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from '../context/shop-context';
export const CartItem = (props) => {
    const {  data, setTotalAmount } = props;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
      setTotalAmount(prev => (prev + quantity * data?.prod_price))
    
      
    }, [quantity])

    const handleDecrease = () => {
      if(quantity === 1) {
        return
      } {
        setQuantity(prev => prev - 1)
      }
    }

    const handleIncrease = () => {
      if(quantity === 8) {
        return
      } {
        setQuantity(prev => prev + 1)
      }
    }
    
    return (
        <div className="cartItem">
          <div>
            <img src={data.images[0].files} />
          </div>
          <div className="description">
            <p className='cartN'>
              <b>{data.product_name}</b>
            </p>
            <p className='cardD'>{data.product_description}</p>
          </div>
          <div className='price'>
            <p > price: {data.prod_price} $</p>
          </div>
          <div className="countHandler">
            <button onClick={handleDecrease}> - </button>
            <p>{quantity}</p>
            <button onClick={handleIncrease}> + </button>
          </div>
        </div>
      );
}