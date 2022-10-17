import React from "react";
import "../css/PlantCategory.css";
import { Link } from "react-router-dom";
import {
  filterByGarden,
  filterByInterior,
  filterByOffice,
} from "../../../redux/actions/productActions";
import { useDispatch } from "react-redux";

function PlantCategory() {
  const dispatch = useDispatch();

  return (
    <div className="plantCategory">
      <div className="category-1 allCategory">
        <img
          src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863255/Vatika/React%20FrontEnd/Garden_Plant_xkzzhq.png"
          alt="Interior"
        />
        <h2>Plants for Garden</h2>
        <Link to="/product">
          <button
            onClick={() => {
              dispatch(filterByGarden("garden"));
            }}
          >
            Buy Now
          </button>
        </Link>
      </div>
      <div className="category-2 allCategory">
        <img
          src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863257/Vatika/React%20FrontEnd/Interior_Plant_scw110.png"
          alt="Garden"
        />
        <h2>Plants for Interior</h2>
        <Link to="/product">
          <button
            onClick={() => {
              dispatch(filterByInterior("interior"));
            }}
          >
            Buy Now
          </button>
        </Link>
      </div>
      <div className="category-3 allCategory">
        <img
          src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863256/Vatika/React%20FrontEnd/Office_Plant_bxlytc.png"
          alt="Office"
        />
        <h2>Plants for Office</h2>
        <Link to="/product">
          <button
            onClick={() => {
              dispatch(filterByOffice("office"));
            }}
          >
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PlantCategory;
