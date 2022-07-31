import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Item from "./Item";
import Cart from "./Cart";
import ItemAddForm from "./ItemAddForm";
import ItemSearchForm from "./ItemSearchForm";

function Home({ onAddToCart, cart }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://shopping-app-evans.herokuapp.com/clothes")
      .then((r) => r.json())
      .then((clothesData) => {
        setItems(clothesData);
      });
  }, []);

  function Item({
    item,
    itemName,
    itemPrice,
    itemColor,
    itemGender,
    itemImage,
    itemId,
  }) {
    return (
      <div className="card" key={itemId}>
        <div className="card-body">
          <img className="card-image" src={itemImage} />
          <p className="card-title">{itemName}</p>
          <p className="card-price">{itemPrice}</p>
          <div className="card-btns">
            <div>
              <Link to={"/product/" + itemId}>
                <button className="details-button">View details</button>
              </Link>
            </div>
            <div className="card-bottom">
              <button className="cart-button" onClick={() => onAddToCart(item)}>
                Add to Cart
              </button>
              <div className="remove">
                <button className="delete">
                  <img
                    className="delete-icon-image"
                    src="https://cdn-icons.flaticon.com/png/512/4980/premium/4980320.png?token=exp=1659044681~hmac=c6d277c1b22aebcd2e2f1c05bfb221f3"
                    alt="Remove"
                  ></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
      {/*<Routes>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>*/}
      <div className="container">
        <ItemSearchForm />
        <div className="clothes-container">{products}</div>
        <ItemAddForm />
      </div>
    </>
  );
}

export default Home;
