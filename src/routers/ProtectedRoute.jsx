import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = ({ children }) => {
  const { adminAuth } = useAuth();

  return adminAuth ? children : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
