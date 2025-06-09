import React from "react";
import { GetImageUrl } from "../../utils/GetImageURL";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={GetImageUrl("images/logo.png")} alt="Logo" />

        {/* <img src="/images/logo.png" alt="Logo" width="275.55px" height="75px" /> */}
      </Link>

      <nav className="navbar">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/properties"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          Properties
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            `nav-item ${isActive ? "active-link" : ""}`
          }
        >
          Career
        </NavLink>
      </nav>

      <div className="auth">
        <NavLink to="/login" className="login">
          Login
        </NavLink>
        <NavLink to="/contact" className="contact-btn">
          Contact Us
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
