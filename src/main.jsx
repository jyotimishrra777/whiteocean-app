import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "odometer/themes/odometer-theme-default.css";
import "./styles/style1.css";
import "./styles/style2.css";
import "./styles/index.css";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./user/customHooks/ScrollToTop.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <HashRouter basename="/whiteocean-app/">
        <ScrollToTop />
        <App />
      </HashRouter>
    </AuthProvider>
  </StrictMode>
);
