import React, { useState } from "react";
import Product from "./Product";
import ItemSearchForm from "./ItemSearchForm";
import { faker } from "@faker-js/faker";
import "./styles/item.css";
import api from "./api/axios";
import { useEffect } from "react";
import Button from "@mui/material/Button";


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
    <Product prod={prod} key={prod.id} cart={cart} setCart={setCart} />
  ));

  const items = products.map((prod) => (
    <Product prod={prod} key={prod.id} cart={cart} setCart={setCart} />
  ));

  const toDisplay = results.length > 0 ? results : items;

  return (
    <>
      <div className="hero">
        <div className="hero-cont">
          <div className="hero-text">
            <h1>
              Welcome to <span style={{ color: "#40bacf" }}>Shopzilla</span>{" "}
            </h1>
            <p>
              Our app is the perfect place to shop for all your favorite
              products.With a wide selection of products from top brands, easy
              navigation and checkout, and fast, reliable shipping, our app
              offers a seamless and enjoyable shopping experience.
            </p>
          </div>
          <Button variant="contained">Take a look around.</Button>
        </div>
        <div className="search-bar">
          <ItemSearchForm
            products={products}
            setSearchResults={setSearchResults}
          />
        </div>
      </div>
      <div className="productsContainer">{toDisplay}</div>
    </>
  );
}

export default Home;
