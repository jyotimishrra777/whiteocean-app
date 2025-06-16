import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import PropertyListing from "../components/PropertyListing";
import { GetImageUrl } from "../../utils/GetImageURL";

const Property = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedBedroom, setSelectedBedroom] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [budgetRange, setBudgetRange] = useState({ min: 0, max: 100000000 });
  const [tempRange, setTempRange] = useState([0, 100000000]);

  useEffect(() => {
    setBudgetRange({ min: tempRange[0], max: tempRange[1] });
  }, [tempRange]);

  const handleMinChange = (e) => {
    const newMin = Math.min(+e.target.value, tempRange[1] - 5000);
    setTempRange([newMin, tempRange[1]]);
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(+e.target.value, tempRange[0] + 5000);
    setTempRange([tempRange[0], newMax]);
  };

  return (
    <>
      <section className="pages-section">
        <div className="row">
          <div className="container text-light d-flex justify-content-md-between align-items-start about-section-content">
            <h2 className="col-md-6 col-sm-12 fw-bolder">
              Premium properties just curated for you
            </h2>
            <div className="col-md-6 col-sm-12">
              <p>
                Discover Spaces That Reflect Your Dreams — From Modern
                Apartments to Luxurious Villas, We Bring You Homes That Match
                Your Lifestyle.
              </p>
              <Link to="/properties" className="explore-btn px-5">
                Explore Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="property-listing-page section mb-5">
        <div className="container property-tab-header">
          <div className="property-tab-filter d-flex flex-wrap gap-3 mb-3">
            <select
              className="property-tab-select"
              onChange={(e) => setSelectedType(e.target.value)}
              value={selectedType}
            >
              <option value="">Types</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
              <option value="agriculture">Agriculture</option>
            </select>

            <select
              className="property-tab-select"
              onChange={(e) => setSelectedBedroom(e.target.value)}
              value={selectedBedroom}
            >
              <option value="">Bedrooms</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
              <option value="5">5 BHK</option>
            </select>

            <select
              className="property-tab-select"
              onChange={(e) => setSelectedLocation(e.target.value)}
              value={selectedLocation}
            >
              <option value="">Locations</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Surat">Surat</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Banglore">Bangalore</option>
            </select>
          </div>

          <div className="col-md-12 d-flex justify-content-between align-items-center px-0 price-range-container ">
            <div className="col-md-6 col-sm-12">
              <label className="fw-bold d-block mb-1">Price Range:</label>
              <div
                className="position-relative w-100 dual-slider-wrapper"
                style={{ padding: "10px 0" }}
              >
                <input
                  type="range"
                  min="0"
                  max="100000000"
                  step="5000"
                  value={tempRange[0]}
                  onChange={handleMinChange}
                  className="form-range"
                />
                <input
                  type="range"
                  min="0"
                  max="100000000"
                  step="5000"
                  value={tempRange[1]}
                  onChange={handleMaxChange}
                  className="form-range"
                />
                <div className="d-flex justify-content-between  px-1">
                  <span className="fw-bold">
                    Rs {tempRange[0].toLocaleString()}
                  </span>
                  <span className="fw-bold">
                    Rs {tempRange[1].toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="searchbar col-md-6 col-sm-12">
              <span className="searchIcon">
                <FiSearch />
              </span>
              <input
                type="search"
                placeholder="Search here"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>
        </div>

        <PropertyListing
          searchQuery={searchInput}
          selectedType={selectedType}
          selectedLocation={selectedLocation}
          selectedBedroom={selectedBedroom}
          budgetRange={budgetRange}
        />
      </section>
    </>
  );
};

export default Property;
