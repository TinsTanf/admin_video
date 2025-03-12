import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Login data:", values);
    localStorage.setItem("isAuthenticated", "true"); 
    navigate("/dashboard"); 
  };

  return (
    <div style={{ width: 300, margin: "100px auto" }}>
      <h2>Login</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: "Vui lòng nhập username!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Vui lòng nhập password!" }]}>
          <Input.Password />
        </Form.Item>
        <Button type="primary" block htmlType="submit">Sign In</Button>
      </Form>
    </div>
  );
};

export default Login;
