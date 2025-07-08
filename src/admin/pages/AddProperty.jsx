import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    address: "",
    description: "",
    rooms: "",
    bathrooms: "",
    size: "",
    rent: "",
    feature: "",
    amenities: "",
    surrounding: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("properties")) || [];
    localStorage.setItem("properties", JSON.stringify([...existing, formData]));
    navigate("/admin/view-property");
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4 fw-bold text-primary">➕ Add Property</h4>
      <form onSubmit={handleSubmit}>
        {/* Address */}
        <div className="mb-3">
          <label className="form-label ">Properties address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="Type Properties address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label ">Properties description</label>
          <textarea
            className="form-control"
            name="description"
            rows="4"
            placeholder="Type description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Rooms, Bathroom, Size, Rent */}
        <div className="row mb-3">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Rooms"
              name="rooms"
              value={formData.rooms}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Bathroom"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Space Size"
              name="size"
              value={formData.size}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Monthly Rent"
              name="rent"
              value={formData.rent}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Image Upload */}
        <div
          className="border rounded p-4 mb-4 text-center"
          style={{
            border: "2px dashed #ddd",
          }}
        >
          <label
            htmlFor="imageUpload"
            className="form-label  cursor-pointer d-block"
          >
            <FaUpload size={32} className="text-muted mb-2" />
            <div>
              <span className="text-danger fw-semibold">Upload a image</span> or
              drag and drop
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
        </div>

        {/* Feature, Amenities, Surrounding */}
        <div className="row mb-4">
          <div className="col-md-4">
            <select
              className="form-select"
              name="feature"
              value={formData.feature}
              onChange={handleChange}
            >
              <option value="">Add Feature</option>
              <option value="Balcony">Balcony</option>
              <option value="Parking">Parking</option>
              <option value="Garden">Garden</option>
            </select>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
            >
              <option value="">Add Amenities</option>
              <option value="WiFi">WiFi</option>
              <option value="AC">Air Conditioning</option>
              <option value="Security">24/7 Security</option>
            </select>
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              name="surrounding"
              value={formData.surrounding}
              onChange={handleChange}
            >
              <option value="">Add Surrounding</option>
              <option value="School">Near School</option>
              <option value="Hospital">Near Hospital</option>
              <option value="Market">Near Market</option>
            </select>
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
