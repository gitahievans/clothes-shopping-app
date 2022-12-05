import React, { useState } from "react";
import Item from "./Item";
import ItemSearchForm from "./ItemSearchForm";
import { faker } from "@faker-js/faker";
import "./styles/item.css";

function Home({ cart, setCart }) {
  const [searchResults, setSearchResults] = useState([]);
  faker.seed(100);

  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.fashion(),
  }));

  const [products] = useState(productsArray);

  const results = searchResults.map((prod) => (
    <Item prod={prod} key={prod.id} cart={cart} setCart={setCart} />
  ));

  const items = products.map((prod) => (
    <Item prod={prod} key={prod.id} cart={cart} setCart={setCart} />
  ));

  const toDisplay = results.length > 0 ? results : items;

  return (
    <>
      <ItemSearchForm products={products} setSearchResults={setSearchResults} />
      <div className="productsContainer">{toDisplay}</div>
    </>
  );
}

export default Home;
