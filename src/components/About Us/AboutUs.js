import React from "react";
import "./AboutUs.css";
import aboutus1 from "../../assets/aboutus1.png";
import aboutus2 from "../../assets/aboutus2.png";
import aboutus3 from "../../assets/aboutus3.png";

function AboutUs() {
  return (
    <>
      <div className="heading-aboutus"></div>
      <div className="aboutUs">
        <div className="part-one">
          Vatika germinated in 2022 from a promise to make ‘green and healthy’ a
          click away for all Indians. We wants to help city dwellers who wants
          to keep plants but may not have access to a nursery, or don’t know how
          to create and maintain a garden in a limited space.It's easy enough to
          buy plants but keeping healthy is another thing altogether. So Vatika
          uses a website chat service and its own social media sites to help
          customers pick the right pots and plants and give them all the
          knowledge and information they need to get a garden going.
        </div>
        <img src={aboutus1} className="part-one-img" alt="plant" />

        <img src={aboutus2} className="part-two-img" alt="plant" />
        <div className="part-two">
          <h3>Happiness is growing your own plant</h3>
          <p>
            Shop your favorite plant, seeds, garden decor, herbs and more in
            favorable factors.
          </p>
        </div>

        <div className="part-three">
          A one-stop-shop for all gardening related requirements, Vatika has
          more than 100 products available online for delivery across India
          saving you numerous messy trips to various nurseries. We cater to all
          kinds of gardening needs ranging from plants, pots, tools, to curated
          plant-scaping solutions. Our ever-growing platform integrates
          nurseries and customers across India.Having served a network of 1
          million happy plant parents, we can assure you that once you order a
          plant from us, you will emerge with your own home-grown veggies.
        </div>
        <img src={aboutus3} className="part-three-img" alt="plant" />
      </div>
    </>
  );
}

const MemoizedAboutUs = React.memo(AboutUs);
export default MemoizedAboutUs;
