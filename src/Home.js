import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Item from "./Item";
import Cart from "./Cart";
import ItemAddForm from "./ItemAddForm";
import ItemSearchForm from "./ItemSearchForm";

function Home({ addToCart, cart }) {
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://shopping-app-evans.herokuapp.com/clothes")
      .then((r) => r.json())
      .then((clothesData) => {
        setItems(clothesData);
        return clothesData;
      })
      .then((clothesData) => {
        setSearchResults(clothesData);
      });
  }, []);

  // const results = searchResults.map((cloth) => (
  //   <Item key={cloth.id} cloth={cloth} />
  // ));

  // const content = results?.length ? (
  //   results
  // ) : (
  //   <article>
  //     <p>No Matching Items</p>
  //   </article>
  // );

  const handleDelete = (deletedItem) => {
    const updatedList = items.filter((item) => item.id !== deletedItem.id);
    setItems(updatedList);
  };

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
      addToCart={addToCart}
      onDeleteItem={handleDelete}
    />
  ));

  return (
    <>
      <ItemSearchForm clothes={items} setSearchResults={setSearchResults} />
      <div className="container">
        <div className="clothes-container">{products}</div>
        <ItemAddForm />
      </div>
    </>
  );
}

export default Home;
