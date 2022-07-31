import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   console.log(item);
  //   if (cartItems.includes(item)) {
  //     setCartItems([cartItems]);
  //   } else {
  //     setCartItems([...cartItems, item]);
  //   }
  // };

  // useEffect(() => {
  //   fetch("https://shopping-app-evans.herokuapp.com/clothes")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setCartItems(data);
  //     });
  // }, []);

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
            element={<Cart cartItems={cartItems} addToCart={addToCart} />}
          ></Route>
          <Route path="/product/:itemId" element={<ProductDetails />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
