import React from "react";
import story1 from "./img/story1.png";
import story2 from "./img/story2.png"; 
import story3 from "./img/story3.png";
import { IoMdCart } from "react-icons/io";
import "./picks.css";

const topPicks = [
  { image: story3, title: "GREEN THUMB", price: "LKR 580.00" },
  { image: story1, title: "HAPPY", price: "LKR 620.00" }, 
  { image: story2, title: "PINOCCHIO", price: "LKR 700.00" } ,
  { image: story3, title: "STORY THREE", price: "LKR 700.00" } 
];

function TopPicks() {
  return (
    <div>
      <h1 className="story_topic">Top Picks</h1>
      <div className="picks_section">
        <div className="picks_card_full">
          {topPicks.map((pick, index) => (
            <div className="picks_card" key={index}>
              <img src={pick.image} alt={`story${index + 1}`} className="card_img_picks" />
              <h3 className="picks_card_topic">{pick.title}</h3>
              <div className="subsection">
                <p className="price_card">{pick.price}</p>
                <div className="cart_icon_picks">
                  <IoMdCart className="cart_picks" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopPicks;
