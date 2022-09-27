import {
  ArrowLeftOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import React from "react";
import './Plant.css';


function Plant() {
  return (
    <div className="plant">
      <div className="back">
        <button>
          <ArrowLeftOutlined /> Back
        </button>
      </div>

      <div className="collection">
        <div className="bigImage">
          <img
            src={require("../../assets/Deatiled-Image.png")}
            alt="DealPlant1"
          />
        </div>

        <div className="plant-details">
          <h1>Money Plant</h1>
          <h2>
            Rs 100<del>Rs200</del>
          </h2>
          <p>Inclusive of all taxes</p>
          <h3>Quantity</h3>
          <div className="quantity">
            <PlusCircleOutlined className="quant-icon" />
            <h2>1</h2>
            <MinusCircleOutlined className="quant-icon" />
          </div>
          <button className="butOne b">Add to Cart </button>
          <button className="butTwo b">Buy Now</button>
          <hr />
          <div className="delivery">
            <h2>Check Delivery</h2>
            <input type="number" placeholder="Enter Pincode" />
            <button>Check</button>
          </div>
        </div>
      </div>

      <div className="about">
        <h1>About Plant</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam sit,
          explicabo sed ratione dolore illo, vitae nihil laboriosam magni, earum
          molestiae minus a officia quidem ipsam asperiores tenetur animi harum
          esse ab ducimus necessitatibus exercitationem amet vel. Labore quod
          veniam ea, sapiente quibusdam natus nesciunt tempore accusantium
          similique quaerat est!
        </p>

        <img src={require("../../assets/drop.png")} alt="water" />
        <h3>Water Required 4 Day per Week</h3>

        <img src={require("../../assets/sun.png")} alt="sun" />
        <h3>Sunlight Required 4 Hours per day</h3>
      </div>
    </div>
  );
}

export default Plant;
