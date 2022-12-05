import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
// import ItemDetails from "./ItemDetails";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <div className="title-nav">
        <div className="app-title-container">
          <h1 className="app-title">Clothes Collection</h1>
        </div>
        <Navbar cart={cart} />
      </div>
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={<Home cart={cart} setCart={setCart} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          ></Route>
          {/*<Route path="/product/:itemId" element={<ItemDetails />}></Route>*/}
        </Routes>
      </div>
    </div>
  );
}

export default App;
