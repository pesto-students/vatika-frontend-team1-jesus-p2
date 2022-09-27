import React from "react";
import '../css/PlantCategory.css'


function PlantCategory() {
  return (
    
    <div className="plantCategory">
      <div className="category-1 allCategory">
        <img src={require("../../../assets/Interior_Plant.png")} alt="logo" />
        <h2>Plants for Interior</h2>
        <button>Buy Now</button>
      </div>
      <div className="category-2 allCategory">
        <img src={require("../../../assets/Garden_Plant.png")} alt="logo" />
        <h2>Plants for Garden</h2>
        <button>Buy Now</button>
      </div>
      <div className="category-3 allCategory">
        <img src={require("../../../assets/Office_Plant.png")} alt="logo" />
        <h2>Plants for Office</h2>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default PlantCategory;
