import React, { useState } from "react";
import { Link } from "react-router-dom";

function Item({
  item,
  itemName,
  itemPrice,
  itemColor,
  itemGender,
  itemImage,
  itemId,
  addToCart,
  onDeleteItem,
  onCarting,
}) {
  const [inCart, setInCart] = useState(false);

  // delete ITEM
  const handleDelete = () => {
    fetch(`https://shopping-app-evans.herokuapp.com/clothes/${itemId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => onDeleteItem(item));
  };

  //Update Item
  function handleUpdateItem() {
    fetch(`https://shopping-app-evans.herokuapp.com/clothes/${item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: price,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => onUpdateItem(updatedItem));
  }

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
            <button className="cart-button" onClick={() => addToCart(item)}>
              {inCart ? "Remove" : "Add to Cart"}
            </button>
            <div className="remove">
              <button className="delete" onClick={() => handleDelete()}>
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

export default Item;
