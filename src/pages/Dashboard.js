import React from "react";
import { Layout, Card, Table, Progress, Row, Col } from "antd";
import { PieChart, LineChart, Line, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Sidebar from "../components/Sidebar";
import HeaderComponent from "../components/Header";

const { Content } = Layout;

const activityData = [
  { key: "1", user: "User A", contact: "0337746868", action: "Đăng nhập", status: <Progress percent={60} status="active" /> },
  { key: "2", user: "User B", contact: "0337746868", action: "Đăng xuất", status: <Progress percent={60} status="active" /> },
  { key: "3", user: "User C", contact: "0337746868", action: "Tải video", status: <Progress percent={100} status="success" /> }
];

const pieData = [
  { name: "MP4", value: 120, color: "#FF6384" },
  { name: "MKV", value: 38, color: "#36A2EB" }
];

const lineData = [
  { name: "Jan", users: 75 }, { name: "Feb", users: 85 },
  { name: "Mar", users: 90 }, { name: "Apr", users: 78 },
  { name: "May", users: 95 }, { name: "Jun", users: 80 }
];

const recentActivities = [
  { user: "User A", action: "vừa đăng nhập", time: "11 JUL 8:10 PM" },
  { user: "User B", action: "vừa tải video abc.mp4", time: "11 JUL 11:00 PM" },
  { user: "User C", action: "vừa đăng xuất", time: "11 JUL 7:45 PM" }
];

const Dashboard = () => {
  return (
    <Layout style={{ height: "150vh", background: "#1a1d2e" }}>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <Content style={{ padding: "16px", background: "#1a1d2e", color: "white" }}>
          <Row gutter={[16, 16]}>
            {[{ title: "Kho phim", value: 900 }, { title: "Phim hài", value: 120 }, { title: "Phim 5D", value: 340 }, { title: "Kinh dị", value: 80 }, { title: "Hoạt hình", value: 120 }, { title: "Phim mới", value: 300 }].map((item, index) => (
              <Col span={4} key={index}>
                <Card style={{ background: "#252a41", textAlign: "center", color: "white" }}>
                  <Progress type="circle" percent={item.value / 10} width={50} />
                  <div style={{ marginTop: "10px", fontSize: "16px", fontWeight: "bold" }}>{item.title}</div>
                  <div style={{ fontSize: "18px", color: "#FFCE56" }}>{item.value}</div>
                </Card>
              </Col>
            ))}
          </Row>
          <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
            <Col span={12}>
              <Card title="Thống kê người dùng" style={{ background: "#252a41", color: "white" }}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={lineData}>
                    <XAxis dataKey="name" stroke="#ddd" />
                    <YAxis stroke="#ddd" />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#FFCE56" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Loại video" style={{ background: "#252a41", color: "white" }}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </Col>
          </Row>
          <Row gutter={[18, 6]}>
            <Col span={18}>
              <Card title="Hoạt động" style={{ marginTop: "16px", background: "#252a41", color: "white" }}>
                <Table 
                  dataSource={activityData} 
                  columns={[
                    { title: "Người dùng", dataIndex: "user", key: "user" },
                    { title: "CONTACTS", dataIndex: "contact", key: "contact" },
                    { title: "Action", dataIndex: "action", key: "action" },
                    { title: "Status", dataIndex: "status", key: "status" }
                  ]} 
                  pagination={false} 
                />
              </Card>
            </Col>
            <Col span={6}>
              <Card title="Hoạt động gần đây" style={{ marginTop: "16px", background: "#252a41", padding: "16px", color: "white" }}>
                <div style={{ color: "white", fontSize: "14px" }}>
                  {recentActivities.map((activity, index) => (
                    <div 
                      key={index} 
                      style={{ 
                        padding: "12px 16px", 
                        marginBottom: "8px", 
                        background: "#364156", 
                        borderRadius: "8px", 
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" 
                      }}
                    >
                      <strong style={{ color: "#FFCE56" }}>{activity.user}</strong> {activity.action}
                      <div style={{ fontSize: "12px", color: "#aaa", marginTop: "4px" }}>{activity.time}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;