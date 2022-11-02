import React from "react";
import PlantDetails from "./PlantDetails";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function PlantSection({ product }) {
  const { cart } = useSelector((state) => state.cart);

  return (
    <>
      <div className="back">
        <Link to="/product">
          <button>
            <ArrowLeftOutlined /> Back
          </button>
        </Link>
      </div>

      <div className="collection">
        <div className="bigImage">
          <img src={product.image} alt={product.name} />
        </div>
        <PlantDetails product={product} cart={cart} />
      </div>

      <div className="about">
        <h1>About Plant</h1>
        <p>{product.description}</p>

        <img
          src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1666199593/Vatika/React%20FrontEnd/crown_dwxzwa.png"
          alt="king"
        />
        <h3>Plant Kingdom ,{product.kingdom}</h3>

        <img
          src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863258/Vatika/React%20FrontEnd/drop_xcb1u2.png"
          alt="water"
        />
        <h3>Water Required {product.water} Day per Week</h3>

        <img
          src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863257/Vatika/React%20FrontEnd/sun_dqxpus.png"
          alt="sun"
        />
        <h3>Sunlight Required {product.sunlight} Hours per day</h3>
      </div>
    </>
  );
}

export default PlantSection;
