import React from "react";
import HomeImg from "../MainSection/img/imglandinng.webp";
import "./Mainsection.css";
function MainSection() {
  return (
    <div>
      <section>
        <div className="landing_section_one">
          <div className="flex_one_landing">
            <div className="landing_content">
              <h2 className="landing_main_topic">
                <span className="landin_topic_one">Find </span>
                <br />
                the <span className="landin_topic_two">Perfect Book </span>
                <br />
                For Your Child
              </h2>
              <p className="landin_para">
                Explore our selection of children’s books and <br></br>
                personalized gift packaging to find something magical <br></br>
                for every young reader.
              </p>
              <button className="btn_shop">SHOP NOW</button>
            </div>
          </div>
          <div className="flex_two_landing">
            <img src={HomeImg} alt="home_img" className="landin_hommeimg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainSection;
