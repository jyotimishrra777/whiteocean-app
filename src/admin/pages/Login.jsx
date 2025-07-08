import React, { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

// ✅ Yup schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast("");

    try {
      await schema.validate(formValues, { abortEarly: false });
      setErrors({});

      // Role assignment (simulated)
      let role = "admin";
      if (formValues.email === "superadmin@example.com") {
        role = "superadmin";
      }

      const fakeAdmin = {
        name: "Admin",
        role,
        email: formValues.email,
      };

      setTimeout(() => {
        login(fakeAdmin, formValues.rememberMe);
        setLoading(false);
        setToast("Login successful!");

        // Redirect
        navigate(role === "superadmin" ? "/admin/super" : "/admin");
      }, 1000);
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((e) => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light position-relative">
      <div
        className="card shadow p-5 rounded"
        style={{ width: "100%", maxWidth: "560px" }}
      >
        <div className="text-center mb-5 mt-4">
          <h3 className="fw-bold text-primary">Admin Login</h3>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email */}

          <div className="mb-3 position-relative">
            <label className="form-label ">Email address</label>

            <input
              type="email"
              className={`form-control   ${errors.email ? "input-error" : ""}`}
              placeholder="example@gmail.com"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          {/* Password */}
          <div className="mb-2 fs-5">
            <label className="form-label ">Password</label>
            <div className="position-relative">
              <span className="eye-icon">
                <IoEyeOutline />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control  pe-5 ${
                  errors.password ? "input-error" : ""
                }`}
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="eye-icon"
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          {/* Remember Me + Forgot Password */}
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                name="rememberMe"
                checked={formValues.rememberMe}
                onChange={handleChange}
              />
              <label
                className="form-check-label fs-6 fw-bold"
                htmlFor="rememberMe"
              >
                Remember me
              </label>
            </div>
            <Link to="/admin/forgot-password" className=" text-decoration-none">
              Forgot Password?
            </Link>
          </div>
          {/* Submit Button */}
          <div className="d-grid">
            <button className="btn btn-primary" disabled={loading}>
              {loading && (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                />
              )}
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        {/* Create Account Link */}
        <div className="text-center mt-3">
          <span className="text-muted  ">Don't have an account?</span>
          <Link
            to="/admin/register"
            className="text-primary ms-1   text-decoration-none"
          >
            Create Account
          </Link>
        </div>

        <div className="text-center mt-2">
          <small className="text-muted">
            © {new Date().getFullYear()} WhiteOcean Admin
          </small>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className="toast show position-absolute top-0 end-0 m-3 bg-success text-white"
          role="alert"
        >
          <div className="toast-body d-flex justify-content-between align-items-center">
            {toast}
            <button
              type="button"
              className="btn-close btn-close-white ms-2"
              onClick={() => setToast("")}
            ></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
