import React from "react";
import "./item.css";
import story1 from "./img/story1.png";
import story2 from "./img/story2.png";
import story3 from "./img/story3.png";
import { IoMdCart } from "react-icons/io";

const ItemList = [
  { image: story3, title: "GREEN THUMB", price: "LKR 580.00" },
  { image: story1, title: "HAPPY", price: "LKR 620.00" },
  { image: story2, title: "PINOCCHIO", price: "LKR 700.00" },
  { image: story3, title: "STORY THREE", price: "LKR 700.00" },
];

function Item() {
  const addToCart = (item) => {
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const itemIndex = existingCartItems.findIndex(cartItem => cartItem.title === item.title);

    if (itemIndex > -1) {
      // Item already in cart, increase quantity
      existingCartItems[itemIndex].quantity += 1;
    } else {
      // New item, set quantity to 1
      const itemWithQuantity = { ...item, quantity: 1 };
      existingCartItems.push(itemWithQuantity);
    }

    localStorage.setItem("cart", JSON.stringify(existingCartItems));
    alert(`${item.title} has been added to the cart!`);
  };

  return (
    <div className="fullbody">
      <h1 className="short_topic">Picture Books</h1>
      <div className="picks_card_full">
        {ItemList.map((pick, index) => (
          <div className="picks_card" key={index}>
            <img src={pick.image} alt={`story${index + 1}`} className="card_img_picks" />
            <h3 className="picks_card_topic">{pick.title}</h3>
            <div className="subsection">
              <p className="price_card">{pick.price}</p>
              <div className="cart_icon_picks" onClick={() => addToCart(pick)}>
                <IoMdCart className="cart_picks" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item;
