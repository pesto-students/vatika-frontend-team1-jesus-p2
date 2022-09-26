import React from "react";
import Heading from "../Common/Heading";
import { Rate } from "antd";

function DealDay() {
  return (
    <div className="dealDay">
      <Heading content={"Today's Deal"} />
      <div className="deal">
        <div className="left-plant">
          <h2>Limited Stock HurryUp!</h2>
        </div>
        <div className="right-plant r-1">
          <img src={require("../../assets/plant-1.png")} alt="DealPlant1" />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />
          <p>
            Rs 100<del>Rs200</del> <button>Add</button>
          </p>
        </div>
        <div className="right-plant r-2">
          <img src={require("../../assets/plant-1.png")} alt="DealPlant1" />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />
          <p>
            Rs 100<del>Rs200</del> <button>Add</button>
          </p>
        </div>
        <div className="right-plant r-3">
          <img src={require("../../assets/plant-1.png")} alt="DealPlant1" />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />

          <p>
            Rs 100<del>Rs200</del> <button>Add</button>
          </p>
        </div>
        <div className="right-plant r-4">
          <img src={require("../../assets/plant-1.png")} alt="DealPlant1" />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />

          <p>
            Rs 100<del>Rs200</del> <button>Add</button>
          </p>
        </div>
        <div className="right-plant r-5">
          <img src={require("../../assets/plant-1.png")} alt="DealPlant1" />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />

          <p>
            Rs 100<del>Rs200</del> <button>Add</button>
          </p>
        </div>
        <div className="right-plant r-6">
          <img src={require("../../assets/plant-1.png")} alt="DealPlant1" />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />
          <p>
            Rs 100<del>Rs200</del> <button>Add</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DealDay;
