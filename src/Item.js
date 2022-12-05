import React from "react";
import "./styles/item.css";

function Item({ prod, cart, setCart }) {
  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>{prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          onClick={() => {
            setCart(cart.filter((p) => p.id !== prod.id));
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default Item;
