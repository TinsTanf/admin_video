import React from "react";
import { Layout, Menu, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { HomeOutlined, UserOutlined, BarChartOutlined, CloudSyncOutlined, LogoutOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Sider theme="dark" collapsible style={{ background: "#222738" }}>
      <div className="logo" style={{ color: "white", padding: "16px", fontSize: "18px" }}>📺 Video</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} style={{ background: "#222738", flex: 1 }}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BarChartOutlined />}>
          <Link to="/statistical">Statistical</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<CloudSyncOutlined />}>
          <Link to="/backup">Backup & Restore</Link>
        </Menu.Item>
      </Menu>
      <div style={{ padding: "16px" }}>
        <Button
          type="primary"
          danger
          icon={<LogoutOutlined />}
          block
          onClick={handleLogout}
        >
          Đăng xuất
        </Button>
      </div>
    </Sider>
  );
};

export default Sidebar;
