import { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import "./Signup.css";

const Signup = ({ handleSignUpCancel, showLoginModal }) => {
  const [form] = Form.useForm();

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const url = process.env.REACT_APP_SIGNUP;
      const response = await axios.post(url, values);
      console.log(response);
      setLoading(false);
      setResponseMessage(response.data.message);

      if (response.status === 201) {
        form.resetFields();
      }
    } catch (err) {
      setLoading(false);
      setResponseMessage(err.response.data.message);
    }
  };

  return (
    <>
      <div className="signup_container">
        <div className="signup_form_container">
          <div className="left-signUp">
            <h1>Have an Account</h1>
            <button
              type="button"
              className="white_btn"
              style={{ color: "#208854" }}
              onClick={() => {
                handleSignUpCancel();
                showLoginModal();
              }}
            >
              Login
            </button>
          </div>

          <div className="right-signUp">
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
                setLoading(true);
              }}
              autoComplete="off"
              form={form}
            >
              <h1 style={{ fontSize: "35px" }}>Create Your Account</h1>
              <Form.Item
                name="userName"
                rules={[
                  { required: true, message: "Please input your username" },
                  {
                    min: 5,
                    message: "Username should be at least 5 characters long",
                  },
                  { whitespace: true, message: "Username cannot be empty" },
                ]}
                hasFeedback
              >
                <Input
                  prefix={
                    <UserOutlined
                      style={{ color: "#208854", fontSize: "18px" }}
                    />
                  }
                  placeholder="Enter your Username"
                  className="input"
                />
              </Form.Item>
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
                      style={{ color: "#208854", fontSize: "18px" }}
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
                      style={{ color: "#208854", fontSize: "18px" }}
                    />
                  }
                  placeholder="Enter your password"
                  className="input"
                />
              </Form.Item>

              <Form.Item>
                {responseMessage && (
                  <div className="error_msg">{responseMessage}</div>
                )}
                <Button
                  type="primary"
                  htmlType="submit"
                  className="green_btn"
                  style={{ backgroundColor: "#208854" }}
                  disabled={loading ? true : false}
                  loading={loading ? true : false}
                >
                  Signup
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
