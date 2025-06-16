import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { GetImageUrl } from "../../utils/GetImageURL";
import { Button } from "react-bootstrap";
import Property from "../staticData/Property.json";

// Utility to convert "60lacs" to 6000000
const parsePrice = (priceString) => {
  if (!priceString) return 0;
  const cleaned = priceString.toLowerCase().replace(/\s/g, "");
  if (cleaned.includes("cr")) {
    return parseFloat(cleaned) * 10000000;
  } else if (cleaned.includes("lac")) {
    return parseFloat(cleaned) * 100000;
  } else if (cleaned.includes("lacs")) {
    return parseFloat(cleaned) * 100000;
  }
  return parseFloat(cleaned.replace(/[^0-9]/g, ""));
};

const PropertyListing = ({
  searchQuery = "",
  selectedType = "",
  selectedLocation = "",
  selectedBedroom = "",
  budgetRange = { min: 0, max: 100000000 },
}) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProperties = Property.filter((property) => {
    const matchesSearch =
      !searchQuery ||
      property.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      !selectedType ||
      property.type?.toLowerCase() === selectedType.toLowerCase();

    const matchesLocation =
      !selectedLocation ||
      property.location?.toLowerCase() === selectedLocation.toLowerCase();

    const matchesBedroom =
      !selectedBedroom || property.bhk?.toString() === selectedBedroom;

    const price = parsePrice(property.price);
    const matchesPrice = price >= budgetRange.min && price <= budgetRange.max;

    return (
      matchesSearch &&
      matchesType &&
      matchesLocation &&
      matchesBedroom &&
      matchesPrice
    );
  });

  const visibleProperties = filteredProperties.slice(0, visibleCount);

  const handleViewAll = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useEffect(() => {
    setVisibleCount(6);
  }, [
    searchQuery,
    selectedType,
    selectedLocation,
    selectedBedroom,
    budgetRange,
  ]);

  return (
    <section>
      <div className="container mb-5 property-main-container">
        {visibleProperties.length > 0 ? (
          visibleProperties.map((item, index) => (
            <div key={index} className="property-cards mb-4">
              <div className="row g-0">
                <div className="col-md-4 position-relative">
                  <div className="image-wrapper position-relative">
                    <img
                      src={GetImageUrl(item.image)}
                      alt="Property"
                      className="img-fluid property-cards-img"
                    />
                    <div className="sample-label">{item.name}</div>
                  </div>
                </div>

                <div className="col-md-8 d-flex flex-column p-3">
                  <div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                      <div>
                        <h6 className="property-title mb-1">{item.name}</h6>
                        <div className="text-muted prorety-location">
                          <FaMapMarkerAlt /> {item.location}
                        </div>
                      </div>
                      <div className="text-md-end mt-2 mt-md-0">
                        <h6 className="property-developer mb-1">Haresh Vaja</h6>
                        <div className="text-muted prorety-location">
                          📅 Possession : June 2026
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-wrap mt-3 mb-3 property-specs">
                      <div>
                        <strong>{item.bhk}-BHK</strong>
                      </div>
                      <div className="d-flex flex-column text-black-50">
                        <p className="mb-0">
                          <strong>{item.size}</strong>
                        </p>
                        <p className="mb-0">(Super Built-up Area)</p>
                      </div>
                      <div className="text-black-50">
                        <strong>{item.price}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto d-flex flex-column align-items-md-end">
                    <div className="d-flex gap-2 flex-md-wrap justify-content-md-end mb-2 brochure-viewdetail">
                      <Button
                        variant="outline-success"
                        className="d-flex align-items-center gap-1"
                      >
                        <FaWhatsapp />
                      </Button>
                      <button className="text-white px-3 brochure-btn">
                        Brochure
                      </button>
                      <button className="text-white px-3 view-details-btn">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No matching properties found.</p>
        )}
      </div>

      {visibleCount < filteredProperties.length && (
        <button
          className="explore-btn px-4 property-view-all"
          onClick={handleViewAll}
        >
          View All
        </button>
      )}
    </section>
  );
};

export default PropertyListing;
