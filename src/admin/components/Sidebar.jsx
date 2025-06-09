import React from "react";
import { NavLink } from "react-router-dom";
// import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`admin-sidebar ${isOpen ? "open" : ""}`}>
      <nav className="nav flex-column p-3">
        <NavLink to="/admin" end className="nav-link">
          Dashboard
        </NavLink>
        <NavLink to="/admin/add-property" className="nav-link">
          Add Property
        </NavLink>
        <NavLink to="/admin/view" className="nav-link">
          View Proprty
        </NavLink>
        <NavLink to="/admin/login" className="nav-link">
          Login
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
