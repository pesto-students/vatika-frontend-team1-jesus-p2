import React from "react";
import "./Confirmation.css";
import {
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  AlipayCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { Space } from "antd";

const { Step } = Steps;

function Confirmation() {
  return (
    <div className="confirm">
      <div className="back">
        <button>
          <ArrowLeftOutlined /> Back
        </button>
      </div>
      {/* process wait finish  */}
      <Steps className="steps">
        <Step status="finish" title="Cart" icon={<ShoppingCartOutlined />} />
        <Step status="finish" title="Payment" icon={<AlipayCircleOutlined />} />
        <Step
          status="finish"
          title="Confirmation"
          icon={<CheckCircleOutlined />}
        />
      </Steps>

      <h1>
        <Space>
          <CheckCircleTwoTone twoToneColor="#52c41a" />
        </Space>{" "}
        Order Placed Successfully
      </h1>

      <div className="confirmation">
        <div className="f-confirmation">
          <div className="orderDetails">
            <h2>Order ID: #5251KKG</h2>
            <p>Name: Kavish Garg</p>
            <p>Delivery Date: 3-4 Days </p>
            <p>Order Total: Rs 910</p>
            <p>Order Date:01/10/2022</p>
            <h2>Shipping Address:</h2>
            <p>Kavish Garg</p>
            <p>215,Revenue Nagar Indore </p>
            <p>+91-8518052051</p>
          </div>

          <div className="coin">
            <img src={require("../../assets/SuperCoin.png")} alt="SuperCoin" />
            <h3>Congratulation!</h3>
            <p>You Earned 20 Super Coins </p>
          </div>
        </div>

        <div className="join">
          <p>
            We believe that every space can be made more beautiful with plants!
            Come, join us in our vision to make all spaces green and healthy!
          </p>
          <button>Join Us</button>
        </div>
      </div>
      <div className="two-button">
        <button className="contShopping">Continue Shopping</button>
        <button className="orderHistory">Order History</button>
      </div>
    </div>
  );
}

export default Confirmation;
