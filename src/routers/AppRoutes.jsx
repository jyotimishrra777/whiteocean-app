import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// User routers
import Layout from "../user/layout/Layout";
import About from "../user/pages/About";
import Home from "../user/pages/Home";
import Career from "../user/pages/Career";
import Property from "../user/pages/Property";
import Contact from "../user/pages/Contact";

// Admin routers
import AdminLayout from "../admin/layout/AdminLayout";
import Login from "../admin/pages/Login";
import Register from "../admin/pages/Register";
import ViewProperty from "../admin/pages/ViewProperty";
import AddProperty from "../admin/pages/AddProperty";
import AdminDashboard from "../admin/pages/AdminDashboard";

// Custom hooks & context
import usePageTitle from "../user/customHooks/usePageTitle";
import { useAuth } from "../context/useAuth"; // <-- you need to create this
import ProtectedRoute from "./ProtectedRoute"; // <-- create this too
import AddUsers from "../admin/pages/AddUsers";
import ViewUsers from "../admin/pages/ViewUsers";

const AppRoutes = () => {
  usePageTitle();
  const { adminAuth } = useAuth();

  return (
    <Routes>
      {/* ========== USER ROUTES ========== */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="properties" element={<Property />} />
        <Route path="career" element={<Career />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* ========== ADMIN LOGIN ========== */}
      <Route
        path="/admin/login"
        element={adminAuth ? <Navigate to="/admin" replace /> : <Login />}
      />
      <Route path="/admin/register" element={<Register />} />

      {/* ========== PROTECTED ADMIN ROUTES ========== */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="add-property" element={<AddProperty />} />
        <Route path="view-property" element={<ViewProperty />} />
        <Route path="add-user" element={<AddUsers />} />
        <Route path="view-user" element={<ViewUsers />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
