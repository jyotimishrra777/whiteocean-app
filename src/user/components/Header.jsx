// import React, { useState } from "react";
// import { GetImageUrl } from "../../utils/GetImageURL";
// import { Link, NavLink } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./Header.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <header className="header">
//       <Link to="/" className="logo">
//         <img src={GetImageUrl("images/logo.png")} alt="Logo" />
//       </Link>

//       <div className="hamburger" onClick={toggleMenu}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </div>

//       <nav className="navbar">
//         <NavLink
//           to="/"
//           end
//           className={({ isActive }) =>
//             `nav-item ${isActive ? "active-link" : ""}`
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             `nav-item ${isActive ? "active-link" : ""}`
//           }
//         >
//           About Us
//         </NavLink>
//         <NavLink
//           to="/properties"
//           className={({ isActive }) =>
//             `nav-item ${isActive ? "active-link" : ""}`
//           }
//         >
//           Properties
//         </NavLink>
//         <NavLink
//           to="/career"
//           className={({ isActive }) =>
//             `nav-item ${isActive ? "active-link" : ""}`
//           }
//         >
//           Career
//         </NavLink>
//       </nav>

//       <div className="auth">
//         <NavLink to="/contact" className="explore-btn">
//           Contact Us
//         </NavLink>
//       </div>

//       {menuOpen && (
//         <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
//           <Link to="/" className="mobile-link">
//             Home
//           </Link>
//           <Link to="/about" className="mobile-link">
//             About
//           </Link>
//           <Link to="/properties" className="mobile-link">
//             Properties
//           </Link>
//           <Link to="/career" className="mobile-link">
//             Career
//           </Link>
//           <Link to="/contact" className="mobile-link">
//             Contact
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { GetImageUrl } from "../../utils/GetImageURL";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={GetImageUrl("images/logo.png")} alt="Logo" />
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

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
        <NavLink to="/contact" className="explore-btn">
          Contact Us
        </NavLink>
      </div>

      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" className="mobile-link" onClick={closeMenu}>
          About
        </Link>
        <Link to="/properties" className="mobile-link" onClick={closeMenu}>
          Properties
        </Link>
        <Link to="/career" className="mobile-link" onClick={closeMenu}>
          Career
        </Link>
        <Link to="/contact" className="mobile-link" onClick={closeMenu}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
