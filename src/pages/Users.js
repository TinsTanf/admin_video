import React, { useState } from "react";
import { Table, Button, Input, Form, Layout, Select, Popconfirm, message } from "antd";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const { Content } = Layout;
const { Option } = Select;

const Users = () => {
  const [form] = Form.useForm();
  const [users, setUsers] = useState([
    {
      key: "1",
      name: "Nguyễn Văn A",
      phone: "0337174666",
      email: "hanamtop1@gmail.com",
      status: "Đã kích hoạt",
    },
    {
      key: "2",
      name: "Nguyễn B",
      phone: "",
      email: "",
      status: "Chưa kích hoạt",
    },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  const handleEdit = (record) => {
    setEditingUser(record);
    form.setFieldsValue(record);
  };

  const handleDelete = (key) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.key !== key));
    message.success("Xóa người dùng thành công!");
  };

  const handleCancel = () => {
    setEditingUser(null);
    form.resetFields();
  };

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.key === editingUser.key ? { ...user, ...values } : user))
      );
      setEditingUser(null);
      message.success("Cập nhật thành công!");
    });
  };

  const handleCreateUser = () => {
    const newUser = {
      key: Date.now().toString(),
      name: "Người dùng mới",
      phone: "",
      email: "",
      status: "Chưa kích hoạt",
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleRefresh = () => {
    message.success("Danh sách người dùng đã được làm mới!");
  };

  const columns = [
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Số điện thoại", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Trạng thái", dataIndex: "status", key: "status" },
    {
      title: "Hành động"  ,
      key: "action",
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            Chỉnh sửa
          </Button>
          <Popconfirm title="Bạn có chắc muốn xóa?" onConfirm={() => handleDelete(record.key)} okText="Có" cancelText="Hủy">
            <Button type="link" danger style={{ padding: 0 }}>
              Xóa
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "#1a1d2e" }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content style={{ margin: "20px", padding: "20px", background: "#2a2d3e", borderRadius: "8px", color: "#fff" }}>
          <h2 style={{ color: "#fff" }}>Quản lý người dùng</h2>
          <Button type="primary" style={{ marginBottom: 10, marginRight: 10 }} onClick={handleCreateUser}>
            Tạo User
          </Button>
          <Button type="default" style={{ marginBottom: 10 }} onClick={handleRefresh}>
            Làm mới
          </Button>
          <Table columns={columns} dataSource={users} pagination={false} style={{ background: "#2a2d3e", color: "#fff" }} />

          {editingUser && (
            <>
              <h3 style={{ marginTop: "20px", color: "#fff" }}>Cập nhật người dùng</h3>
              <Form form={form} layout="vertical" style={{ maxWidth: "600px", background: "#2a2d3e", padding: "20px", borderRadius: "8px" }}>
                <Form.Item name="name" label={<span style={{ color: "#fff" }}>Tên</span>}>
                  <Input style={{ background: "#3a3d4e", color: "#fff" }} />
                </Form.Item>
                <Form.Item name="phone" label={<span style={{ color: "#fff" }}>Số điện thoại</span>}>
                  <Input style={{ background: "#3a3d4e", color: "#fff" }} />
                </Form.Item>
                <Form.Item name="email" label={<span style={{ color: "#fff" }}>Email</span>}>
                  <Input style={{ background: "#3a3d4e", color: "#fff" }} />
                </Form.Item>
                <Form.Item name="status" label={<span style={{ color: "#fff" }}>Trạng thái</span>}>
                  <Select style={{ background: "#3a3d4e", color: "#fff" }}>
                    <Option value="Đã kích hoạt">Đã kích hoạt</Option>
                    <Option value="Chưa kích hoạt">Chưa kích hoạt</Option>
                  </Select>
                </Form.Item>
                <div>
                  <Button type="primary" style={{ marginRight: 10 }} onClick={handleUpdate}>
                    Cập nhật
                  </Button>
                  <Button type="default" onClick={handleCancel}>
                    Hủy
                  </Button>
                </div>
              </Form>
            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Users;