import React from "react";

function Cart({ cartItems, removeFromCart }) {
  console.log(cartItems);
  return (
    <div className="cart-object">
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="cart">
          <div className="cart-body">
            <img src={item.image} alt={item.name} className="cart-image" />
            <p className="card-title">{item.name}</p>
            <p className="card-price">{item.price}</p>
            <button onClick={() => removeFromCart(item)}>
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
