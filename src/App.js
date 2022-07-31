import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const cartItem = cartItems.find((item) => item.id === product.id);
    if (cartItem) {
      setCartItems(
        cartItems.map((i) =>
          i.id === product.id
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  const removeFromCart = (item) => {
    const cartItem = cartItems.find((i) => i.id === item.id);
    if (cartItem.qty === 1) {
      setCartItems(cartItems.filter((i) => i.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((i) =>
          i.id === item.id ? { ...cartItem, qty: cartItem.qty - 1 } : i
        )
      );
    }
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
            element={<Home cart={cartItems} addToCart={addToCart} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          ></Route>
          <Route path="/product/:itemId" element={<ProductDetails />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
