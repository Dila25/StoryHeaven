import React from "react";

function StepBank({ nextStep, prevStep }) {
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
              required
            />

            <label className="form_lable">
              Card Number<span className="requd_mark">*</span>
            </label>
            <input
              className="order-input"
              type="text"
              name="cardnum"
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
                onClick={nextStep}
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
