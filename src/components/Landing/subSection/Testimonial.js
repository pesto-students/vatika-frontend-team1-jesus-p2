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
            <img src={require("../../../assets/testmonial-2.png")} alt="logo" />
          </div>
          <div className="feedback">
            <h2>Rohan Singh</h2>
            <p>
              " Products are good and packing is also great, but one pot is
              different from 2 other pots. "
            </p>
            <img src={require("../../../assets/testmonial-1.png")} alt="logo" />
          </div>
          <div className="feedback">
            <h2>Marina Frank</h2>
            <p>
              " Everything was perfect. Great packaging, good condition, and
              quick shipping I ordered indoor plants and they seem to be doing
              great! "
            </p>
            <img src={require("../../../assets/testmonial-3.png")} alt="logo" />
          </div>
          <div className="feedback">
            <h2>Danny</h2>
            <p>
              " Very happy with the purchase. The plants were healthy and fresh
              and it were delivered timely. "
            </p>
            <img src={require("../../../assets/testmonial-1.png")} alt="logo" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
