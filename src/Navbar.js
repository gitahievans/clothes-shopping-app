import React from "react";
import { Link } from "react-router-dom";


function Navbar({ cart }) {
  return (
    <div className="nav">
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <Link to="/cart">
        <div>
          <h2>Cart {cart.length}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
