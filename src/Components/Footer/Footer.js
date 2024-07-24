import React from "react";
import Logo from "./img/logo.png";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
function Footer() {
  return (
    <div>
      <div className="footer_container">
        <div className="footer_main_one">
          <div className="footer_left">
            <div>
              <img src={Logo} alt="logo" className="footer_logo" />
            </div>
            <div>
              <h4 className="footer_topic">STORY HAVEN</h4>
              <p className="footer_para">
                Explore Story Haven for charming children’s <br/>books and unique
                gift packaging.
              </p>
            </div>
          </div>
          <div className="footer_right footer_topicnew">
            <h4 className="footer_topic">GET IN TOUCH</h4>
            <div className="icon_set_footer">
              <div className="link_footer_box">
                <FaFacebookF className="footer_icon" />
              </div>
              <div className="link_footer_box">
                <IoMdMail className="footer_icon" />
              </div>
              <div className="link_footer_box">
                <FaWhatsapp className="footer_icon" />
              </div>
              <div className="link_footer_box">
                <GiRotaryPhone className="footer_icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="center_section">
          <p className="paraone">Terms of Use</p>
          <p className="paraone"> Privacy Policy</p>
          <p className="paraone">© 2024 Story Haven All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
