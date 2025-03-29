import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Statistical from "./pages/Statistical";
import BackupRestore from "./pages/BackupRestore";
import Video from './pages/Video';


const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated"); 
  return isAuthenticated ? element : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/users" element={<PrivateRoute element={<Users />} />} />
        <Route path="/statistical" element={<PrivateRoute element={<Statistical />} />} />
        <Route path="/backup" element={<PrivateRoute element={<BackupRestore />} />} />
        <Route path="/Video" element={<PrivateRoute element={<Video />} />} /> {/* Cập nhật tuyến đường */}
      </Routes>
    </Router>
  );
}

export default App;
