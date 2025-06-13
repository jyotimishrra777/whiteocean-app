import React, { useState } from "react";
import * as Yup from "yup";

// Yup schema for required fields only
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Only alphabets are allowed")
    .required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Mobile number is required"),
  file: Yup.mixed().required("Resume is required"),
  experience: Yup.string().required("Experience is required"),
});

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
    alternateMobile: "",
    experience: "",
    details: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const validateField = async (fieldName, value) => {
    try {
      await Yup.reach(validationSchema, fieldName).validate(value);
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [fieldName]: err.message }));
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    let filteredValue = value;

    if (name === "file") {
      filteredValue = files[0];
    } else if (name === "mobile" || name === "alternateMobile") {
      filteredValue = value.replace(/\D/g, "");
    } else if (name === "fullName") {
      filteredValue = value.replace(/[^a-zA-Z\s]/g, "");
    }

    setFormValues((prev) => ({ ...prev, [name]: filteredValue }));

    if (["fullName", "email", "mobile", "file", "experience"].includes(name)) {
      validateField(name, filteredValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      alert("Form submitted successfully!");
      console.log("Submitted data:", formValues);
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <section className="section">
      <div className="container application-form">
        <h4 className="text-center mb-5 fs-2 fw-bold">
          Explore Job Opportunities with us
        </h4>
        <form onSubmit={handleSubmit} noValidate>
          <div className="row mb-3">
            <div className="col-md-4 mb-3">
              <label className="form-label fw-bold">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                className={`form-control ${
                  errors.fullName ? "is-invalid" : ""
                }`}
                value={formValues.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <div className="invalid-feedback">{errors.fullName}</div>
              )}
            </div>

            <div className="col-md-4 mb-3">
              <label className="form-label fw-bold">
                Email Address <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label fw-bold">
                Mobile Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="mobile"
                maxLength={10}
                className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                value={formValues.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />
              {errors.mobile && (
                <div className="invalid-feedback">{errors.mobile}</div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3 position-relative">
              <label className="form-label fw-bold">
                Upload Resume <span className="text-danger">*</span>
              </label>

              <div
                className={`custom-file-upload ${
                  errors.file ? "is-invalid" : ""
                }`}
              >
                <label htmlFor="fileUpload" className="upload-label">
                  {formValues.file ? formValues.file.name : "Choose File"}
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  name="file"
                  onChange={handleChange}
                />

                {errors.file && (
                  <span className="error-icon">
                    <i className="bi bi-exclamation-circle text-danger"></i>
                  </span>
                )}
              </div>

              {errors.file && (
                <div className="text-danger mt-1">{errors.file}</div>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">
                Total Experience (in years){" "}
                <span className="text-danger">*</span>
              </label>
              <select
                name="experience"
                className={`total-experience form-control ${
                  errors.experience ? "is-invalid" : ""
                }`}
                value={formValues.experience}
                onChange={handleChange}
              >
                <option value="">Select experience</option>
                <option value="Fresher">Fresher</option>
                <option value="0-1 Years">0-1 Years</option>
                <option value="1-3 Years">1-3 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5-7 Years">5-7 Years</option>
                <option value="7-9 Years">7-9 Years</option>
                <option value="10+ Years">10+ Years</option>
              </select>
              {errors.experience && (
                <div className="invalid-feedback">{errors.experience}</div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-12 mb-3">
              <label className="form-label fw-bold">Additional Details</label>
              <textarea
                rows={5}
                name="details"
                className="form-control detail-textarea"
                value={formValues.details}
                onChange={handleChange}
                placeholder="Write more about you..."
              />
            </div>
          </div>

          <button type="submit" className="explore-btn px-5 border-0">
            Send Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
