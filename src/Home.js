import React, { useState } from "react";
import Item from "./Item";
import ItemSearchForm from "./ItemSearchForm";
import { faker } from "@faker-js/faker";
import "./styles/item.css";
import api from "./api/axios";
import { useEffect } from "react";

function Home({ cart, setCart }) {
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);

  // faker.seed(100);

  // const productsArray = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.product(),
  //   price: faker.commerce.price(),
  //   image: faker.image.fashion(),
  // }));

  // const [products] = useState(productsArray);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get();
        setProducts(response.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchProducts();
  }, []);

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
