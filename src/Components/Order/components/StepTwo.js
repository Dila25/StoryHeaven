import React, { useState } from "react";
import "./step.css";
import ImgUp from "./img/uploade.png";

function StepTwo({ nextStep, prevStep }) {
  // State to hold the uploaded image
  const [previewImage, setPreviewImage] = useState(null);

  // Handle file input change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        const imageUrl = reader.result;
        setPreviewImage(imageUrl);
        // Save image URL to local storage
        localStorage.setItem("uploadedImage", imageUrl);
      };

      reader.readAsDataURL(file); // Convert file to data URL
    }
  };

  return (
    <div className="step-content">
      <h2>Step 3: Upload Your Photo</h2>
      <form className="form_conntact fromnewone mobile_order">
        <div className="upload-container">
          <label htmlFor="upload-photo" className="upload-label">
            <img
              src={previewImage || ImgUp} // Show preview if available, else show default image
              alt="Upload Icon"
              className="upload-icon"
            />
            <input
              type="file"
              id="upload-photo"
              name="photo"
              accept="image/*"
              required
              style={{ display: "none" }} // Hide the default file input
              onChange={handleImageChange} // Handle image change
            />
          </label>
        </div>
        <div className="button-container">
          <button type="button" className="send_btn_back" onClick={prevStep}>
            Back
          </button>
          <button className="send_btn_order" type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepTwo;
