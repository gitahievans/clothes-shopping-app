import React, { useState } from "react";

function ItemAddForm() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gender, setGender] = useState("Select Gender");

  const handlePostItem = (e) => {
    e.preventDefault();
    fetch("https://shopping-app-evans.herokuapp.com/clothes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: price,
        color: color,
        size: size,
        imageUrl: imageUrl,
        gender: gender,
      }),
    })
      .then((r) => r.json())
      .then((newItem) => {
        setItems([...items, newItem]);
      });
  };

  return (
    <div className="item-form">
      <h2>Add New Item</h2>
      <form className="inputs">
        <input
          className="item-input"
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="item-input"
          type="text"
          placeholder="Enter item price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="item-input"
          type="text"
          placeholder="Enter item color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          className="item-input"
          type="text"
          placeholder="Enter item size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

        {/*<button type="upload">Upload</button>*/}
        <div className="select">
          <select
            className="selector"
            name="select-gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Select">Select Gender</option>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <button
            onClick={handlePostItem}
            className="form-button"
            type="submit"
            value="Create"
          >
            Post Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default ItemAddForm;
