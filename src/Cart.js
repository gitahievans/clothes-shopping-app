import React from "react";

function Cart({ cartItems }) {
  console.log(cartItems);
  return (
    <div className="cart-object">
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-image" />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
