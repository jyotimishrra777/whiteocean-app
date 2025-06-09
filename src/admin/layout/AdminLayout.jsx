import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../../styles/style2.css";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="d-flex">
        <Sidebar isOpen={sidebarOpen} />
        <div
          className="flex-grow-1 p-4"
          style={{ marginLeft: "250px", marginTop: "56px" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
