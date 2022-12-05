import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Item from "./Item";
import Cart from "./Cart";
import ItemAddForm from "./ItemAddForm";
import ItemSearchForm from "./ItemSearchForm";
import { faker } from "@faker-js/faker";
import "./styles/item.css";

function Home({ cart, setCart }) {
  // console.log(cart);

  faker.seed(100);

  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
  }));

  const [products] = useState(productsArray);
  // console.log(products);

  return (
    <div className="productsContainer">
      {products.map((prod) => (
        <Item prod={prod} key={prod.id} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default Home;
