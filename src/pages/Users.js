import React, { useState } from "react";
import { Table, Button, Input, Form, Layout, Select, Popconfirm, message } from "antd";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const { Content } = Layout;
const { Option } = Select;
const { Search } = Input;

const Users = () => {
  const [form] = Form.useForm();
  const [users, setUsers] = useState([
    {
      key: "1",
      name: "Nguyễn Văn A",
      phone: "0337174666",
      email: "hanamtop1@gmail.com",
      status: "Đã kích hoạt",
      role: "Admin",
    },
    {
      key: "2",
      name: "Nguyễn B",
      phone: "",
      email: "",
      status: "Chưa kích hoạt",
      role: "User",
    },
  ]);

  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchText, setSearchText] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  const handleSearch = (value) => {
    setSearchText(value);
    const filtered = users.filter((user) =>
      Object.values(user).some((field) =>
        field.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredUsers(filtered);
  };

  const handleEdit = (record) => {
    setEditingUser(record);
    form.setFieldsValue(record);
  };

  const handleDelete = (key) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.key !== key);
      setFilteredUsers(updatedUsers.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchText.toLowerCase())
        )
      ));
      return updatedUsers;
    });
    message.success("Xóa người dùng thành công!");
  };

  const handleCancel = () => {
    setEditingUser(null);
    form.resetFields();
  };

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      const updatedUsers = users.map((user) =>
        user.key === editingUser.key ? { ...user, ...values } : user
      );
      setUsers(updatedUsers);
      setFilteredUsers(
        updatedUsers.filter((user) =>
          Object.values(user).some((field) =>
            field.toString().toLowerCase().includes(searchText.toLowerCase())
          )
        )
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
      role: "Viewer",
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "Quyền",
      dataIndex: "role",
      key: "role",
      sorter: (a, b) => a.role.localeCompare(b.role),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            Chỉnh sửa
          </Button>
          <Popconfirm
            title="Bạn có chắc muốn xóa?"
            onConfirm={() => handleDelete(record.key)}
            okText="Có"
            cancelText="Hủy"
          >
            <Button type="link" danger style={{ padding: 0 }}>
              Xóa
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content
          style={{
            margin: "20px",
            padding: "20px",
            background: "#ffffff",
            borderRadius: "8px",
            color: "#333",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 style={{ color: "#333" }}>Quản lý người dùng</h2>
          <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
            <Button type="primary" onClick={handleCreateUser}>
              Tạo User
            </Button>
            <Search
              placeholder="Tìm kiếm người dùng"
              onSearch={handleSearch}
              onChange={(e) => handleSearch(e.target.value)}
              allowClear
              style={{ maxWidth: "300px" }}
            />
          </div>
          <Table columns={columns} dataSource={filteredUsers} pagination={false} />

          {editingUser && (
            <>
              <h3 style={{ marginTop: "20px", color: "#333" }}>Cập nhật người dùng</h3>
              <Form
                form={form}
                layout="vertical"
                style={{
                  maxWidth: "600px",
                  background: "#ffffff",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Form.Item name="name" label="Tên">
                  <Input />
                </Form.Item>
                <Form.Item name="phone" label="Số điện thoại">
                  <Input />
                </Form.Item>
                <Form.Item name="email" label="Email">
                  <Input />
                </Form.Item>
                <Form.Item name="status" label="Trạng thái">
                  <Select>
                    <Option value="Đã kích hoạt">Đã kích hoạt</Option>
                    <Option value="Chưa kích hoạt">Chưa kích hoạt</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="role" label="Quyền">
                  <Select>
                    <Option value="Admin">Admin</Option>
                    <Option value="User">User</Option>
                    <Option value="Viewer">Khách hàng</Option>
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
