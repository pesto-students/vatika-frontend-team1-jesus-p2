import React from "react";
import "./Heading.css";

function Heading({ content }) {
  return (
    <div className="heading">
      <h1>
        <img
          src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863257/Vatika/React%20FrontEnd/Heading_Leaf_m03abo.png"
          alt="Heading-Leaf"
        />
        {content}
      </h1>
    </div>
  );
}

export default Heading;
