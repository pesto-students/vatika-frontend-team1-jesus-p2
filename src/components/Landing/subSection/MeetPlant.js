import React from "react";
import Heading from "../../Common/Heading";
import "../css/MeetPlant.css";

function MeetPlant() {
  return (
    <div className="meetPlant">
      <img
        src={require("../../../assets/meetus.png")}
        alt="logo"
        className="logo"
      />
      <div className="information">
        <Heading content={"Meet Your Plant"} />
        <h3>Every time you buy from us, we plant a tree which you can meet.</h3>
        <p>
          Every time you buy from us, we plant more trees. Once an order is
          placed on our website, we initiate the process of planting and linking
          your order with your sapling. Within a few days, along with the
          delivery of your products, we will also share the details of your
          plants by email.
        </p>
      </div>
    </div>
  );
}

export default MeetPlant;
