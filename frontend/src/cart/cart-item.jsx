import './cart.css'
import React, { useContext } from "react";
import { ShopContext } from '../context/shop-context';
export const CartItem = (props) => {
    const { id, productName, price, productImage, description } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <div className="cartItem">
          <div className="removeItem" onClick={() => removeFromCart(id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
              <mask id="mask0_57_1109" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                <rect x="0.5" y="0.343384" width="24" height="24" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_57_1109)">
                <path d="M8.9 17.3434L7.5 15.9434L11.1 12.3434L7.5 8.76839L8.9 7.36839L12.5 10.9684L16.075 7.36839L17.475 8.76839L13.875 12.3434L17.475 15.9434L16.075 17.3434L12.5 13.7434L8.9 17.3434Z" fill="#1C1B1F"/>
              </g>
            </svg>
          </div>
          <div className="item-info">
            <div className="item-image">
              <img src={productImage} />
            </div>
            <div className="item-name">
              <h1>{productName}</h1>
              <h3>{description}</h3>
            </div>
            <div className="item-price">
              <h1>Price:</h1>
              <h2>{price}</h2>
            </div>
            <div className="item-quantity">
              <h1>Quantity:</h1>
              <button onClick={() => removeFromCart(id)}> - </button>
              <input
                value={cartItems[id]}
                onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              />
              <button onClick={() => addToCart(id)}> + </button>
            </div>
          </div>
        </div>
      );
}
          {/* <img src={productImage} />
          <div className="description">
            <p>
              <b>{productName}</b>
            </p>
            <p> ფასი: {price} ლარი</p>
            <div className="countHandler">
              <button onClick={() => removeFromCart(id)}> - </button>
              <input
                value={cartItems[id]}
                onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              />
              <button onClick={() => addToCart(id)}> + </button>
            </div>
          </div> */}