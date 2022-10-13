import React from "react";
import Heading from "../../Common/Heading/Heading";
import "../css/WhyUs.css";

function WhyUs() {
  return (
    <div className="whyUs">
      <Heading content={"Why Choose Us"} />
      <main>
        <div className="one">
          <img
            src={require("../../../assets/Delivery.png")}
            alt="logo"
            className="circle"
          />
          <h3>Fast Delivery</h3>
          <p>We’ll bring your plants to your door, anywhere.</p>
        </div>

        <div className="two">
          <img
            src={require("../../../assets/Grow.png")}
            alt="logo"
            className="circle"
          />
          <h3>Grow with Us</h3>
          <p>Exclusive plant tips, new releases and sales.</p>
        </div>

        <div className="three">
          <img src={require("../../../assets/Why_Us.png")} alt="logo" />
        </div>

        <div className="four">
          <img
            src={require("../../../assets/Quality.png")}
            alt="logo"
            className="circle"
          />
          <h3>Unbeatable Quality</h3>
          <p>We source directly from top-rated growers.</p>
        </div>

        <div className="five">
          <img
            src={require("../../../assets/Security.png")}
            alt="logo"
            className="circle"
          />
          <h3>Security</h3>
          <p>Our Systems are protected with bank-grade security.</p>
        </div>
      </main>
    </div>
  );
}

export default WhyUs;
