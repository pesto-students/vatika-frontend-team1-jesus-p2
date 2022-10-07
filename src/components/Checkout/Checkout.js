import React, { useEffect,useState } from "react";
import {
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  AlipayCircleOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  LockOutlined,
} from "@ant-design/icons";
import "./checkout.css";
import { Checkbox, Form, Input,notification,Steps } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../redux/actions/productActions";

const { Step } = Steps;

const Checkout = () => {
  const [form] = Form.useForm();
  const [oneAddress, setOneAddress] = useState({});
  const [toggleButton, setToggleButton] = useState(false);
  const [coin, setCoin] = useState(0);

  const allAddress = useSelector((state) => state.address.allAddress);
  const grandTotal = useSelector((state) => state.cartTotal);

  const dispatch = useDispatch();

  console.log("All Address:", allAddress);

  function selectClick() {
    setToggleButton((toggleButton) => !toggleButton);
  }

  const toggleClass = toggleButton ? "selected" : "";
  const newCardClass = toggleButton ? "newCard" : "";

  const addedAddress = (data) => {
    if (data === "Address Already Saved") {
      notification.error({
        message: `${data}`,
        placement: "bottom",
        duration: 1.5,
      });
    } else {
      notification.success({
        message: `${data}`,
        placement: "bottom",
        duration: 1.5,
      });
      form.resetFields();
    }
  };

  const moreThenThreeAddress = () => {
    notification.error({
      message:"List Full , Delete Few Address !",
      placement:'bottom',
      duration:1.5,
    });
  };

  const onAddressSaveAPI = async (values) => {
    const value = { ...values, email: "kavishgarg15@gmail.com" };
    const response = await axios
      .post("http://localhost:5000/address", value)
      .catch((err) => console.log("Error", err));
    // console.log(response.data);
    if (response.data.length !== 0) {
      setOneAddress((previousState) => {
        return { ...previousState, length: response.data.length };
      });
      addedAddress(response.data);
    }
  };

  const getAllAddressAPI = async () => {
    const response = await axios
      .get("http://localhost:5000/address", {
        params: {
          email: "kavishgarg15@gmail.com",
        },
      })
      .catch((err) => console.log("Error", err));
    // console.log(response.data);
    dispatch(setAddress(response.data));
  };

  const deleteOneAddressAPI = async (id) => {
    const response = await axios
      .delete("http://localhost:5000/address", {
        params: {
          id: id,
        },
      })
      .catch((err) => console.log("Error", err));
    // console.log(response.data);
    setOneAddress((previousState) => {
      return { ...previousState, count: response.data.deletedCount };
    });
  };

  const superCoinAPI = async () => {
    const response = await axios
      .get("http://localhost:5000/supercoin", {
        params: {
          email: "kavishgarg15@gmail.com",
        },
      })
      .catch((err) => console.log("Error", err));

    console.log(response.data[0].supercoin);
    setCoin(response.data[0].supercoin);
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post("http://localhost:5000/orders", {
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
      name: "Money Plant",
      description: "Test Transaction",
      order_id: data.id,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            "http://localhost:5000/verify",
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
      callback_url: "http://localhost:3000/confirmation",
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    superCoinAPI();
  }, []);

  useEffect(() => {
    getAllAddressAPI();
  }, [oneAddress]);

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
                      <button
                        className={toggleClass}
                        onClick={() => selectClick()}
                      >
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

            <div className="leadDetails">
              <h2>or Add new address</h2>
              <Form
                autoComplete="off"
                onFinish={(values) => {
                  if (allAddress.length === 3) {
                    moreThenThreeAddress();
                  } else {
                    onAddressSaveAPI(values);
                  }
                }}
                form={form}
              >
                <div className="fullName">
                  <Form.Item
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter First Name",
                      },
                      {
                        whitespace: true,
                        message: "First Name cannot be Empty",
                      },
                      {
                        min: 3,
                        message: "First Name must be Minimum 3 characters",
                      },
                      {
                        max: 15,
                        message: "First Name must be Under 15 characters",
                      },
                      {
                        type: Number,
                        message: "Number Not Allowed in First Name",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input
                      placeholder=" First Name"
                      className="firstName"
                    ></Input>
                  </Form.Item>

                  <Form.Item
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Last Name",
                      },
                      {
                        whitespace: true,
                      },
                      {
                        min: 3,
                        message: "Last Name must be Minimum 3 characters",
                      },
                      {
                        max: 15,
                        message: "Last Name must be Under 15 characters",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input
                      placeholder=" Last Name"
                      className="lastName"
                    ></Input>
                  </Form.Item>
                </div>

                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Address",
                    },
                    {
                      whitespace: true,
                    },
                    {
                      max: 40,
                      message: "Address must be under 40 characters",
                    },
                  ]}
                  hasFeedback
                >
                  <Input placeholder=" Address" className="addressFld"></Input>
                </Form.Item>
                <Form.Item
                  name="apartmentNo"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Apartment/Street Details",
                    },
                    {
                      whitespace: true,
                    },
                    {
                      max: 40,
                      message: "Apartment/Street must be under 40 characters",
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    placeholder=" Apartment / Suite Number"
                    className="addressFld"
                  ></Input>
                </Form.Item>

                <div className="city">
                  <Form.Item
                    name="city"
                    rules={[
                      {
                        required: true,
                        message: "Please enter City",
                      },
                      {
                        whitespace: true,
                      },
                      {
                        max: 15,
                        message: "City must be under 15 characters",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder=" City" className="cityFld"></Input>
                  </Form.Item>
                  <Form.Item
                    name="state"
                    rules={[
                      {
                        required: true,
                        message: "Please enter State",
                      },
                      {
                        whitespace: true,
                      },
                      {
                        max: 15,
                        message: "City must be under 15 characters",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input placeholder=" State" className="cityFld"></Input>
                  </Form.Item>
                  <Form.Item
                    name="pincode"
                    rules={[
                      {
                        required: true,
                        message: "Please enter Pincode",
                      },
                      {
                        pattern: new RegExp("^[0-9]*$"),
                        message: "Must Have Only Number!",
                      },
                      {
                        whitespace: true,
                      },
                      {
                        max: 6,
                        message: "Pincode must be under 6 Digit",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input
                      controls={false}
                      placeholder=" Pincode"
                      className="cityFld"
                    ></Input>
                  </Form.Item>
                </div>

                <Form.Item>
                  <Checkbox className="save-checkbox" defaultChecked>
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
              <img src={require("../../assets/coin-icon.png")} alt="Coin" className="coin-image" />
              Super Coin Balance:
              <span className="amount">
                Rs {coin} <img src={require("../../assets/right-tick-icon.png")} className="right-tick" alt="one" />
              </span>
            </div>

            <h2 className="paymentMethod">Choose your payment method</h2>

            <div className="allMethod">
              <div className="method">
                <input type="radio" className="radioButton" name="radioB" />
                <label className="labelText">
                  UPI Payment
                  <img src={require("../../assets/upi.png")} className="radioUPIIcons" alt="UPI" />
                </label>
              </div>

              <div className="method">
                <input type="radio" className="radioButton" name="radioB" />
                <label className="labelText">
                  Debit/Credit Card
                  <img src={require("../../assets/CreditCard.png")} className="radioIcons" alt="Card" />
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
                  <img src={require("../../assets/cashIcon.png")} className="radioIcons" alt="Cash" />
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
            {/* <Link to="/confirmation"> */}
            <button className="proceedButton" onClick={handlePayment}>
              Proceed
            </button>
            {/* </Link> */}
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
