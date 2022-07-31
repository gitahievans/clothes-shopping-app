import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <div className="navbar">
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart ({cart.length}) </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
