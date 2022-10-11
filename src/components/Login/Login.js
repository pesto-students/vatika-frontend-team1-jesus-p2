import { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../../redux/actions/productActions";
import './Login.css';

const Login = ({ handleLoginCancel, showSignUpModal }) => {
  const [message, setMessage] = useState("");

  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  console.log(login);

  const handleSubmit = async (values) => {
    try {
      const url = "http://localhost:5000/api/login";
      const response = await axios.post(url, values);
      localStorage.setItem("token", response.data.token);
      setMessage(response.data.message);
      console.log(response.data.message);

      if (response.status === 200) {
        handleLoginCancel();
        dispatch(userLoggedIn());
      }
    } catch (error) {
      console.log(error.response.data.message);
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="login_form_container">
          <div className="left-login" style={{ width: "900px" }}>
            <div className="loginComp">
              <h1 style={{ fontSize: "35px" }}>Login to Your Account</h1>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={(values) => {
                  handleSubmit(values);
                }}
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email" },
                    { type: "email", message: "Please enter a valid email" },
                    { whitespace: true, message: "Email cannot be empty" },
                  ]}
                  hasFeedback
                >
                  <Input
                    prefix={
                      <MailOutlined
                        style={{
                          color: "#208854",
                          fontSize: "18px",
                        }}
                      />
                    }
                    placeholder="Enter your email"
                    className="input"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password" },
                    {
                      whitespace: true,
                      message: "Password cannot be empty",
                      type: "password",
                    },
                    {
                      min: 9,
                      message: "Password must be at least 8 characters long",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.Password
                    prefix={
                      <LockOutlined
                        style={{
                          color: "#208854",
                          fontSize: "18px",
                        }}
                      />
                    }
                    placeholder="Enter your password"
                    className="input"
                  />
                </Form.Item>

                <Form.Item>
                  {message && <div className="success_msg">{message}</div>}

                  <Button
                    type="primary"
                    htmlType="submit"
                    className="green_btn"
                    style={{ backgroundColor: "#208854" }}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>

          <div className="right-login">
            <h1>New Here ?</h1>
            <button
              type="button"
              className="white_btn"
              style={{ color: "#208854", background: "white" }}
              onClick={() => {
                handleLoginCancel();
                showSignUpModal();
              }}
            >
              Sing Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
