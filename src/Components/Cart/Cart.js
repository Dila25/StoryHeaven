import React, { useEffect, useState } from "react";
import "./cart.css"; // Make sure you have some basic styling
import { MdDelete } from "react-icons/md";
import CartEmpty from "./img/emty.png";
function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // Ensure all items have a quantity property
    const itemsWithQuantity = storedCartItems.map((item) => ({
      ...item,
      quantity: item.quantity || 1, // Initialize quantity if not present
    }));
    setCartItems(itemsWithQuantity);
  }, []);

  const updateQuantity = (index, delta) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity + delta > 0) {
      updatedCart[index].quantity += delta;
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotalForItem = (price, quantity) => {
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    return (numericPrice * quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2); // Fix to 2 decimal places
  };

  return (
    <div>
      <div className="fullbody">
        <div className="cart_container">
          <h1 className="cart_heading">Your Cart</h1>
          <div>
            <div>
              {cartItems.length === 0 ? (
                <div className="emmtydiv">
                  <img src={CartEmpty} alt="emtyy img" className="emtycart"/>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <div className="card_conn">
                  <div className="card_details">
                    <ul className="cart_list">
                      {cartItems.map((item, index) => (
                        <div key={index} className="cart_item">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="cart_image"
                          />
                          <div className="cart_details">
                            <h3 className="cart_title">{item.title}</h3>
                            <div>
                              <p className="cart_price">{item.price}</p>
                              <div className="btn_action">
                                <div className="qunty_card">
                                  <button
                                    className="btn_qunty"
                                    onClick={() => updateQuantity(index, -1)}
                                  >
                                    -
                                  </button>
                                  <p className="count_qtn">{item.quantity}</p>
                                  <button
                                    className="btn_qunty"
                                    onClick={() => updateQuantity(index, 1)}
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="dltbtn">
                                  <MdDelete
                                    onClick={() => removeFromCart(index)}
                                  />
                                </div>
                              </div>
                              <p className="tot">
                                Total Price ={" "}
                                <span className="prc">
                                  LKR{" "}
                                  {calculateTotalForItem(
                                    item.price,
                                    item.quantity
                                  )}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                  <div className="cart_total card_details">
                    <h2 className="tot_amount">
                      Total Amount: LKR {calculateTotal()}
                    </h2>
                    <button
                      className="send_btn"
                      onClick={() => (window.location.href = "order")}
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
