import React, { useState } from "react";
import * as Yup from "yup";

// Yup schema for required fields only
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Mobile number is required"),
  file: Yup.mixed().required("Resume is required"),
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

  // Validate specific field on change
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
    const digitOnlyFields = ["mobile", "alternateMobile"];
    const filteredValue =
      name === "file"
        ? files[0]
        : digitOnlyFields.includes(name)
        ? value.replace(/\D/g, "")
        : value;

    setFormValues((prev) => ({ ...prev, [name]: filteredValue }));

    // Only validate the fields mentioned in the schema
    if (["fullName", "email", "mobile", "file"].includes(name)) {
      validateField(name, name === "file" ? files[0] : filteredValue);
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
            <div className="col-md-6 mb-3">
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

            <div className="col-md-6 mb-3">
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
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">
                Mobile Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                name="mobile"
                className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                value={formValues.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
              />
              {errors.mobile && (
                <div className="invalid-feedback">{errors.mobile}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">
                Total Experience (in years)
              </label>
              <input
                type="text"
                name="experience"
                className="form-control"
                value={formValues.experience}
                onChange={handleChange}
                placeholder="Experience"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3">
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
                  // accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                />
              </div>

              {errors.file && (
                <div className="text-danger mt-1">{errors.file}</div>
              )}
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Additional Details</label>
              <textarea
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

          <p className="form-disclaimer text-muted mt-3">
            By clicking Send application, you agree to our User Agreement,
            Privacy Policy, and Cookies Policy.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
