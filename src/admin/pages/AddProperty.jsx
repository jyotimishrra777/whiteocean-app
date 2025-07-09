import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa";
import * as yup from "yup";

// Yup Validation Schema
const propertySchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  location: yup.string().required("location is required"),
  type: yup.string().required("Property type is required"),

  size: yup.string().required("Size is required"),
  price: yup.string().required("Price is required"),
  furnished: yup.string().required("Furnished is required"),
  bhk: yup.string().required("BHK is required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test("fileSize", "Image must be under 20MB", (file) => {
      return file && file.size <= 20 * 1024 * 1024;
    }),
});

const AddProperty = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    type: "",
    size: "",
    price: "",
    furnished: "",
    bhk: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await propertySchema.validate(formData, { abortEarly: false });
      const existing = JSON.parse(localStorage.getItem("properties")) || [];
      localStorage.setItem(
        "properties",
        JSON.stringify([...existing, formData])
      );
    } catch (validationError) {
      const formattedErrors = {};
      validationError.inner.forEach((err) => {
        formattedErrors[err.path] = err.message;
      });
      setErrors(formattedErrors);
    }
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold text-primary">➕ Add Property</h4>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Property Name</label>
          <input
            type="text"
            className={`form-control  ${errors.name ? "input-error" : ""}`}
            name="name"
            placeholder="Property Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* location */}
        <div className="mb-3">
          <label className="form-label">Property location</label>
          <textarea
            className={`form-control ${errors.location ? "input-error" : ""}`}
            name="location"
            rows="2"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          ></textarea>
          {errors.location && <p className="error">{errors.location}</p>}
        </div>

        {/* Rooms, size, Size, furnished */}
        <div className="row mb-3">
          <div className="col-md-4">
            <label className="form-label">Property Type</label>
            <select
              className={`form-control ${errors.type ? "input-error" : ""}`}
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="">Property type</option>
              <option value="Commercial">Commercial</option>
              <option value="Residencial">Residencial</option>
              <option value="Plot">Plot</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Apartment">Apartment</option>
              <option value="Tenament">Tenament</option>
              <option value="Penthouse">Penthouse</option>
            </select>
            {errors.type && <p className="error">{errors.type}</p>}
          </div>
          <div className="col-md-4">
            <label className="form-label">Property Price</label>
            <input
              type="text"
              className={`form-control ${errors.price ? "input-error" : ""}`}
              placeholder="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </div>
          <div className="col-md-4">
            <label className="form-label">Property Size</label>
            <input
              type="text"
              className={`form-control ${errors.size ? "input-error" : ""}`}
              placeholder="Size (1200 sqft)"
              name="size"
              value={formData.size}
              onChange={handleChange}
            />
            {errors.size && <p className="error">{errors.size}</p>}
          </div>
        </div>

        {/* Image Upload */}
        <div
          className={`border rounded p-4 mb-4 text-center ${
            errors.image ? "border-danger" : ""
          }`}
          style={{
            border: "2px dashed #ddd",
          }}
        >
          <label
            htmlFor="imageUpload"
            className="form-label d-block cursor-pointer"
          >
            <FaUpload size={32} className="text-muted mb-2" />
            <div>
              <span className="text-danger fw-semibold">Upload an image</span>{" "}
              or drag and drop
            </div>
            <small className="d-block text-muted">
              Image size up to 20MB
              <br />
              1280px minimum width
            </small>
          </label>
          <input
            id="imageUpload"
            type="file"
            className="form-control d-none"
            onChange={handleImageChange}
            accept="image/*"
          />
          {errors.image && (
            <div className="text-danger mt-2">{errors.image}</div>
          )}
        </div>

        {/* bhk*/}
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label">Property BHK</label>
            <select
              className={`form-control ${errors.bhk ? "input-error" : ""}`}
              name="bhk"
              value={formData.bhk}
              onChange={handleChange}
            >
              <option value="">Add bhk</option>
              <option value="1 BHK">1 BHK</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
              <option value="5 BHK">5 BHK</option>
              <option value="5 +BHK">5+ BHK</option>
            </select>
            {errors.bhk && <p className="error">{errors.bhk}</p>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Property Furnished</label>
            <select
              className={`form-control ${
                errors.furnished ? "input-error" : ""
              }`}
              name="furnished"
              value={formData.furnished}
              onChange={handleChange}
            >
              <option value="">Furnished</option>
              <option value="Balcony">Yes</option>
              <option value="Parking">No</option>
            </select>
            {errors.furnished && <p className="error">{errors.furnished}</p>}
          </div>
        </div>

        {/* Save Button */}
        <div className="text-end">
          <button className="btn btn-danger px-4">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
