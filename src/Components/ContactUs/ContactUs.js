import React from "react";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import "./contact.css";
function ContactUs() {
  return (
    <div>
      <div className="fullbody">
        <h1 className="topic_contact">GET IN TOUCH WITH US</h1>
        <div className="main_section_contact">
          <div className="part_contact">
            <form className="form_conntact">
              <div>
                <label className="form_lable" for="name">
                  Full Name <span className="requd_mark">*</span>
                </label>
                <br />
                <input
                  className="form_input"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label className="form_lable" for="lname">
                  Email <span className="requd_mark">*</span>
                </label>
                <br />
                <input
                  className="form_input"
                  type="mail"
                  id="mail"
                  name="mail"
                  required
                />
              </div>

              <div>
                <label className="form_lable" for="subject">
                  Subject
                </label>
                <br />
                <input
                  className="form_input"
                  type="text"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div>
                <label className="form_lable" for="message">
                  Message <span className="requd_mark">*</span>
                </label>
                <br />
                <textarea
                  id="message"
                  className="form_input"
                  name="message"
                  rows={8}
                  required
                ></textarea>
              </div>
              <div>
                <button className="send_btn">SEND</button>
              </div>
            </form>
          </div>
          <div className="part_contact">
            <div className="box_details box_details_new">
              <p className="details_content">
                <TbDeviceLandlinePhone />
                011 2703 303
              </p>
              <p className="details_content">
                <IoMail />
                info@storyhaven.lk
              </p>
              <p className="details_content">
                <FaLocationDot />
                No 124/E,
                <br />
                Kandy Road, Thihariya
              </p>
            </div>
            <div class="box_details">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63370.03470146972!2d79.81190079755879!3d6.935085652608479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25918b3a3dbcf%3A0x764a720a1670f200!2sM.%20D.%20Gunasena%20-%20The%20Knowledge%20Store%20(Pettah)!5e0!3m2!1sen!2slk!4v1721829504757!5m2!1sen!2slk"
                className="map_googal"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
