import React from "react";
import "./step.css";
function StepOne({ nextStep }) {
  return (
    <div>
      <div className="">
        <div className="step-content">
          <h2>Step 1: Personal Information</h2>
          <div className="part_contact">
            <form className="form_conntact fromnewone mobile_order newflexform">
              <div className="page_one_full">
                <div className="page_step">
                  <label className="form_lable">
                    First Name <span className="requd_mark">*</span>
                  </label>
                  <input
                    className="order-input"
                    type="text"
                    name="firstName"
                    required
                  />

                  <label className="form_lable">
                    Last Name<span className="requd_mark">*</span>
                  </label>
                  <input
                    className="order-input"
                    type="text"
                    name="lastName"
                    required
                  />

                  <label className="form_lable">
                    Email <span className="requd_mark">*</span>
                  </label>
                  <input
                    className="order-input"
                    type="email"
                    name="email"
                    required
                  />

                  <label className="form_lable">
                    Phone Number <span className="requd_mark">*</span>
                  </label>
                  <input
                    className="order-input"
                    type="tel"
                    name="phoneNumber"
                    required
                  />
                </div>
                <div className="page_step">
                  <label className="form_lable">Land Mark</label>
                  <input
                    className="order-input"
                    type="text"
                    name="lastName"
                    required
                  />
                  <label className="form_lable">
                    Postal Code<span className="requd_mark"> *</span>
                  </label>
                  <input
                    className="order-input"
                    type="text"
                    name="lastName"
                    required
                  />
                  <label className="form_lable">
                    Address <span className="requd_mark">*</span>
                  </label>
                  <textarea
                    className="order-input"
                    type="text"
                    rows={5}
                    name="address"
                    required
                  />
                </div>
              </div>

              <button onClick={nextStep} className="send_btn">
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
