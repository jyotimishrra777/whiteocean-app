// ContactSection.jsx
import React, { useState } from "react";
import * as Yup from "yup";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Must be exactly 10 digits")
      .required("Mobile number is required"),
  });

  const [formValues, setFormValues] = useState({
    fullName: "",
    mobile: "",
    email: "",
    file: "",
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
        mobile: "",
        email: "",
        file: "",
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
    <div className="contact-section ">
      <div className="container ">
        <h4 className="text-white text-center mb-3 fs-2 fw-bolder">
          Contact Us
        </h4>
        <p className="text-white text-center mb-5 px-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>

        <div className="row d-flex align-items-center">
          <div className="col-6 text-white mb-4 ">
            <div className="contact-info mb-4">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h6>Address</h6>
                <p>
                  504, Shivalik Satyamev, Near Vakil Saheb Bridge,
                  <br /> South Bopal, Ahmedabad, 380058
                </p>
              </div>
            </div>
            <div className="contact-info mb-4">
              <FaPhoneAlt className="icon" />
              <div>
                <h6>Phone</h6>
                <p>+91-760-0033-211</p>
              </div>
            </div>
            <div className="contact-info">
              <FaEnvelope className="icon" />
              <div>
                <h6>Email</h6>
                <p>Haresh@whiteoceanprop.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-6 contact-form-sec">
            <form onSubmit={handleSubmit}>
              {" "}
              <div className="mb-3">
                {" "}
                <label className="form-label fs-6 fw-bold mb-0">
                  Full Name <span className="text-danger">*</span>{" "}
                </label>{" "}
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
                <label className="form-label fs-6 fw-bold mb-0">
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
                <label className="form-label fs-6 fw-bold mb-0">
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
                <label className="form-label fs-6 fw-bold mb-0">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  rows="2"
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
    </div>
  );
};

export default Contact;
