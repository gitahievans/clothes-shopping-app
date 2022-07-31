import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <div className="navbar">
      <div className="nav">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/cart">
          <div>
            <h2>
              Cart
              <img
                className="cart"
                src="https://cdn-icons-png.flaticon.com/128/1685/1685513.png"
                alt="Cart"
              />
              <>({cart.length})</>
            </h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
