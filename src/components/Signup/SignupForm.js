import React from "react";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { userNameRule, emailRule, passRule } from "./SignupFormRules";

function SignupForm({
  handleSubmit,
  form,
  loading,
  setLoading,
  responseMessage,
}) {
  return (
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
      <Form.Item name="userName" rules={userNameRule} hasFeedback>
        <Input
          prefix={
            <UserOutlined style={{ color: "#208854", fontSize: "18px" }} />
          }
          placeholder="Enter your Username"
          className="input"
        />
      </Form.Item>
      <Form.Item name="email" rules={emailRule} hasFeedback>
        <Input
          prefix={
            <MailOutlined style={{ color: "#208854", fontSize: "18px" }} />
          }
          placeholder="Enter your email"
          className="input"
        />
      </Form.Item>

      <Form.Item name="password" rules={passRule} hasFeedback>
        <Input.Password
          prefix={
            <LockOutlined style={{ color: "#208854", fontSize: "18px" }} />
          }
          placeholder="Enter your password"
          className="input"
        />
      </Form.Item>

      <Form.Item>
        {responseMessage && <div className="error_msg">{responseMessage}</div>}
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
  );
}

export default SignupForm;
