import React from "react";
import Heading from "../../Common/Heading";
import { PushpinFilled, PhoneFilled, MailFilled } from "@ant-design/icons";
import "../css/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Contact() {
  const saveMessage = () => {
    toast.success("Sent, Team will Connect 🔔", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
    });

    var form = document.getElementById("useForm");
    form.reset();
  };

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
        <h2>Leave us Message</h2>
        <form method="post" id="useForm" onSubmit={(e)=>{
          e.preventDefault()
          saveMessage();
          }}>
          <input type="text" placeholder="Name" required />
          <br />
          <input type="email" placeholder="Email" required />
          <br />
          <textarea
            name="comment"
            rows="3"
            cols="31"
            form="useForm"
            placeholder="Message"
            required
          />
          {/* <input type="textarea" placeholder="Message"/> */}
          <br />
          <button>Send</button>
        </form>
      </div>
      <div>
      <ToastContainer/>
      </div>
    </div>
  );
}

export default Contact;
