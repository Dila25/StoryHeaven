import React from "react";
import "./nav.css";
import Logo from "./img/logo.png";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
function Nav() {
  return (
    <div>
      <div className="nav_container">
        <div>
          <img src={Logo} alt="logo" className="nav_logo" />
        </div>
        <div className="item_nav">
          <h3
            onClick={() => (window.location.href = "/")}
            className="nav_item_topic"
            activeClassName="active"
          >
            HOME
          </h3>
          <h3
            onClick={() => (window.location.href = "/category")}
            className="nav_item_topic"
             activeClassName="active"
          >
            CATEGORIES
          </h3>
          <h3
            onClick={() => (window.location.href = "/about")}
            className="nav_item_topic"
             activeClassName="active"
          >
            ABOUT US
          </h3>
          <h3
            onClick={() => (window.location.href = "/contact")}
            className="nav_item_topic"
             activeClassName="active"
          >
            CONTACT
          </h3>
        </div>
        <div className="item_nav">
          <div>
            <FiSearch className="sub_logo" />
          </div>
          <div>
            <FiShoppingBag className="sub_logo" />
          </div>
          <div>
            <FaUserCircle className="sub_logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
