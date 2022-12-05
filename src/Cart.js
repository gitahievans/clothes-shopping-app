import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Item from "./Item";

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
    <>
      <h1>{cart.length === 0 ? "Your cart is empty" : null}</h1>
      <span>Total: Ksh.{total}</span>
      <div>
        {cart.map((prod) => (
          <Item prod={prod} key={prod.id} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
}

export default Cart;
