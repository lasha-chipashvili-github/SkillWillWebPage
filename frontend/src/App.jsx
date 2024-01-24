import React, { useEffect } from 'react';
import './App.css';
import Header  from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/home';
import theme from './components/Header';
import { Shop } from './pages/shop/shop';
import { Cart } from './cart/cart';
import { ShopContextProvider } from './context/shop-context';
import SingleProduct  from './pages/SingleProduct/SingleProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  useEffect(()=>{
    const getData = async () => {
      const res = await fetch("http://localhost:8000/api/v1/products/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json()
      console.log(data)
    }

    getData()
  },[])

  console.log("Back and front can now talk to each other!")

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>                              
          <Header />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<SingleProduct />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
