import React, { useState, useEffect } from "react";
import {
  Layout,
  Menu,
  Upload,
  message,
  Button,
  Divider,
  Modal,
  Card,
  Image,
  Table,
  Space,
  Input,
  Form,
  Row,
  Col,
  Drawer, 
  List
} from "antd";
import {
  VideoCameraOutlined,
  UploadOutlined,
  SearchOutlined,
  CommentOutlined,
  LogoutOutlined 
} from "@ant-design/icons";

const { Sider } = Layout;
const { TextArea } = Input; 
const { SubMenu } = Menu;

const Video = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [condition, setCondition] = useState("");
  const [selectedLabels, setSelectedLabels] = useState([]);

  useEffect(() => {
    if (selectedVideo) {
      setVisible(true);
    }
  }, [selectedVideo]);

  const handleOpenVideo = (videoUrl) => {
    setSelectedVideo("");
    setTimeout(() => {
      setSelectedVideo(videoUrl);
    }, 100);
  };

  const handleUpload = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} đã được tải lên thành công!`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} tải lên thất bại.`);
    }
  };

  const Sidebar = ({ collapsed, onCollapse }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");
    const [comments, setComments] = useState([
      { user: "User A", content: "Video hay" },
      { user: "User B", content: "Cũng được" },
      { user: "User C", content: "Tạm chấp nhận" },
    ]);
    const [newComment, setNewComment] = useState("");  
    const [currentUser, setCurrentUser] = useState("User D"); 
    const handleOpenVideo = (videoUrl) => {
      setCurrentVideo(videoUrl);
      setIsModalVisible(true);
    };
  
    const handleAddComment = () => {
      if (newComment.trim()) {
        setComments([...comments, { user: currentUser, content: newComment }]);
        setNewComment("");
      }
    };

    const handleLogout = () => {
      localStorage.clear();
      window.location.href = "/";
    };
  
    return (
      <>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ height: "150vh" }}>
          <Menu theme="dark" mode="inline">
            <SubMenu key="sub1" icon={<VideoCameraOutlined />} title="Xem Video">
              <Menu.Item
                key="video1"
                onClick={() => handleOpenVideo("https://www.w3schools.com/html/mov_bbb.mp4")}
              >
                Video 1
              </Menu.Item>
              <Menu.Item
                key="video2"
                onClick={() => handleOpenVideo("https://www.w3schools.com/html/movie.mp4")}
              >
                Video 2
              </Menu.Item>
              <div style={{ padding: "10px 16px", textAlign: "center" }}>
                <Upload
                  name="video"
                  action="http://localhost:5000/upload"
                  accept="video/*"
                  showUploadList={false}
                >
                  <Button icon={<UploadOutlined />} type="primary" block>
                    Upload Video
                  </Button>
                </Upload>
              </div>
            </SubMenu>
            <Divider style={{ backgroundColor: "#fff", margin: "10px 0" }} />
            <Menu.Item
              key="logout"
              icon={<LogoutOutlined />}
              onClick={handleLogout}
              style={{ textAlign: "center", marginTop: "auto" }}
            >
              Đăng xuất
            </Menu.Item>
          </Menu>
        </Sider>
  
        <Modal
          title="Xem Video"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          width={1000}
          bodyStyle={{ display: "flex" }}
        >
          <div style={{ flex: 2, marginRight: "20px" }}>
            <video controls style={{ width: "100%" }}>
              <source src={currentVideo} type="video/mp4" />
              Trình duyệt của bạn không được hỗ trợ.
            </video>
          </div>
          <Button
            type="primary"
            icon={<CommentOutlined />}
            onClick={() => setIsDrawerVisible(true)}
            style={{ flexShrink: 0 }}
          >
            Bình luận
          </Button>
        </Modal>
  
        <Drawer
          title="Bình luận"
          placement="right"
          closable
          onClose={() => setIsDrawerVisible(false)}
          visible={isDrawerVisible}
          width={400}
        >
          <List
            dataSource={comments}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <div>
                  <strong>{item.user}</strong>: {item.content}
                </div>
              </List.Item>
            )}
            bordered
            style={{ marginBottom: "20px" }}
          />
          <TextArea
            rows={3}
            placeholder="Nhập bình luận..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Button type="primary" onClick={handleAddComment} block>
            Gửi
          </Button>
        </Drawer>
      </>
    );
  };
  
  const FrameResults = () => (
    <Card
      title="📸 Hình ảnh"
      style={{ borderRadius: 10, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 10,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <Image
            key={i}
            width="100%"
            height={160}
            src={`https://picsum.photos/200/160?random=${i + 1}`}
            style={{ objectFit: "cover", borderRadius: 8 }}
          />
        ))}
      </div>
    </Card>
  );

  const ResultsTable = () => {
    const columns = [
      { title: "Tên File", dataIndex: "fileName", key: "fileName", width: 150 },
      { title: "Thời điểm", dataIndex: "timestamp", key: "timestamp", width: 120 },
      {
        title: "Tóm tắt nội dung",
        dataIndex: "summary",
        key: "summary",
        width: 250,
        ellipsis: true,
      },
      { title: "Loại phát hiện", dataIndex: "detectionType", key: "detectionType", width: 120 },
      {
        title: "Độ chính xác",
        dataIndex: "accuracy",
        key: "accuracy",
        width: 120,
        render: (text) => `${text}%`,
      },
      { title: "Số lượng", dataIndex: "objectCount", key: "objectCount", width: 100 },
      {
        title: "Nguồn Video",
        dataIndex: "source",
        key: "source",
        width: 150,
        render: (text) => (
          <a href={text} target="_blank" rel="noopener noreferrer">
            Xem nguồn
          </a>
        ),
      },
      {
        title: "Thao tác",
        key: "actions",
        align: "center",
        fixed: "right",
        width: 180,
        render: () => (
          <Space size="middle">
            <Button type="primary">Xem chi tiết</Button>
            <Button type="dashed">Tải xuống</Button>
          </Space>
        ),
      },
    ];

    const data = [
      {
        key: "1",
        fileName: "Video1.mp4",
        timestamp: "00:05:12",
        summary: "Di chuyển.",
        detectionType: "Người",
        accuracy: 95,
        objectCount: 3,
        source: "https://example.com/video1.mp4",
      },
      {
        key: "2",
        fileName: "Video2.mp4",
        timestamp: "00:10:30",
        summary: "Có khuôn mặt.",
        detectionType: "Khuôn mặt",
        accuracy: 87,
        objectCount: 1,
        source: "https://example.com/video2.mp4",
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }}
        bordered
        footer={() => (
          <p style={{ textAlign: "center" }}>
            <strong>Summary:</strong> Đây là kết quả
          </p>
        )}
      />
    );
  };

  const SearchPanel = () => (
    <Card
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Form layout="vertical">
        <Form.Item label="Từ khóa tìm kiếm">
          <Input
            placeholder="Nhập từ khóa..."
            prefix={<SearchOutlined />}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Space style={{ display: "flex", justifyContent: "space-between" }}>
            <Upload showUploadList={false} accept="image/*">
              <Button icon={<UploadOutlined />} style={{ fontWeight: "bold" }}>
                Tải ảnh lên
              </Button>
            </Upload>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              style={{ fontWeight: "bold" }}
              disabled={!searchKeyword}
            >
              Tìm kiếm
            </Button>
          </Space>
        </Form.Item>
        <Form.Item label="Điều kiện tìm kiếm">
          <Input.TextArea
            placeholder="Nhập điều kiện tìm kiếm..."
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            autoSize={{ minRows: 2, maxRows: 4 }}
          />
        </Form.Item>
        <Form.Item label="Chọn label">
          <Space>
            <Button
              type={selectedLabels.includes("Label 1") ? "primary" : "default"}
              onClick={() =>
                setSelectedLabels((prev) =>
                  prev.includes("Label 1")
                    ? prev.filter((label) => label !== "Label 1")
                    : [...prev, "Label 1"]
                )
              }
            >
              Label 1
            </Button>
            <Button
              type={selectedLabels.includes("Label 2") ? "primary" : "default"}
              onClick={() =>
                setSelectedLabels((prev) =>
                  prev.includes("Label 2")
                    ? prev.filter((label) => label !== "Label 2")
                    : [...prev, "Label 2"]
                )
              }
            >
              Label 2
            </Button>
          </Space>
        </Form.Item>
        {uploadedImage && (
          <div style={{ marginTop: "15px", textAlign: "center" }}>
            <Image
              width={100}
              height={100}
              src={uploadedImage}
              alt="Ảnh tải lên"
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        )}
      </Form>
    </Card>
  );

  return (
    <Layout>
      <Sidebar />
      <Layout style={{ padding: "24px" }}>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <SearchPanel />
          <Row gutter={16}>
            <Col span={12}>
              <FrameResults />
            </Col>
            <Col span={12}>
              <ResultsTable />
            </Col>
          </Row>
        </Space>
        <Modal
          title="Xem Video"
          visible={visible}
          onCancel={() => setVisible(false)}
          footer={null}
          width={800}
        >
          <video
            style={{
              width: "100%",
              borderRadius: 12,
            }}
            controls
            autoPlay
            src={selectedVideo}
          />
        </Modal>
      </Layout>
    </Layout>
  );
};

export default Video;
