import React from "react";
import Heading from "../../Common/Heading/Heading";
import { Rate, Statistic } from "antd";
import "../css/DealDay.css";

function DealDay() {
  const { Countdown } = Statistic;
  const deadline = 0;

  return (
    <div className="dealDay">
      <Heading content={"Today's Deal"} />
      <Countdown value={deadline} className="countdown" />
      <div className="deal">
        <div className="left-plant">
          <h2>Limited Stock HurryUp!</h2>
        </div>

        <div className="right-plant r-1">
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863256/Vatika/React%20FrontEnd/plant-1_akbp5s.png"
            alt="DealPlant1"
          />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />
          <p>
          Rs 50<button>Out of Stock</button>
          </p>
        </div>
        <div className="right-plant r-2">
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863256/Vatika/React%20FrontEnd/plant-1_akbp5s.png"
            alt="DealPlant1"
          />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />
          <p>
          Rs 100<button>Out of Stock</button>
          </p>
        </div>
        <div className="right-plant r-3">
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1663964299/Vatika/Garden/garden_plant_13_jtzhpp.png"
            alt="DealPlant1"
          />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />

          <p>
          Rs 200<button>Out of Stock</button>
          </p>
        </div>
        <div className="right-plant r-4">
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1663964359/Vatika/Garden/garden_plant_14_l4j38f.png"
            alt="DealPlant1"
          />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />

          <p>
          Rs 100<button>Out of Stock</button>
          </p>
        </div>
        <div className="right-plant r-5">
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1663964017/Vatika/Garden/garden_plant_8_fvhn9b.png"
            alt="DealPlant1"
          />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />

          <p>
          Rs 250<button>Out of Stock</button>
          </p>
        </div>
        <div className="right-plant r-6">
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1663963732/Vatika/Garden/garden_plant_3_ofw8ob.png"
            alt="DealPlant1"
          />
          <h3>Money Plant</h3>
          <Rate
            defaultValue="4"
            disabled="false"
            count="5"
            className="rating"
          />
          <p>
            Rs 120<button>Out of Stock</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DealDay;
