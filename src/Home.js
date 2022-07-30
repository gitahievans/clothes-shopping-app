import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Item from "./Item";
import Cart from "./Cart";
import ItemAddForm from "./ItemAddForm";
import ItemSearchForm from "./ItemSearchForm";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://shopping-app-evans.herokuapp.com/clothes")
      .then((r) => r.json())
      .then((clothesData) => {
        setItems(clothesData);
      });
  }, []);

  const clothes = items.map((item) => {
    return (
      <div className="card" key={item.id}>
        <div className="card-body">
          <img className="card-image" src={item.image} />
          <p className="card-title">{item.name}</p>
          <p className="card-price">{item.price}</p>
          <div className="card-btns">
            <div>
              <button className="details-button">View details</button>
            </div>
            <div className="card-bottom">
              <button className="cart-button">Add to Cart</button>
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
  });

  return (
    <>
      {/*<Routes>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>*/}
      <div className="container">
        <ItemSearchForm />
        <div className="clothes-container">{clothes}</div>
        <ItemAddForm />
      </div>
    </>
  );
}

export default Home;
