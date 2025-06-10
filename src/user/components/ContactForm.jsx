import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Mobile number is required"),
  alternateMobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
    .required("Alternate mobile number is required"),
  experience: Yup.number()
    .typeError("Experience must be a number")
    .min(0, "Experience can't be negative")
    .nullable(),
  details: Yup.string().nullable(),
});

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
    alternateMobile: "",
    experience: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const digitOnlyFields = ["mobile", "alternateMobile"];
    const filteredValue = digitOnlyFields.includes(name)
      ? value.replace(/\D/g, "")
      : value;

    setFormValues({ ...formValues, [name]: filteredValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formValues, { abortEarly: false });
      setErrors({});
      alert("Application submitted successfully!");
      console.log("Submitted Data:", formValues);
    } catch (validationError) {
      const formattedErrors = {};
      validationError.inner.forEach((err) => {
        formattedErrors[err.path] = err.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <>
      <section className="section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Application form
        </h6>
        <div className="dealer">
          <div className="dealer1 mb-5 col-12 px-0">
            <h2 className="col-6 px-0">
              Apply and be a crucial part of white ocean properties
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="container pt-5 application-form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label fs-6 fw-bold">Full name *</label>
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
                  <label className="form-label fs-6 fw-bold">
                    Email address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
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
                  <label className="form-label fs-6 fw-bold">
                    Mobile number *
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    className={`form-control ${
                      errors.mobile ? "is-invalid" : ""
                    }`}
                    value={formValues.mobile}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobile && (
                    <div className="invalid-feedback">{errors.mobile}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fs-6 fw-bold">
                    Alternate Mobile number *
                  </label>
                  <input
                    type="text"
                    name="alternateMobile"
                    className={`form-control ${
                      errors.alternateMobile ? "is-invalid" : ""
                    }`}
                    value={formValues.alternateMobile}
                    onChange={handleChange}
                    placeholder="Enter alternate mobile number"
                  />
                  {errors.alternateMobile && (
                    <div className="invalid-feedback">
                      {errors.alternateMobile}
                    </div>
                  )}
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6 mb-3">
                  <label className="form-label fs-6 fw-bold">
                    Total experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    className={`form-control ${
                      errors.experience ? "is-invalid" : ""
                    }`}
                    value={formValues.experience}
                    onChange={handleChange}
                    placeholder="Enter total experience"
                  />
                  {errors.experience && (
                    <div className="invalid-feedback">{errors.experience}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fs-6 fw-bold">
                    Additional details
                  </label>
                  <input
                    type="text"
                    name="details"
                    className={`form-control ${
                      errors.details ? "is-invalid" : ""
                    }`}
                    value={formValues.details}
                    onChange={handleChange}
                    placeholder="Addition Delaits"
                  />
                  {errors.details && (
                    <div className="invalid-feedback">{errors.details}</div>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="explore-btn outline-none border-0  px-5"
              >
                Send application
              </button>

              <p className="form-disclaimer text-muted mt-3">
                By clicking Send application, you agree to our User Agreement,
                Privacy Policy, and Cookies Policy.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
