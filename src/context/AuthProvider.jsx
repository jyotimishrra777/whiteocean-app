import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [adminAuth, setAdminAuth] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("adminAuth");
    if (stored) setAdminAuth(JSON.parse(stored));
  }, []);

  const login = (userData) => {
    localStorage.setItem("adminAuth", JSON.stringify(userData));
    setAdminAuth(userData);
  };

  const logout = () => {
    localStorage.removeItem("adminAuth");
    setAdminAuth(null);
  };

  return (
    <AuthContext.Provider value={{ adminAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
