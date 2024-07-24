import React, {  useRef } from "react";
import "./ordersummry.css"; // Make sure you have some basic styling
import { useReactToPrint } from "react-to-print";
function OrderSummary() {
  // Retrieve data from local storage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const personalInfo = JSON.parse(localStorage.getItem("personalInfo")) || {};
  const bankInfo = JSON.parse(localStorage.getItem("bankInfo")) || {};
  const uploadedImage = localStorage.getItem("uploadedImage");

  // Function to calculate total for an item
  const calculateTotalForItem = (price, quantity) => {
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    return (numericPrice * quantity).toFixed(2);
  };

  // Function to calculate total amount
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2); // Fix to 2 decimal places
  };

  const ComponentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponentsRef.current,
    DocumentTitle: " Details Report",
    onafterprint: () => alert(" Details Report Successfully Download !"),
  });
  return (
    <div className="fullbody">
      <div className="order-summary-container " ref={ComponentsRef}>
        <h1 className="order-summary-heading">Order Summary</h1>
        <div className="order_dtl">
          <div className="order-summary-section">
            <h2 className="section-heading">Personal Information</h2>
            <p className="personal-info">
              <strong>First Name:</strong> {personalInfo.firstName}
            </p>
            <p className="personal-info">
              <strong>Last Name:</strong> {personalInfo.lastName}
            </p>
            <p className="personal-info">
              <strong>Email:</strong> {personalInfo.email}
            </p>
            <p className="personal-info">
              <strong>Phone Number:</strong> {personalInfo.phoneNumber}
            </p>
            <p className="personal-info">
              <strong>Landmark:</strong> {personalInfo.landmark}
            </p>
            <p className="personal-info">
              <strong>Postal Code:</strong> {personalInfo.postalCode}
            </p>
            <p className="personal-info">
              <strong>Address:</strong> {personalInfo.address}
            </p>
          </div>

          <div className="order-summary-section">
            <h2 className="section-heading">Bank Information</h2>
            <p className="bank-info">
              <strong>Card Holder Name:</strong> {bankInfo.cardname}
            </p>
            <p className="bank-info">
              <strong>Card Number:</strong> XXXX XXXX XXXX
            </p>
            <p className="bank-info">
              <strong>Expiry Date:</strong> {bankInfo.date}
            </p>
            <p className="bank-info">
              <strong>CVV:</strong> XXX
            </p>
          </div>

          <div className="order-summary-section newone_sum">
            <h2 className="section-heading">Uploaded Image</h2>
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="uploaded-image"
              />
            ) : (
              <p className="no-image">No image uploaded</p>
            )}
          </div>
        </div>

        <div className="order-summary-sectionRR">
          <h2 className="section-heading">Cart Items</h2>
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
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
                        <p className="cart_price">Price: {item.price}</p>
                        <p className="cart-summary-quantity">
                          Quantity: {item.quantity}
                        </p>
                        <p className="cart-summary-total">
                          Total: LKR{" "}
                          {calculateTotalForItem(item.price, item.quantity)}
                        </p>
                        <p className="tot">
                          Total Price ={" "}
                          <span className="prc">
                            LKR{" "}
                            {calculateTotalForItem(item.price, item.quantity)}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="tot">
          <h2 className="section-heading">Total Amount</h2>
          <p className="total-amount">LKR {calculateTotal()}</p>
        </div>
      </div>
      <button className="send_btn" onClick={handlePrint}>Download Report</button>
    </div>
  );
}

export default OrderSummary;
