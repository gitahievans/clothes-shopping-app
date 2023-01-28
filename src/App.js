import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Cart from "./Cart";
import "./index.css";
import ItemDetails from "./ProductDetails";

function App() {
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);
  // console.log(products);
  return (
    <>
      <Navbar cart={cart} />
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                cart={cart}
                setCart={setCart}
                products={products}
                setProducts={setProducts}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          ></Route>
          {/*<Route
            path="/product/:itemId"
            element={
              <ItemDetails products={products} setProducts={setProducts} />
            }
          ></Route>*/}
        </Routes>
      </div>
    </>
  );
}

export default App;
