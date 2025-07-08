import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import * as yup from "yup";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const schema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

const getPasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 6) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength <= 1) return { label: "Weak", color: "danger" };
  if (strength === 2) return { label: "Fair", color: "warning" };
  if (strength === 3) return { label: "Good", color: "info" };
  return { label: "Strong", color: "success" };
};

const Register = () => {
  const { adminAuth } = useAuth();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // 🚫 Redirect logged-in user
  useEffect(() => {
    if (adminAuth) {
      navigate("/admin");
    }
  }, [adminAuth, navigate]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToast("");
    setLoading(true);

    try {
      await schema.validate(formValues, { abortEarly: false });
      setErrors({});

      // Simulate registration
      setTimeout(() => {
        setToast("Account created successfully!");
        setLoading(false);
        navigate("/admin/login");
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

  const strength = getPasswordStrength(formValues.password);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light position-relative">
      <div
        className="card shadow p-5 rounded"
        style={{ width: "100%", maxWidth: "560px" }}
      >
        <div className="text-center mb-5 mt-4">
          <h3 className="fw-bold text-primary">Create Admin Account</h3>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3 ">
            <label className="form-label ">Full Name</label>
            <input
              type="text"
              className={`form-control  ${errors.name ? "is-invalid" : ""}`}
              placeholder="Full name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3 fs-5">
            <label className="form-label ">Email address</label>
            <input
              type="email"
              className={`form-control  ${errors.email ? "is-invalid" : ""}`}
              placeholder="admin@example.com"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-2 fs-5">
            <label className="form-label ">Password</label>
            <div className="input-group position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control  ${
                  errors.password ? "is-invalid" : ""
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
            {errors.password && (
              <div className="invalid-feedback d-block">{errors.password}</div>
            )}
          </div>

          {/* Strength Meter */}
          {formValues.password && (
            <div className="mb-3">
              <div className="progress" style={{ height: "5px" }}>
                <div
                  className={`progress-bar bg-${strength.color}`}
                  style={{
                    width: `${
                      strength.color === "success"
                        ? 100
                        : strength.color === "info"
                        ? 75
                        : strength.color === "warning"
                        ? 50
                        : 25
                    }%`,
                  }}
                />
              </div>
              <small className={`text-${strength.color}`}>
                {strength.label} Password
              </small>
            </div>
          )}

          {/* Confirm Password */}

          <div className="mb-3 fs-5">
            <label className="form-label ">Confirm Password</label>
            <div className="input-group position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className={`form-control  ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                placeholder="Confirm password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="eye-icon"
              >
                {showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </span>
            </div>
            {errors.confirmPassword && (
              <div className="invalid-feedback d-block">
                {errors.confirmPassword}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading && (
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                />
              )}
              {loading ? "Creating..." : "Register"}
            </button>
          </div>
        </form>

        {/* Link */}
        <div className="text-center mt-3">
          <small className="text-muted ">
            Already have an account?
            <Link
              to="/admin/login"
              className="text-primary text-decoration-none ms-1"
            >
              Login
            </Link>
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

export default Register;
