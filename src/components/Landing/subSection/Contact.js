import React from "react";
import Heading from "../../Common/Heading";
import { PushpinFilled, PhoneFilled, MailFilled } from "@ant-design/icons";
import '../css/Contact.css'

function Contact() {
  return (
    <div className="contactUs">
      <Heading content={"Contact Us"} />
      <div className="left-part">
        <div className="address">
          <PushpinFilled />
          <span> 215 Revenue Nagar, Sector 10, Indore</span>
        </div>
        <div className="address">
          <PhoneFilled />
          <span> +91-8518052051</span>
        </div>
        <div className="address">
          <MailFilled />
          <span> kavishgarg15@gmail.com</span>
        </div>
      </div>

      <div className="right-part">
        <h3>Leave us Message</h3>
        <input type="text" placeholder="Name"/>
        <br />
        <input type="text" placeholder="Email"/>
        <br />
        <input type="text" placeholder="Message"/>
        <br />
        <button>Send</button>

      </div>
    </div>
  );
}

export default Contact;
