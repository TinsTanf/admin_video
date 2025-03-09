import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header style={{ background: "#222738", padding: "0 20px", color: "#fff", fontSize: "18px" }}>
      Quản lý hệ thống
    </Header>
  );
};

export default AppHeader;
