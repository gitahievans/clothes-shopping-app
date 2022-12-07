import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import "./styles/item.css"

function Cart({ cart, setCart }) {
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (previousValue, currentValue) =>
          previousValue + Number(currentValue.price),
        0
      )
    );
  }, [cart]);

  return (
    <div className="cart">  
    <h1>{cart.length === 0 ? "Your cart is empty" : null}</h1>
      <span>Total: Ksh.{total}</span>
      <div>
        {cart.map((prod) => (
          <Product prod={prod} key={prod.id} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>

  );
}

export default Cart;
