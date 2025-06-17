import React from "react";
import { Link } from "react-router-dom";
import img1 from "/images/h1.jpg";
import img2 from "/images/h2.jpg";
import img3 from "/images/h3.jpg";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const SpecializationSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Our process
        </h6>
        <div className="dealer">
          <div className="dealer1 mb-5 col-12 px-0">
            <h2 className="col-md-6 col-sm-12 px-0 ">
              Customer satisfication is our key of Motivation.
            </h2>
            <Link to="/contact" className="explore-btn px-4">
              Connect with us
            </Link>
          </div>
        </div>

        <div className="row gy-4">
          <div className="col-md-4 sp-card">
            <div className="card border-0   specialization-card special-card1">
              <img
                src={img1}
                className="card-img-top "
                alt="Commercial properties"
              />
              <div className="card-body px-3">
                <div className="penta-card d-flex justify-content-between align-items-center mt-2">
                  <p className="mb-0 fs-5 fw-medium">Commercial properties</p>
                  <span className="mb-0 fs-4 fw-bold">↗</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 sp-card">
            <div className="card border-0   specialization-card special-card2">
              <img src={img2} className="card-img-top " alt="Smart Homes" />
              <div className="card-body px-3">
                <div className="penta-card d-flex justify-content-between align-items-center mt-2">
                  <p className="mb-0 fs-5 fw-medium">Smart Homes</p>
                  <span className="mb-0 fs-4 fw-bold">↗</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 sp-card">
            <div className="card border-0   specialization-card special-card3">
              <img src={img3} className="card-img-top " alt="Penthouses" />
              <div className="card-body px-3">
                <div className="penta-card d-flex justify-content-between align-items-center mt-2">
                  <p className="mb-0 fs-5 fw-medium">Penthouses</p>
                  <span className="mb-0 fs-4 fw-bold">↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationSection;
