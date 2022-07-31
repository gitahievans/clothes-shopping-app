import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");

  const product_fetch = "https://shopping-app-evans.herokuapp.com/clothes/";

  let { itemId } = useParams();

  const productSearch = product_fetch + itemId;
  useEffect(() => {
    fetch(productSearch)
      .then((r) => r.json())
      .then((data) => {
        setName(data.name);
        setColor(data.color);
        setPrice(data.price);
        setGender(data.gender);
        setImage(data.image);
      });
  }, []);

  return (
    <div>
      <img src={image} />
      <h4>{name}</h4>
      <p>{price}</p>
      <p>Color:{color}</p>
      <p>{gender}</p>
    </div>
  );
}

export default ProductDetails;
