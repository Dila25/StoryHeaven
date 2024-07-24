import React, { useState } from "react";
import "./step.css";

function StepOne({ nextStep }) {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    landMark: "",
    postalCode: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem("personalInfo", JSON.stringify(formData));
    // Move to next step
    nextStep();
  };

  return (
    <div>
      <div className="">
        <div className="step-content">
          <h2>Step 1: Personal Information</h2>
          <div className="part_contact">
            <form className="form_conntact fromnewone mobile_order newflexform" onSubmit={handleSubmit}>
              <div className="page_one_full">
                <div className="page_step">
                  <label className="form_lable">
                    First Name <span className="requd_mark">*</span>
                  </label>
                  <input
                    className="order-input"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />

                  <label className="form_lable">
                    Last Name<span className="requd_mark">*</span>
                  </label>
                  <input
                    className="order-input"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />

                  <label className="form_lable">
                    Email <span className="requd_mark">*</span>
                  </label>
                  <input
                    className="order-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <label className="form_lable">
                    Phone Number <span className="requd_mark">*</span>
                  </label>
                  <input
                    className="order-input"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="page_step">
                  <label className="form_lable">Land Mark</label>
                  <input
                    className="order-input"
                    type="text"
                    name="landMark"
                    value={formData.landMark}
                    onChange={handleChange}
                  />
                  <label className="form_lable">
                    Postal Code<span className="requd_mark"> *</span>
                  </label>
                  <input
                    className="order-input"
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                  />
                  <label className="form_lable">
                    Address <span className="requd_mark">*</span>
                  </label><br/>
                  <textarea
                    className="order-input"
                    rows={5}
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="send_btn">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
