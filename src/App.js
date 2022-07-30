import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log(item);
    setCartItems([...cartItems, item]);
    console.log(cartItems);
  };

  return (
    <div>
      <>
        <Navbar />
      </>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
