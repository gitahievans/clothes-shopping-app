import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Item from "./Item";
import Cart from "./Cart";
import ItemAddForm from "./ItemAddForm";
import ItemSearchForm from "./ItemSearchForm";

function Home({ onAddToCart, cart }) {
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://shopping-app-evans.herokuapp.com/clothes")
      .then((r) => r.json())
      .then((clothesData) => {
        set(clothesData);
        return clothesData;
      })
      .then((clothesData) => {
        setSearchResults(clothesData);
      });
  }, []);

  const products = items.map((item) => (
    <Item
      item={item}
      itemName={item.name}
      itemId={item.id}
      itemPrice={item.price}
      itemColor={item.color}
      itemGender={item.gender}
      itemImage={item.image}
      key={item.id}
    />
  ));

  return (
    <>
      <div className="container">
        <ItemSearchForm clothes={items} setSearchResults={setSearchResults} />
        <div className="clothes-container">{products}</div>
        <ItemAddForm />
      </div>
    </>
  );
}

export default Home;
