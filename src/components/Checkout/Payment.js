import React from "react";
import { LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { useSelector } from "react-redux";

function Payment({ coin }) {
  const grandTotal = useSelector((state) => state.cartTotal);

  const handlePayment = async () => {
    try {
      const response = await axios.post(process.env.REACT_APP_ORDERS, {
        amount: grandTotal.total + 30 - coin,
      });
      console.log(response.data);
      initPayment(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const initPayment = (data) => {
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
      },
      theme: {
        color: "green",
      },
      redirect: true,
      callback_url: process.env.REACT_APP_CONFIRMATION,
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="sidePanel">
      <h1>Payment</h1>
      <div className="balanceText">
        <img
          src={require("../../assets/coin-icon.png")}
          alt="Coin"
          className="coin-image"
        />
        Super Coin Balance:
        <span className="amount">
          Rs {coin}
          <img
            src={require("../../assets/right-tick-icon.png")}
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
              src={require("../../assets/upi.png")}
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
              src={require("../../assets/CreditCard.png")}
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
              src={require("../../assets/cashIcon.png")}
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
      <button className="proceedButton" onClick={handlePayment}>
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
