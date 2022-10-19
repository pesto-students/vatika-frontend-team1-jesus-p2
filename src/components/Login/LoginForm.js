import React from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { emailRules, passwordRules } from "./LoginFormRules";

function LoginForm({ handleSubmit, message, loading, setLoading }) {
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
    >
      <Form.Item name="email" rules={emailRules} hasFeedback>
        <Input
          prefix={<MailOutlined style={{ color: "#208854", fontSize: "18px" }} />}
          placeholder="Enter your email"
          className="input"
        />
      </Form.Item>

      <Form.Item name="password" rules={passwordRules} hasFeedback>
        <Input.Password
          prefix={<LockOutlined style={{ color: "#208854", fontSize: "18px" }} />}
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
          disabled={loading ? true : false}
          loading={loading ? true : false}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
