import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import "./styles/item.css";

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
      {" "}
      <h2>Total: Ksh.{total}</h2>
      <h1>
        {cart.length === 0 ? (
          <>
            {" "}
            <div className="cart-empty">
              {" "}
              <img
                src="https://chillydraji.files.wordpress.com/2015/08/empty_cart.jpeg"
                alt="empty"
              />
              Your cart is empty 😟
            </div>
          </>
        ) : null}
      </h1>
      <div className="cart-conts ">
        {cart.map((prod) => (
          <Product prod={prod} key={prod.id} cart={cart} setCart={setCart} />
        ))}
      </div>
      <button className="checkout">
        Checkout <span>{total} Ksh.</span>
      </button>
    </div>
  );
}

export default Cart;
