import React from "react";
import Heading from "../../Common/Heading/Heading";
import { Carousel } from "antd";
import "../css/Testimonial.css";

function Testimonial() {
  return (
    <div className="testimonial">
      <Heading content={"Testimonial"} />
      <div className="slider">
        <Carousel autoplay dotPosition="top">
          <div className="feedback">
            <h2>Lisa Paul</h2>
            <p>
              " Very happy with the purchase. The plants were healthy and fresh
              and it were delivered timely. "
            </p>
            <img
              src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863259/Vatika/React%20FrontEnd/testmonial-3_dmusyx.png"
              alt="Person-1"
            />
          </div>
          <div className="feedback">
            <h2>Rohan Singh</h2>
            <p>
              " Products are good and packing is also great, but one pot is
              different from 2 other pots. "
            </p>
            <img
              src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863257/Vatika/React%20FrontEnd/testmonial-1_gmxufj.png"
              alt="Person-2"
            />
          </div>
          <div className="feedback">
            <h2>Marina Frank</h2>
            <p>
              " Everything was perfect. Great packaging, good condition, and
              quick shipping I ordered indoor plants and they seem to be doing
              great! "
            </p>
            <img
              src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863258/Vatika/React%20FrontEnd/testmonial-2_ipol5j.png"
              alt="Person-3"
            />
          </div>
          <div className="feedback">
            <h2>Danny</h2>
            <p>
              " Very happy with the purchase. The plants were healthy and fresh
              and it were delivered timely. "
            </p>
            <img
              src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863259/Vatika/React%20FrontEnd/testmonial-3_dmusyx.png"
              alt="Person-4"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
