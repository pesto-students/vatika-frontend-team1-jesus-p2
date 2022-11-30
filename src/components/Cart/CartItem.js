import React from "react";
import { useDispatch } from "react-redux";
import { notification } from "antd";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import {
  inccQuantity,
  removeFromCart,
  descQuantity,
} from "../../redux/actions/productActions";

function CartItem({ cart }) {
  const dispatch = useDispatch();

  const deleteItem = () => {
    notification.error({
      message: "Item Deleted",
      placement: "top",
      duration: 1.5,
    });
  };

  return (
    <div>
      {cart.map((plant) => (
        <div className="item" key={plant._id}>
          <div className="plant-image">
            <img src={plant.image} alt={plant.name} />
          </div>
          <div className="pot">
            <h2>{plant.name}</h2>
            <p>Pot Color</p>
            <input
              type="radio"
              className="redRadio"
              id="red"
              name="radio-button"
            />
            <label htmlFor="red">Red</label>
            <input
              type="radio"
              className="blackRadio"
              id="black"
              name="radio-button"
            />
            <label htmlFor="black">Black</label>
            <input
              type="radio"
              className="greenRadio"
              id="white"
              name="radio-button"
            />
            <label htmlFor="green">Green</label>
          </div>
          <div className="quantity">
            <PlusCircleOutlined
              className="quant-icon"
              onClick={() => {
                dispatch(inccQuantity(plant));
              }}
            />
            <h2>{plant.qty}</h2>
            <MinusCircleOutlined
              className="quant-icon"
              onClick={() => {
                dispatch(descQuantity(plant));
              }}
            />
          </div>
          <div className="rate">
            <h2>Rs {plant.price * plant.qty}</h2>
            <button
              onClick={() => {
                deleteItem();
                dispatch(removeFromCart(plant));
              }}
            >
              <DeleteOutlined /> Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
