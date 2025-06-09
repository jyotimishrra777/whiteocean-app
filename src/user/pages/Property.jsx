import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropertyListing from "../components/PropertyListing";
import { FiSearch } from "react-icons/fi";

const Property = () => {
  return (
    <>
      <section className="pages-section">
        <div className="row">
          <div className="container text-light d-flex justify-content-between align-items-start about-section-content">
            <h2 className="col-6  fw-bolder">
              Premium properties <img src="/images/star.png" alt="img err" />
              <br />
              just curated for you
            </h2>
            <div className="col-6">
              <p>
                Discover Spaces That Reflect Your Dreams — From Modern
                Apartments to Luxurious Villas, We Bring You Homes That Match
                Your Lifestyle, Aspirations, and Every Chapter of Life.
              </p>
              <a href="#" className="explore-btn  px-5">
                Explore Properties
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="property-listing-page section">
        <div className="container property-tab-header">
          <div id="property-tab">
            <NavLink
              to="/properties"
              end
              className={({ isActive }) =>
                `nav-item ${isActive ? "active-link" : ""}`
              }
            >
              Residential property
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active-link" : ""}`
              }
            >
              Commercial property
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active-link" : ""}`
              }
            >
              Industrial property
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active-link" : ""}`
              }
            >
              Agriculture property
            </NavLink>
          </div>

          <div className="searchbar">
            <span className="searchIcon">
              <FiSearch />
            </span>
            <input type="search" placeholder="Search here" />
          </div>
        </div>
        <PropertyListing />
      </section>
    </>
  );
};

export default Property;
