import React from "react";
import { Link } from "react-router-dom";
import '../css/MainContent.css';


function MainContent() {
  return (
    <div className="mainContent">
      <p>
        From Our <span>Greenhouse</span> to Your House
      </p>
      <h1>Healthy plants delivered straight to your door </h1>
      <Link to='/product'>
      <button>Shop Now</button>
      </Link>
    </div>
  );
}

export default MainContent;
