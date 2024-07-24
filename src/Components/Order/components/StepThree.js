import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Make sure you have react-router-dom installed
import "./step.css";
import Done from "./img/order done.png";

function StepThree({ prevStep }) {
  const [count, setCount] = useState(10); // Initialize countdown from 10
  const navigate = useNavigate(); // React Router hook to navigate programmatically

  useEffect(() => {
    // Set up a timer that decrements the count every second
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    // If count reaches 0, navigate to the home page
    if (count === 0) {
      navigate("/summary");
    }

    // Clear the timer when the component unmounts or count changes
    return () => clearInterval(timer);
  }, [count, navigate]); // Effect depends on count and navigate

  return (
    <div className="step-content">
      <h2>Order Successfully Placed</h2>
      <div className="success-message ">
        <div className="suss_box mobile_order">
          <img src={Done} alt="Success Icon" className="success-icon" />
          <p>
            Redirecting to the order summary{" "}
            <span className="countt">{count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default StepThree;
