import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // const cartItem = Object.values(item);
    console.log(item);
    // console.log(cartItem);

    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <>
        <Navbar cart={cartItems} />
      </>
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={<Home onAddToCart={addToCart} cart={cartItems} />}
          ></Route>
          <Route path="/cart" element={<Cart cartItems={cartItems} />}></Route>
          <Route path="/product/:itemId" element={<ProductDetails />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
