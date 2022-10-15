import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

function AddAddress({ deleteOneAddressAPI, allAddress }) {
  const [toggleButton, setToggleButton] = useState(false);

  function selectClick() {
    setToggleButton((toggleButton) => !toggleButton);
  }

  const toggleClass = toggleButton ? "selected" : "";
  const newCardClass = toggleButton ? "newCard" : "";

  return (
    <div className="addressCard">
      <h1>Address</h1>
      <div className="locationCard">
        {allAddress.length === 0 ? (
          <div className="noAddress">No Saved Address</div>
        ) : (
          allAddress.map((add) => (
            <div className={`savedCard ${newCardClass}`} key={add._id}>
              <h2>
                {add.firstName} {add.lastName}
              </h2>
              <p>
                {add.address} {add.apartmentNo} {add.city} {add.state}
                {add.pincode}
              </p>
              <button className={toggleClass} onClick={() => selectClick()}>
                {toggleButton ? "Selected" : "Select"}
              </button>
              <DeleteOutlined
                className="deleteIcon"
                onClick={() => deleteOneAddressAPI(add._id)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AddAddress;
