import React from "react";
// import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="admin-header d-flex justify-content-between align-items-center px-4 py-2 shadow">
      <div className="d-flex align-items-center gap-3">
        <button
          className="btn btn-outline-primary d-md-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <h4 className="mb-0">AdminPanel</h4>
      </div>

      <div className="d-flex align-items-center gap-3">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="rounded-circle"
          width="40"
          height="40"
        />
        <button className="btn btn-primary">Login</button>
      </div>
    </header>
  );
};

export default Header;
