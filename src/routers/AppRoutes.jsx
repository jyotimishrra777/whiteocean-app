import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// User routers
import Layout from "../user/layout/Layout";
import About from "../user/pages/About";
import Home from "../user/pages/Home";
import Career from "../user/pages/Career";

// Admin routers
import AdminLayout from "../admin/layout/AdminLayout";
import Login from "../admin/pages/Login";
import AdminView from "../admin/pages/AdminView";
import AddProperty from "../admin/pages/AddProperty";
import AdminDashboard from "../admin/pages/AdminDashboard";
import Property from "../user/pages/Property";
import Contact from "../user/pages/Contact";

const AppRoutes = () => (
  <Router basename="/whiteocean-app">
    <Routes>
      {/* User routes */}

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="properties" element={<Property />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Admin routes */}

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="view" element={<AdminView />} />
        <Route path="add-property" element={<AddProperty />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
