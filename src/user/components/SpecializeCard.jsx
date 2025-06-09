import React from "react";
import img1 from "/images/h1.jpg";
import img2 from "/images/h2.jpg";
import img3 from "/images/h3.jpg";

const SpecializationSection = () => {
  return (
    <div className="specialization-section container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <div>
          <p className="section-label">Our specialization</p>
          <h2 className="fw-bold">
            Whether buying or investing, we’ll <br />
            help you find the right property
          </h2>
        </div>
        <button className="btn category-btn">View popular categories</button>
      </div>

      <div className="row gy-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm specialization-card">
            <img
              src={img1}
              className="card-img-top rounded-4"
              alt="Commercial properties"
            />
            <div className="card-body px-0">
              <div className="d-flex justify-content-between align-items-center mt-2">
                <p className="mb-0 fw-medium">Commercial properties</p>
                <span className="arrow-icon">↗</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm specialization-card">
            <img
              src={img2}
              className="card-img-top rounded-4"
              alt="Smart Homes"
            />
            <div className="card-body px-0">
              <div className="d-flex justify-content-between align-items-center mt-2">
                <p className="mb-0 fw-medium">Smart Homes</p>
                <span className="arrow-icon">↗</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm specialization-card">
            <img
              src={img3}
              className="card-img-top rounded-4"
              alt="Penthouses"
            />
            <div className="card-body px-0">
              <div className="d-flex justify-content-between align-items-center mt-2">
                <p className="mb-0 fw-medium">Penthouses</p>
                <span className="arrow-icon">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializationSection;
