import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { userAddress } from "../../redux/actions/productActions";

function AddAddress({ deleteOneAddressAPI, allAddress }) {
  const appState = useSelector((state) => state.userState.userAddress);
  const dispatch = useDispatch();

  function selectClick(index) {
    dispatch(userAddress(index));
  }

  const toggleButtonText = (index) => {
    if (index === appState) return "Selected";
    else return "Select";
  };

  const toggleButtonStyles = (index) => {
    if (index === appState) {
      return "selected";
    } else return "";
  };

  const toggleActiveStyles = (index) => {
    if (index === appState) {
      return "savedCard newCard";
    } else return "savedCard";
  };

  return (
    <div className="addressCard">
      <h1>Address</h1>
      <div className="locationCard">
        {allAddress.length === 0 ? (
          <div className="noAddress">No Saved Address</div>
        ) : (
          allAddress.map((add, index) => (
            <div className={toggleActiveStyles(index)} key={index}>
              <h2>
                {add.firstName} {add.lastName}
              </h2>
              <p>
                {add.address} {add.apartmentNo} {add.city} {add.state}
                {add.pincode}
              </p>
              <button
                className={toggleButtonStyles(index)}
                onClick={() => selectClick(index)}
              >
                {toggleButtonText(index)}
              </button>
              <DeleteOutlined
                className="deleteIcon"
                onClick={() => {
                  dispatch(userAddress({}));
                  deleteOneAddressAPI(add._id);
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AddAddress;
