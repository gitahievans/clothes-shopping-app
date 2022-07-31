import React from "react";

function Cart({ cartItems }) {
  console.log(cartItems);
  return (
    <div className="cart-object">
      <p>{cartItems[0].name}</p>
      <p>{cartItems[0].price}</p>
    </div>
  );
}

export default Cart;
