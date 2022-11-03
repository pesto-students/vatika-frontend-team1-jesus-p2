import React from "react";
import { LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useSelector } from "react-redux";
import { notification } from "antd";

function Payment({ coin }) {
  const grandTotal = useSelector((state) => state.cartTotal);
  const appState = useSelector((state) => state.userState.userAddress);

  const handlePayment = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_ORDERS, {
        amount: grandTotal.total + 30 - coin,
      });
      initPayment(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const initPayment = (data) => {
    console.log("Init Payment");
    const options = {
      key: "rzp_test_AXxW6a7PbNR2VF",
      amount: data.amount,
      currency: data.currency,
      name: "Vatika Payment",
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            process.env.REACT_APP_VERIFY,
            response
          );
          console.log(data);
        } catch (error) {
          console.log(error);
        }
        console.log("hello world");
        window.location.href = '/confirmation'
      },
      theme: {
        color: "green",
      },
      redirect: true,
      callback_url: process.env.REACT_APP_CONFIRMATION,
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    console.log("Hello Payment method!");
  };

  const handleAddressAndPayment = () => {
    if (typeof appState === "object") return selectAddressError();
    if (typeof appState === "number") return handlePayment();
  };

  const selectAddressError = () => {
    notification.error({
      message: "Select Address",
      placement: "top",
      duration: 1.5,
    });
  };

  return (
    <div className="sidePanel">
      <h1>Payment</h1>
      <div className="balanceText">
        <img
          src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863254/Vatika/React%20FrontEnd/coin-icon_lvykpa.png"
          alt="Coin"
          className="coin-image"
        />
        Super Coin Balance:
        <span className="amount">
          Rs {coin}
          <img
            src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863256/Vatika/React%20FrontEnd/right-tick-icon_tqdgfr.png"
            className="right-tick"
            alt="one"
          />
        </span>
      </div>

      <h2 className="paymentMethod">Choose your payment method</h2>

      <div className="allMethod">
        <div className="method">
          <input type="radio" className="radioButton" name="radioB" />
          <label className="labelText">
            UPI Payment
            <img
              src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863255/Vatika/React%20FrontEnd/upi_hll2fw.png"
              className="radioUPIIcons"
              alt="UPI"
            />
          </label>
        </div>

        <div className="method">
          <input type="radio" className="radioButton" name="radioB" />
          <label className="labelText">
            Debit/Credit Card
            <img
              src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863254/Vatika/React%20FrontEnd/CreditCard_gr5l7x.png"
              className="radioIcons"
              alt="Card"
            />
          </label>
        </div>

        <div className="method">
          <input
            type="radio"
            className="radioButton"
            name="radioB"
            defaultChecked
          />
          <label className="labelText">
            Cash On Delivery
            <img
              src="https://res.cloudinary.com/ds4gbbc6g/image/upload/v1665863254/Vatika/React%20FrontEnd/cashIcon_dgdyjm.png"
              className="radioIcons"
              alt="Cash"
            />
          </label>
        </div>
      </div>

      <p className="totalText">
        Total <span>Rs {grandTotal.total + 30}</span>
      </p>
      <p className="superCoin">
        SuperCoin Discount<span>-Rs {coin}</span>
      </p>
      <hr />
      <p className="finalAmount">Rs. {grandTotal.total + 30 - coin}</p>
      <hr />
      <button className="proceedButton" onClick={handleAddressAndPayment}>
        Proceed
      </button>
      <p className="protectedText">
        <LockOutlined /> Your data will be protected and everything will be
        private
      </p>
    </div>
  );
}

export default Payment;
