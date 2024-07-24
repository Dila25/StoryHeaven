import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Category from "./Components/Category/Category";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Order from "./Components/Order/Order";
import OrderSummary from "./Components/Order/OrderSummary";
function App() {
  return (
    <div>
      <Nav />
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />\
          <Route path="/order" element={<Order />} />
          <Route path="/summary" element={<OrderSummary />} />
        </Routes>
      </React.Fragment>
      <Footer />
    </div>
  );
}

export default App;
