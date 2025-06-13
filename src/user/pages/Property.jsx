import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import PropertyListing from "../components/PropertyListing";
import { GetImageUrl } from "../../utils/GetImageURL";

const Property = () => {
  const [isSearching, setIsSearching] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    if (searchInput.trim() === "") {
      setIsSearching("");
    }
  }, [searchInput]);

  const handleSearch = () => {
    if (searchInput.trim() !== "") {
      setIsSearching(searchInput.trim());
    }
  };

  const handleTypeFilter = (type) => {
    // setSelectedType(type.toLowerCase());
    if (type.toLowerCase() === "all") {
      setSelectedType("");
    } else {
      setSelectedType(type.toLowerCase());
    }
  };

  return (
    <>
      <section className="pages-section">
        <div className="row">
          <div className="container text-light d-flex  justify-content-md-between align-items-start about-section-content">
            <h2 className="col-md-6 col-sm-12  fw-bolder">
              Premium properties{" "}
              {/* <img src={GetImageUrl("/images/star.png")} alt="img err" /> */}
              {/* <br /> */}
              just curated for you
            </h2>
            <div className="col-md-6 col-sm-12">
              <p>
                Discover Spaces That Reflect Your Dreams — From Modern
                Apartments to Luxurious Villas, We Bring You Homes That Match
                Your Lifestyle, Aspirations, and Every Chapter of Life
              </p>
              <Link to="/properties" className="explore-btn  px-5">
                Explore Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="property-listing-page section mb-5">
        <div className="container property-tab-header">
          <div id="property-tab">
            {[
              "All",
              "Residential",
              "Commercial",
              "Industrial",
              "Agriculture",
            ].map((type) => (
              <div
                key={type}
                className={`filterTag ${
                  (selectedType === "" && type.toLowerCase() === "all") ||
                  selectedType === type.toLowerCase()
                    ? "active"
                    : ""
                }`}
                onClick={() => handleTypeFilter(type)}
              >
                {type}
              </div>
            ))}
          </div>

          <div className="searchbar">
            <span className="searchIcon" onClick={handleSearch}>
              <FiSearch />
            </span>
            <input
              type="search"
              placeholder="Search here"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
        </div>

        <PropertyListing
          searchQuery={isSearching}
          selectedType={selectedType}
        />
      </section>
    </>
  );
};

export default Property;
