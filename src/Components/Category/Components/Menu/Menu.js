import React from "react";
import "./menu.css";
import BK from "./img/bk.png";

const menuGroups = [
  { image: BK, title: "Picture Books" },
  { image: BK, title: "Early Readers" },
  { image: BK, title: "Chapter Books" },
  { image: BK, title: "Middle Grade" },
  { image: BK, title: "Young Adult" },
  { image: BK, title: "Fairy Tales" },
  { image: BK, title: "Classics" },
];
function Menu() {
  return (
    <div>
      <div className="fullbody">
        <div className="dext_nav">
          <div>
            <div className="menu_card_set">
              {menuGroups.map((group, index) => (
                <div className="menu_card" key={index}>
                  <img src={BK} alt="book" className="book_img" />
                  <h3 className="cart_topic">{group.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mobile_drop">
          <select id="dropdown" className="dropmennu">
            <option value="section1">Select Category</option>
            <option value="section2">Picture Books</option>
            <option value="section2">Early Readers</option>
            <option value="section2">Chapter Books</option>
            <option value="section2">Middle Grade</option>
            <option value="section2">Young Adult</option>
            <option value="section2">Young Adult</option>
            <option value="section2">Classics</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Menu;
