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
              width: "50%",
              textAlign: "center",
              color: "white",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              position: "relative", // Để căn chỉnh nhóm icon bên trái
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
              <SyncOutlined style={{ fontSize: "30px" }} />
              <FileOutlined style={{ fontSize: "30px" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
              <FolderOpenOutlined style={{ fontSize: "30px" }} />
              <SettingOutlined style={{ fontSize: "30px" }} />
            </div>

            {/* ✅ Nhóm 3 icon bên trái - Căn dọc */}
            <div
              style={{
                position: "absolute",
                left: "10px", // Căn sát bên trái
                top: "50%",
                transform: "translateY(-50%)", // Giữ vị trí chính giữa theo chiều dọc
                display: "flex",
                flexDirection: "column", // Xếp icon theo chiều dọc
                gap: "20px", // Khoảng cách giữa các icon
              }}
            >
              <UserOutlined style={{ fontSize: "30px" }} />
              <CloudOutlined style={{ fontSize: "30px" }} />
              <SettingOutlined style={{ fontSize: "30px" }} />
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
                  <VideoCameraOutlined style={{ fontSize: "20px", marginRight: "8px" }} /> Video
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FileOutlined style={{ fontSize: "20px", marginRight: "8px" }} /> File
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <PictureOutlined style={{ fontSize: "20px", marginRight: "8px" }} /> Picture
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
                boxShadow: "0 5px 15px rgba(255, 64, 129, 0.3)",
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
