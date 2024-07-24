import React, { useState } from "react";
import "./step.css"; // Make sure to include your styling

function StepBank({ nextStep, prevStep }) {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    cardname: "",
    cardnum: "",
    date: "",
    cvv: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Save form data to local storage
    localStorage.setItem("bankInfo", JSON.stringify(formData));
    // Move to next step
    nextStep();
  };

  return (
    <div>
      <div className="step-content">
        <h2>Step 2: Bank Information</h2>
        <div className="part_contact">
          <form className="form_conntact fromnewone mobile_order">
            <label className="form_lable">
              Card Holder Name <span className="requd_mark">*</span>
            </label>
            <input
              className="order-input"
              type="text"
              name="cardname"
              value={formData.cardname}
              onChange={handleChange}
              required
            />

            <label className="form_lable">
              Card Number<span className="requd_mark">*</span>
            </label>
            <input
              className="order-input"
              type="text"
              name="cardnum"
              value={formData.cardnum}
              onChange={handleChange}
              required
            />

            <div className="cadinpu_container">
              <div>
                <label className="form_lable">
                  Exp Date <span className="requd_mark">*</span>
                </label>
                <input
                  className="order-input"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="form_lable">
                  CVV <span className="requd_mark">*</span>
                </label>
                <input
                  className="order-input"
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="button-container">
              <button
                type="button"
                className="send_btn_back"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                className="send_btn_order"
                type="button"
                onClick={handleSubmit}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StepBank;
