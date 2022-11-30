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
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863255/Vatika/React%20FrontEnd/Delivery_vcriha.png"
            alt="Delivery"
            className="circle"
          />
          <h3>Fast Delivery</h3>
          <p>We’ll bring your plants to your door, anywhere.</p>
        </div>

        <div className="two">
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863254/Vatika/React%20FrontEnd/Grow_pvngmr.png"
            alt="Grow"
            className="circle"
          />
          <h3>Grow with Us</h3>
          <p>Exclusive plant tips, new releases and sales.</p>
        </div>

        <div className="three">
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863259/Vatika/React%20FrontEnd/Why_Us_xn82c9.png"
            alt="Why-Us"
          />
        </div>

        <div className="four">
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863255/Vatika/React%20FrontEnd/Quality_wvtapp.png"
            alt="Quality"
            className="circle"
          />
          <h3>Unbeatable Quality</h3>
          <p>We source directly from top-rated growers.</p>
        </div>

        <div className="five">
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863256/Vatika/React%20FrontEnd/Security_gktcdw.png"
            alt="Security"
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
