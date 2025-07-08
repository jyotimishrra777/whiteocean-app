import React, { useState } from "react";
import * as yup from "yup";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  status: yup.string().required("Status is required"),
});

const AddUser = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    status: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

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
      setLoading(false);
      setToast("User added successfully!");
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = [...existingUsers, formValues];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setFormValues({
        name: "",
        email: "",
        phone: "",
        password: "",
        status: "",
      });
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
    <div className="container mt-4">
      <h2 className="mb-5 main-title text-primary"> ➕ Admin Dashboard</h2>

      <form onSubmit={handleSubmit} className="card shadow-sm p-4">
        <div className="row">
          {/* Name */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className={`form-control ${errors.name ? "input-error" : ""}`}
              placeholder="Full Name"
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          {/* Email */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              className={`form-control ${errors.email ? "input-error" : ""}`}
              placeholder="user@example.com"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          {/* Phone */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
              className={`form-control ${errors.phone ? "input-error" : ""}`}
              placeholder="Phone number"
            />
            {errors.phone && <div className="error">{errors.phone}</div>}
          </div>

          {/* Password */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Password</label>

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formValues.password}
              onChange={handleChange}
              className={`form-control ${errors.password ? "input-error" : ""}`}
              placeholder="Password"
            />

            {errors.password && (
              <div className="error d-block">{errors.password}</div>
            )}
            {/* </div> */}
          </div>

          {/* Status */}
          <div className="col-md-6 mb-3">
            <label className="form-label">Status</label>
            <select
              name="status"
              value={formValues.status}
              onChange={handleChange}
              className={`form-select ${errors.status ? "input-error" : ""}`}
            >
              <option value=""> Select Status </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && <div className="error">{errors.status}</div>}
          </div>
        </div>

        {/* Submit */}
        <div className="d-flex justify-content-center mt-3 w-100">
          <button className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" />
                Adding...
              </>
            ) : (
              "Add User"
            )}
          </button>
        </div>
      </form>

      {/* Toast */}
      {toast && (
        <div
          className="toast show position-fixed bottom-0 end-0 m-4 bg-success text-white"
          role="alert"
        >
          <div className="toast-body d-flex justify-content-between align-items-center">
            {toast}
            <button
              type="button"
              className="btn-close btn-close-white ms-2"
              onClick={() => setToast("")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUser;
