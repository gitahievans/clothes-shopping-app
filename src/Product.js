import React from "react";
import "./styles/item.css";
import Button from "@mui/material/Button";


function Product({ prod, cart, setCart }) {
  return (
    <div className="products">
      <img src={prod.image} alt={prod.title} />
      <div className="productDesc">
        <span style={{ fontWeight: 300, fontSize: "20px" }}>{prod.title}</span>
        <span>$ {prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <Button
          variant="contained"
          onClick={() => {
            setCart(cart.filter((p) => p.id !== prod.id));
          }}
        >
          Remove from cart
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
}

export default Product;
