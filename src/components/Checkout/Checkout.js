import React from "react";
import {
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  AlipayCircleOutlined,
  CheckCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";
import "./checkout.css";
import { Button, Checkbox, Form, Input } from "antd";
import coin from "../../assets/coin-icon.png";
import right from "../../assets/right-tick-icon.png";
import upi from "../../assets/upi.png";
import card from "../../assets/creditcard.png";
import cash from "../../assets/cashIcon.png";
import { Link } from "react-router-dom";

const { Step } = Steps;

const Checkout = () => {
  return (
    <>
      <div className="checkout">
        <div className="back">
          <Link to="/cart">
            <button>
              <ArrowLeftOutlined /> Back
            </button>
          </Link>
        </div>
        <Steps className="steps">
          <Step status="finish" title="Cart" icon={<ShoppingCartOutlined />} />
          <Step
            status="process"
            title="Payment"
            icon={<AlipayCircleOutlined />}
          />
          <Step
            status="wait"
            title="Confirmation"
            icon={<CheckCircleOutlined />}
          />
        </Steps>
        <div className="flexFilter">
          <div>
            <div className="addressCard">
              <h1>Address</h1>
              <div className="locationCard">
                <div className="savedCard">
                  <h2>Kavish Garg</h2>
                  <p>215 Revenue Nagar , Mhow Naka, Indore MP, 452009</p>
                  <button>Selected</button>
                  <DeleteOutlined className="deleteIcon" />
                </div>
                <div className="savedCard">
                  <h2>Mihir Soni</h2>
                  <p>Sheetal Nagar ,Sector 11, Surat GJ, 420211</p>
                  <button>Selected</button>
                  <DeleteOutlined className="deleteIcon" />
                </div>
              </div>
            </div>
            <div className="leadDetails">
              <h2>or Add new address</h2>
              <Form name="basic" className="checkoutForm">
                <div className="fullName">
                  <Form.Item>
                    <Input
                      placeholder=" First Name"
                      className="firstName"
                    ></Input>
                  </Form.Item>
                  <Form.Item>
                    <Input
                      placeholder=" Last Name"
                      className="lastName"
                    ></Input>
                  </Form.Item>
                </div>

                <Form.Item>
                  <Input placeholder=" Address" className="addressFld"></Input>
                </Form.Item>
                <Form.Item>
                  <Input
                    placeholder=" Apartment / Suite Number"
                    className="addressFld"
                  ></Input>
                </Form.Item>

                <div className="city">
                  <Form.Item>
                    <Input placeholder=" City" className="cityFld"></Input>
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder=" State" className="cityFld"></Input>
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder=" Pincode" className="cityFld"></Input>
                  </Form.Item>
                </div>

                <Form.Item>
                  <Checkbox className="save-checkbox">
                    Save this information for next time
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <button type="primary" className="save-button">
                    Save
                  </button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="sidePanel">
            <h1>Payment</h1>
            <div className="balanceText">
              <img src={coin} alt="Coin" className="coin-image" />
              Super Coin Balance:
              <span className="amount">
                Rs 60 <img src={right} className="right-tick" alt="one" />
              </span>
            </div>

            <h2 className="paymentMethod">Choose your payment method</h2>

            <div className="allMethod">
              <div className="method">
                <input type="radio" className="radioButton" name="radioB" />
                <label className="labelText">
                  UPI Payment
                  <img src={upi} className="radioUPIIcons" alt="UPI" />
                </label>
              </div>

              <div className="method">
                <input type="radio" className="radioButton" name="radioB" />
                <label className="labelText">
                  Debit/Credit Card
                  <img src={card} className="radioIcons" alt="Card" />
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
                  <img src={cash} className="radioIcons" alt="Cash" />
                </label>
              </div>
            </div>

            {/* <hr className="horizontalLine" /> */}
            <p className="totalText">
              Total <span>Rs. 970</span>
            </p>
            <p className="superCoin">
              SuperCoin Discount<span>-Rs. 60</span>
            </p>
            <hr />
            <p className="finalAmount">Rs. 910</p>
            <hr />
            <Link to='/confirmation'>
            <button className="proceedButton">Proceed</button>
            </Link>
            <p className="protectedText">
              <LockOutlined /> Your data will be protected and everything will
              be private
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
