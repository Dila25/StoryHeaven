import React, { useState } from "react";
import "./nav.css";
import Logo from "./img/logo.png";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { FaUserCircle, FaBars } from "react-icons/fa";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="nav_full">
        <div className="nav_container">
          <div>
            <img src={Logo} alt="logo" className="nav_logo" />
          </div>
          <div className={`item_nav ${isMenuOpen ? "active" : ""}`}>
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
            <div className="mobile_nav">
              <div>
                <FiShoppingBag
                  className="sub_logo"
                  onClick={() => (window.location.href = "/order")}
                />
              </div>
              <div>
                <FaUserCircle className="sub_logo" />
              </div>
            </div>
          </div>
          <div className="item_nav">
            <div>
              <FiSearch className="sub_logo" />
            </div>
            <div>
              <FiShoppingBag
                className="sub_logo"
                onClick={() => (window.location.href = "/order")}
              />
            </div>
            <div>
              <FaUserCircle className="sub_logo" />
            </div>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars className="hamburger_icon" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
