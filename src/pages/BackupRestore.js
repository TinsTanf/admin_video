import React from "react";
import { Layout, Button } from "antd";
import {
  UserOutlined,
  CloudOutlined,
  SettingOutlined,
  FolderOpenOutlined,
  SyncOutlined,
  FileOutlined,
  VideoCameraOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/Header";

const { Content } = Layout;

const BackupRestore = () => {
  // Style chung cho icon
  const iconHoverStyle = {
    fontSize: "30px",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  };

  // Xử lý hiệu ứng hover
  const iconHoverEffect = (e) => (e.target.style.transform = "scale(1.2)");
  const iconLeaveEffect = (e) => (e.target.style.transform = "scale(1)");

  return (
    <Layout style={{ minHeight: "100vh", background: "#F5F7FA" }}>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <Content
          style={{
            padding: 24,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              borderRadius: "20px",
              padding: "40px",
              width: "100%",
              textAlign: "center",
              color: "white",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              position: "relative",
            }}
          >
            {/* Tiêu đề */}
            <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "20px" }}>
              Backup <span style={{ fontStyle: "italic", textDecoration: "underline" }}>Restore</span>
            </h2>

            {/* Cloud Icon */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#4a2e97",
                width: "100px",
                height: "100px",
                margin: "20px auto",
                borderRadius: "50%",
              }}
            >
              <CloudOutlined style={{ fontSize: "50px", color: "white" }} />
            </div>

            {/* Các icon nhỏ ở giữa */}
            <div style={{ display: "flex", justifyContent: "center", gap: "40px", margin: "20px 0" }}>
              <SyncOutlined
                style={iconHoverStyle}
                onMouseEnter={iconHoverEffect}
                onMouseLeave={iconLeaveEffect}
              />
              <FileOutlined
                style={iconHoverStyle}
                onMouseEnter={iconHoverEffect}
                onMouseLeave={iconLeaveEffect}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
              <FolderOpenOutlined
                style={iconHoverStyle}
                onMouseEnter={iconHoverEffect}
                onMouseLeave={iconLeaveEffect}
              />
              <SettingOutlined
                style={iconHoverStyle}
                onMouseEnter={iconHoverEffect}
                onMouseLeave={iconLeaveEffect}
              />
            </div>

            {/* ✅ Nhóm 3 icon bên trái - Căn dọc */}
            <div
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <UserOutlined
                style={iconHoverStyle}
                onMouseEnter={iconHoverEffect}
                onMouseLeave={iconLeaveEffect}
              />
              <CloudOutlined
                style={iconHoverStyle}
                onMouseEnter={iconHoverEffect}
                onMouseLeave={iconLeaveEffect}
              />
              <SettingOutlined
                style={iconHoverStyle}
                onMouseEnter={iconHoverEffect}
                onMouseLeave={iconLeaveEffect}
              />
            </div>

            {/* Hộp Application Backup */}
            <div
              style={{
                background: "#5e35b1",
                padding: "20px",
                marginTop: "30px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ marginBottom: "10px" }}>Application Backup</h3>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <VideoCameraOutlined
                    style={{ fontSize: "20px", marginRight: "8px", cursor: "pointer" }}
                    onMouseEnter={iconHoverEffect}
                    onMouseLeave={iconLeaveEffect}
                  />{" "}
                  Video
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FileOutlined
                    style={{ fontSize: "20px", marginRight: "8px", cursor: "pointer" }}
                    onMouseEnter={iconHoverEffect}
                    onMouseLeave={iconLeaveEffect}
                  />{" "}
                  File
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PictureOutlined
                    style={{ fontSize: "20px", marginRight: "8px", cursor: "pointer" }}
                    onMouseEnter={iconHoverEffect}
                    onMouseLeave={iconLeaveEffect}
                  />{" "}
                  Picture
                </div>
              </div>
            </div>

            {/* Nút Backup */}
            <Button
              type="primary"
              style={{
                marginTop: "20px",
                background: "#ff4081",
                borderColor: "#ff4081",
                borderRadius: "10px",
                fontWeight: "bold",
                padding: "10px 20px",
                fontSize: "16px",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0 5px 15px rgba(255, 64, 129, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#ff79b0";
                e.target.style.boxShadow = "0 8px 20px rgba(255, 64, 129, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#ff4081";
                e.target.style.boxShadow = "0 5px 15px rgba(255, 64, 129, 0.3)";
              }}
            >
              Backup Now
            </Button>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BackupRestore;
