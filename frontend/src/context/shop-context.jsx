import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../PRODUCT";

export const ShopContext = createContext(null);



export const ShopContextProvider = (props) => {
  
  const [products,setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const storedValue = localStorage.getItem('cart');
  const initial = storedValue ? JSON.parse(storedValue) : [];
  const [cartItems, setCartItems] = useState(initial);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch('http://127.0.0.1:8000/api/v1/products/', 
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }})
        
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

       
        const result = await response.json();

      
        setProducts(result);
        setLoading(false);
      } catch (error) {
        
        setError(error);
        setLoading(false);
      }
    };

    
    fetchData();
  }, []); 

  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   if (storedCart !== null) {
  //     try {
  //       setCartItems(JSON.parse(storedCart));
  //     } catch (error) {
  //       console.error("Error parsing cart data:", error);
  //     }
  //   }
  // }, []);

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    
    const isProductInCart = cartItems.some((cartItem) => cartItem.id === item.id);
  
    if (isProductInCart) {
      alert("Product is already in the cart");
      return;
    }
  
   
    setCartItems((prevCart) => [...prevCart, item]);
    alert('product added to cart');
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
    alert('product deleted from cart')
  };

  const clearCart = () => {
    setCartItems([]);
    alert('Cart is clear')
  };


 

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    products

    
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};