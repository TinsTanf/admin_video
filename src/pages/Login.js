import React from "react";
import { Button, Form, Input, message } from "antd";
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { username, password } = values;

    if (username === "admin" && password === "admin123") {
      message.success("Đăng nhập thành công với vai trò Admin!");
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", "admin");
      navigate("/dashboard");
    } else if (username === "user" && password === "user123") {
      message.success("Đăng nhập thành công với vai trò User!");
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("role", "user");
      navigate("/Video");
    } else {
      message.error("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div style={{ width: 300, margin: "100px auto", textAlign: "center" }}>
      <h2>Login</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Button type="primary" block htmlType="submit">
          Sign In
        </Button>
      </Form>

      <div style={{ margin: "20px 0" }}>
        <h4>Hoặc đăng nhập bằng:</h4>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Button
            icon={<GoogleOutlined />}
            size="large"
            shape="circle"
            style={{ backgroundColor: "#db4a39", color: "#fff" }}
          />
          <Button
            icon={<FacebookFilled />}
            size="large"
            shape="circle"
            style={{ backgroundColor: "#1877F2", color: "#fff" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
