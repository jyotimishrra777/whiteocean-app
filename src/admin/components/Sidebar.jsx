import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import {
  FaTachometerAlt,
  FaPlus,
  FaList,
  FaSignInAlt,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
  FaHome,
  FaUsers,
  FaBars,
} from "react-icons/fa";
// This is sidebar
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { adminAuth, logout } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();

  const [propertyMenuOpen, setPropertyMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const baseClass =
    "nav-link d-flex align-items-center gap-2 px-3 py-2 rounded fw-semibold text-dark";
  const activeClass = "bg-primary text-white fw-semibold shadow-none";

  // Check if current path starts with these prefixes
  // const isPropertyActive =
  //   location.pathname.startsWith("/admin/add-property") ||
  //   location.pathname.startsWith("/admin/view-property");
  // const isUserActive =
  //   location.pathname.startsWith("/admin/add-user") ||
  //   location.pathname.startsWith("/admin/view-user");

  return (
    <aside
      className={`admin-sidebar ${isOpen ? "open" : ""} bg-white shadow-sm`}
      style={{
        width: isOpen ? "250px" : "70px",
        minHeight: "100vh",
        transition: "width 0.3s ease",
        overflowX: "hidden",
      }}
    >
      <div className="d-flex justify-content-between p-3 bg-info">
        {isOpen && <h5 className="bold mb-0 fw-bold">Admin Panel</h5>}
        <button onClick={toggleSidebar} className="sidebar-menu">
          <FaBars />
        </button>
      </div>
      <nav className="nav flex-column px-2 py-3 gap-2">
        {/* Dashboard */}
        <NavLink
          to="/admin"
          end
          onClick={() => setActiveMenu("dashboard")}
          className={`nav-link d-flex align-items-center gap-2 fw-semibold rounded px-3 py-2 sidebar-link ${
            activeMenu === "dashboard" ? "bg-primary text-white" : "text-dark"
          }`}
        >
          <FaTachometerAlt />
          {isOpen && "Dashboard"}
        </NavLink>

        {/* Users Dropdown */}
        <NavLink
          className={`nav-link d-flex align-items-center justify-content-between fw-semibold rounded px-3 py-2 sidebar-link ${
            activeMenu === "users" ? "bg-primary text-white" : "text-dark"
          }`}
          onClick={() => {
            setUserMenuOpen(!userMenuOpen);
            setActiveMenu("users");
          }}
        >
          <span className="d-flex align-items-center gap-2 fw-semibold">
            <FaUsers /> {isOpen && "Users"}
          </span>
          {isOpen && (userMenuOpen ? <FaChevronUp /> : <FaChevronDown />)}
        </NavLink>

        {userMenuOpen && isOpen && (
          <div className="ms-3 mt-1 d-flex flex-column gap-1">
            <NavLink
              to="/admin/add-user"
              className={({ isActive }) =>
                `sidebar-sublink ${baseClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaPlus /> Add User
            </NavLink>
            <NavLink
              to="/admin/view-user"
              className={({ isActive }) =>
                `sidebar-sublink ${baseClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaList /> View Users
            </NavLink>
          </div>
        )}

        {/* Property Dropdown */}
        <button
          className={`nav-link d-flex align-items-center justify-content-between fw-semibold rounded px-3 py-2 sidebar-link ${
            activeMenu === "property" ? "bg-primary text-white" : "text-dark"
          }`}
          onClick={() => {
            setPropertyMenuOpen(!propertyMenuOpen);
            setActiveMenu("property");
          }}
        >
          <span className="d-flex align-items-center gap-2 fw-semibold">
            <FaHome /> {isOpen && "Property"}
          </span>
          {isOpen && (propertyMenuOpen ? <FaChevronUp /> : <FaChevronDown />)}
        </button>

        {propertyMenuOpen && isOpen && (
          <div className="ms-3 mt-1 d-flex flex-column gap-1">
            <NavLink
              to="/admin/add-property"
              className={({ isActive }) =>
                `sidebar-sublink ${baseClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaPlus /> Add Property
            </NavLink>
            <NavLink
              to="/admin/view-property"
              className={({ isActive }) =>
                `sidebar-sublink ${baseClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaList /> View Properties
            </NavLink>
          </div>
        )}

        {/* Login / Logout */}
        {!adminAuth ? (
          <NavLink
            to="/admin/login"
            className={({ isActive }) =>
              `logout ${baseClass} ${isActive ? "text-primary" : ""}`
            }
          >
            <FaSignInAlt />
            {isOpen && "Login"}
          </NavLink>
        ) : (
          <button
            onClick={handleLogout}
            className="logout nav-link d-flex align-items-center gap-2 text-danger fw-semibold border-0 bg-transparent px-3 py-2"
          >
            <FaSignOutAlt /> {isOpen && "Logout"}
          </button>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
