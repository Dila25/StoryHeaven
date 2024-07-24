import React from "react";
import Aword1 from "./img/award1.png";
import Aword2 from "./img/award2.png";
import Aword3 from "./img/award3.png";
import './about.css'
function AboutUs() {
  return (
    <div>
      <div className="fullbody">
        <h1 className="about_topic">About Story Haven</h1>
        <p className="about_section">
          At Story Haven, we’re dedicated to nurturing a love of reading in
          children with our extensive collection of over 500 carefully selected
          books. Our diverse range of categories caters to every age and
          interest, from enchanting picture books to engaging chapter books. We
          pride ourselves on providing exceptional service and creating a
          magical shopping experience for families. Recognized with the Best
          Kids’ Bookshop Award three times, we are honored to be a trusted
          destination for discovering the perfect book and making every reading
          journey special
        </p>
        <div className="award_section">
          <img src={Aword1} alt="award" className="award_picture" />
          <img src={Aword2} alt="award" className="award_picture" />
          <img src={Aword3} alt="award" className="award_picture" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
