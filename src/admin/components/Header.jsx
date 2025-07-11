import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  const { adminAuth, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login"); // Redirect to login after logout
  };

  const handleLogin = () => {
    navigate("/admin/login"); // Redirect to login
  };

  return (
    <header className="admin-header d-flex justify-content-between align-items-center px-4 py-2 shadow">
      <div className="d-flex align-items-center gap-3">
        {/* <button
          className="btn btn-outline-primary d-md-none"
          onClick={toggleSidebar}
        >
          ☰
        </button> */}
        <div className="admin-logo">
          <img src="images/logo.png" alt="logo" />
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <img
          src="images/admin-logo.jpg"
          alt="User"
          className="rounded-circle border border-secondary"
          width="40"
          height="40"
        />
        {adminAuth ? (
          <button
            className="btn btn-danger header-logout"
            onClick={handleLogout}
          >
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
