import React, { useState } from "react";
import { GetImageUrl } from "../../utils/GetImageURL";
import * as Yup from "yup";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
      .required("Mobile number is required"),
  });

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const digitOnlyFields = ["mobile"];
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
      setFormValues({
        fullName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (validationError) {
      const formattedErrors = {};
      validationError.inner.forEach((err) => {
        formattedErrors[err.path] = err.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <section className="section">
      <div className="container  contact-form">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 text-center image-wrapper">
            <img
              src={GetImageUrl("images/contact.jpg")}
              alt="Contact Illustration"
              className="img-fluid fade-in-image"
            />
          </div>

          <div className="col-md-6 application-form">
            <h5 className="fs-4 fw-bolder">Contact Info</h5>
            <hr />

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fs-6 fw-bold">
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

              <div className="mb-3">
                <label className="form-label fs-6 fw-bold">
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  type="mobile"
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

              <div className="mb-3">
                <label className="form-label fs-6 fw-bold">
                  Email <span className="text-danger"></span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="example@example.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fs-6 fw-bold">Your Message</label>
                <textarea
                  className="form-control"
                  rows="5"
                  type="text"
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="explore-btn submit-btn outline-none border-0  px-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
