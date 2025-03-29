import React, { useState } from "react";
import { Layout, Table, Row, Col, Typography, Input } from "antd";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/Header";

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const Statistical = () => {
  const [userData, setUserData] = useState(
    Array(4).fill({
      user: "Nguyễn A",
      time: "24/02/2025 - 10:30 AM",
      ip: "192.168.1.1",
      device: "Windows 10",
    })
  );

  const [searchData, setSearchData] = useState([
    { user: "Nguyễn A", time: "24/02/2025 - 10:30 AM", keyword: "Phim hành động", device: "Windows 10" },
    { user: "Nguyễn A", time: "24/02/2025 - 10:30 AM", keyword: "Phim hoạt hình", device: "Windows 10" },
    { user: "Nguyễn A", time: "24/02/2025 - 10:30 AM", keyword: "Phim tâm lý", device: "Windows 10" },
    { user: "Nguyễn A", time: "24/02/2025 - 10:30 AM", keyword: "Phim dài tập", device: "Windows 10" },
  ]);

  const handleSearchUser = (value) => {
    const filteredData = Array(4)
      .fill({
        user: "Nguyễn A",
        time: "24/02/2025 - 10:30 AM",
        ip: "192.168.1.1",
        device: "Windows 10",
      })
      .filter((item) => item.user.toLowerCase().includes(value.toLowerCase()));
    setUserData(filteredData);
  };

  const handleSearchKeyword = (value) => {
    const filteredData = [
      { user: "Nguyễn A", time: "24/02/2025 - 10:30 AM", keyword: "Phim hành động", device: "Windows 10" },
      { user: "Nguyễn A", time: "24/02/2025 - 10:30 AM", keyword: "Phim hoạt hình", device: "Windows 10" },
      { user: "Nguyễn A", time: "24/02/2025 - 10:30 AM", keyword: "Phim tâm lý", device: "Windows 10" },
      { user: "Nguyễn A", time: "24/02/2025 - 10:30 AM", keyword: "Phim dài tập", device: "Windows 10" },
    ].filter((item) => item.keyword.toLowerCase().includes(value.toLowerCase()));
    setSearchData(filteredData);
  };

  const userColumns = [
    { title: "User", dataIndex: "user", key: "user", sorter: (a, b) => a.user.localeCompare(b.user) },
    { title: "Thời gian", dataIndex: "time", key: "time", sorter: (a, b) => new Date(a.time) - new Date(b.time) },
    { title: "IP", dataIndex: "ip", key: "ip", sorter: (a, b) => a.ip.localeCompare(b.ip) },
    { title: "Thiết bị", dataIndex: "device", key: "device", sorter: (a, b) => a.device.localeCompare(b.device) },
  ];

  const searchColumns = [
    { title: "User", dataIndex: "user", key: "user", sorter: (a, b) => a.user.localeCompare(b.user) },
    { title: "Thời gian", dataIndex: "time", key: "time", sorter: (a, b) => new Date(a.time) - new Date(b.time) },
    { title: "Từ khóa tìm kiếm", dataIndex: "keyword", key: "keyword", sorter: (a, b) => a.keyword.localeCompare(b.keyword) },
    { title: "Thiết bị", dataIndex: "device", key: "device", sorter: (a, b) => a.device.localeCompare(b.device) },
  ];

  const data = [
    { category: "Ngày 1", Sáng: 4, Trưa: 2, Tối: 2 },
    { category: "Ngày 2", Sáng: 3, Trưa: 4, Tối: 2 },
    { category: "Ngày 3", Sáng: 2, Trưa: 2, Tối: 3 },
    { category: "Ngày 4", Sáng: 4, Trưa: 3, Tối: 5 },
  ];

  return (
    <Layout style={{ height: "150vh", background: "#f5f5f5" }}>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <Content style={{ padding: 20 }}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Search
                placeholder="Tìm kiếm"
                onSearch={handleSearchUser}
                style={{ marginBottom: 16 }}
              />
              <Table
                dataSource={userData}
                columns={userColumns}
                pagination={false}
                bordered
                title={() => <Title level={4}>Lịch sử truy cập</Title>}
              />
            </Col>
            <Col span={12}>
              <Search
                placeholder="Tìm kiếm"
                onSearch={handleSearchKeyword}
                style={{ marginBottom: 16 }}
              />
              <Table
                dataSource={searchData}
                columns={searchColumns}
                pagination={false}
                bordered
                title={() => <Title level={4}>Lịch sử tìm kiếm</Title>}
              />
            </Col>
          </Row>

          <Row justify="center" style={{ marginTop: 30 }}>
            <Col span={24}>
              <Title level={4} style={{ textAlign: "center" }}>
                Số lượt truy cập theo thời gian
              </Title>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Sáng" fill="#4285F4" />
                  <Bar dataKey="Trưa" fill="#EA4335" />
                  <Bar dataKey="Tối" fill="#34A853" />
                </BarChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Statistical;
