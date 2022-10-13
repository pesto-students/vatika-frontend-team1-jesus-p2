import React from "react";

function IndividualBlog() {
  return (
    <div className="all-blogs">
      <div className="each-blog">
        <img src={require("../../assets/Blog-1.png")} alt="Blog-1" />
        <h3>A Plant-based Challenge</h3>
        <p>
          I’ve eaten a plant-based diet since I was 16 for various moral, health
          and environmental reasons.
        </p>
        <button>Read More</button>
      </div>

      <div className="each-blog">
        <img src={require("../../assets/Blog-2.png")} alt="Blog-1" />
        <h3>AI app that detects diseases in plants </h3>
        <p>
          The spread of trans boundary plant pests and diseases has increased
          dramatically in recent years.
        </p>
        <button>Read More</button>
      </div>

      <div className="each-blog">
        <img src={require("../../assets/Blog-3.png")} alt="Blog-1" />
        <h3>World’s Largest CO₂ sucking Plant</h3>
        <p>
          The plant has the capacity to suck 4,000 tonnes of Carbon dioxide
          annually & and turn it into stone underground.
        </p>
        <button>Read More</button>
      </div>

      <div className="each-blog">
        <img src={require("../../assets/Blog-4.png")} alt="Blog-1" />
        <h3>Watering Plants</h3>
        <p>
          Problem Statement: You want to water n plants in your garden with a
          watering can. The plants are arranged in a row and are labeled.
        </p>
        <button>Read More</button>
      </div>

      <div className="each-blog">
        <img src={require("../../assets/Blog-5.png")} alt="Blog-1" />
        <h3>Do Plants Feel Pain?</h3>
        <p>
          Plants can communicate with one another, sense their environment, and
          react to danger. Plants can communicate with one another, sense their
          environment, and react to danger.
        </p>
        <button>Read More</button>
      </div>

      <div className="each-blog">
        <img src={require("../../assets/Blog-6.png")} alt="Blog-1" />
        <h3>The Plant That Could Save The World</h3>
        <p>
          Climate change is the biggest threat to mankind. It’s a looming
          armageddon.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default IndividualBlog;
