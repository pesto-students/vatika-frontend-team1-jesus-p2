import React, { useEffect, useState } from "react";
import {
  ArrowLeftOutlined,
  ShoppingCartOutlined,
  AlipayCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./checkout.css";
import { Form, Steps } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../redux/actions/productActions";
import { addedAddress } from "./CheckoutAddressFunction";
import Payment from "./Payment";
import AddAddress from "./AddAddress";
import SaveAddress from "./SaveAddress";

const { Step } = Steps;

const Checkout = () => {
  const [form] = Form.useForm();

  const [oneAddress, setOneAddress] = useState({});
  const [coin, setCoin] = useState(0);

  const allAddress = useSelector((state) => state.address.allAddress);
  const dispatch = useDispatch();

  const onAddressSaveAPI = async (values) => {
    const value = { ...values, email: "kavishgarg15@gmail.com" };
    const response = await axios
      .post(process.env.REACT_APP_ADDRESSES, value)
      .catch((err) => console.log("Error", err));
    if (response.data.length !== 0) {
      setOneAddress((previousState) => {
        return { ...previousState, length: response.data.length };
      });
      addedAddress(response.status, form);
    }
  };

  const getAllAddressAPI = async () => {
    const response = await axios
      .get(process.env.REACT_APP_ADDRESSES, {
        params: {
          email: "kavishgarg15@gmail.com",
        },
      })
      .catch((err) => console.log("Error", err));
    dispatch(setAddress(response.data));
  };

  const deleteOneAddressAPI = async (id) => {
    const response = await axios
      .delete(process.env.REACT_APP_ADDRESSES, {
        params: {
          id: id,
        },
      })
      .catch((err) => console.log("Error", err));
    setOneAddress((previousState) => {
      return { ...previousState, count: response.data.deletedCount };
    });
  };

  const superCoinAPI = async () => {
    const response = await axios
      .get(process.env.REACT_APP_SUPERCOIN, {
        params: {
          email: "kavishgarg15@gmail.com",
        },
      })
      .catch((err) => console.log("Error", err));
    console.log(response.data[0].supercoin);
    setCoin(response.data[0].supercoin);
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
            <AddAddress
              deleteOneAddressAPI={deleteOneAddressAPI}
              allAddress={allAddress}
            />
            <SaveAddress
              onAddressSaveAPI={onAddressSaveAPI}
              allAddress={allAddress}
              form={form}
            />
          </div>
          <Payment coin={coin} />
        </div>
      </div>
    </>
  );
};

export default Checkout;
