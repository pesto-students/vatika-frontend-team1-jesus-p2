import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="section-1">
          <p>Home</p>
          <p>Product</p>
          <p>Blog</p>
          <p>AboutUs</p>
        </div>
        <div className="section-2">
          <p>Customer Care</p>
          <p>Help Center</p>
          <p>Track Order</p>
          <p>Warranty Information</p>
          <p>Return Policy</p>
          <p>FAQ</p>
        </div>

        <div className="section-3"></div>

        <div className="section-4">
          <h1>Follow Us</h1>
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863255/Vatika/React%20FrontEnd/facebook_qfzfva.png"
            alt="facebook"
          />
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863256/Vatika/React%20FrontEnd/youtube_iwb28b.png"
            alt="youtube"
          />
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863257/Vatika/React%20FrontEnd/twitter_g6kp9u.png"
            alt="twitter"
          />
        </div>
      </footer>
      <div className="copy-right">
        <h4>Copyright @2022 Vatika. All rights reserved</h4>
      </div>
    </>
  );
}

export default Footer;
