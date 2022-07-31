import React from "react";
import { Link } from "react-router-dom";

function Item({
  item,
  itemName,
  itemPrice,
  itemColor,
  itemGender,
  itemImage,
  itemId,
  onAddToCart,
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

export default Item;
