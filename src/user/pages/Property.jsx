import React, { useState, useEffect } from "react";
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
    console.log(
      "Search by clicking on the icon either hit the enter button to search"
    );
    if (searchInput.trim() !== "") {
      setIsSearching(searchInput.trim());
    }
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type.toLowerCase());
  };

  return (
    <>
      <section className="pages-section">
        <div className="row">
          <div className="container text-light d-flex justify-content-between align-items-start about-section-content">
            <h2 className="col-6 fw-bolder">
              Premium properties{" "}
              <img src={GetImageUrl("/images/star.png")} alt="img err" />
              <br />
              just curated for you
            </h2>
            <div className="col-6">
              <p>
                Discover Spaces That Reflect Your Dreams — From Modern
                Apartments to Luxurious Villas, We Bring You Homes That Match
                Your Lifestyle, Aspirations, and Every Chapter of Life.
              </p>
              <a href="#" className="explore-btn px-5">
                Explore Properties
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="property-listing-page section">
        <div className="container property-tab-header">
          <div id="property-tab">
            {["Residential", "Commercial", "Industrial", "Agriculture"].map(
              (type) => (
                <button
                  key={type}
                  className={`filterTag ${
                    selectedType === type.toLowerCase() ? "active" : ""
                  }`}
                  onClick={() => handleTypeFilter(type)}
                >
                  {type} property
                </button>
              )
            )}
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
