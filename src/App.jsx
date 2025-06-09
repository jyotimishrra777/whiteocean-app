// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Career from "./pages/Career";
// import Property from "./pages/Property";
// import Admin from "./admin/pages/Admin";
// import Login from "./admin/pages/Login";
// import Layout from "./Layout";
// import "./styles/index.css";
// import Sidebar from "./components/sidebar";

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/property" element={<Property />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/sidebar" element={<Sidebar />} />
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;

import React from "react";
import AppRoutes from "./routers/AppRoutes";

const App = () => {
  return <AppRoutes />;
};
export default App;
