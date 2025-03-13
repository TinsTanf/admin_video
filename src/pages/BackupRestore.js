import React, { useState } from "react";
import { Layout, Button, Checkbox } from "antd";
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
import "./BackupRestore.css";

const { Content } = Layout;

const BackupRestore = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const backupOptions = [
    { key: "video", icon: VideoCameraOutlined, label: "Video" },
    { key: "file", icon: FileOutlined, label: "File" },
    { key: "picture", icon: PictureOutlined, label: "Picture" },
  ];

  const handleCheckboxChange = (key, checked) => {
    setSelectedItems((prev) =>
      checked ? [...prev, key] : prev.filter((item) => item !== key)
    );
  };

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
          <div className="backup-container">
            <h2 className="backup-title">
              Backup & <span>Restore</span>
            </h2>

            <div className="cloud-icon">
              <CloudOutlined />
            </div>

            <div className="function-icons">
              {[SyncOutlined, FileOutlined, FolderOpenOutlined, SettingOutlined].map((Icon, index) => (
                <Icon key={index} />
              ))}
            </div>

            <div className="sidebar-mini">
              {[UserOutlined, CloudOutlined, SettingOutlined].map((IconComponent, index) => (
                <div key={index} className="sidebar-icon">
                  <IconComponent style={{ fontSize: "26px", color: "#495057" }} />
                </div>
              ))}
            </div>

            <div className="app-backup-box">
              <h3>Application Backup</h3>
              <div className="app-backup-options">
                {backupOptions.map(({ key, icon: Icon, label }) => (
                  <div key={key}>
                    <Checkbox
                      onChange={(e) => handleCheckboxChange(key, e.target.checked)}
                    />
                    <Icon />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <Button
              type="primary"
              className="backup-button"
              disabled={selectedItems.length === 0}
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
