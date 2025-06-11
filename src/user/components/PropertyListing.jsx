import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { MdOutlineBed } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { TbRotateRectangle } from "react-icons/tb";
import { GetImageUrl } from "../../utils/GetImageURL";

import { Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import Property from "../staticData/Property.json";

const PropertyListing = ({ searchQuery = "", selectedType = "" }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const query = searchQuery.toLowerCase().trim();
  const typeFilter = selectedType.toLowerCase();

  const filteredProperties = Property.filter((property) => {
    const matchesSearch =
      query === "" || property.name.toLowerCase().includes(query);
    const matchesType =
      typeFilter === "" || property.type?.toLowerCase() === typeFilter;
    return matchesSearch && matchesType;
  });

  const visibleProperties = filteredProperties.slice(0, visibleCount);

  const handleViewAll = () => {
    setVisibleCount((prev) => prev + 6);
  };

  useEffect(() => {
    setVisibleCount(6);
  }, [searchQuery, selectedType]);

  return (
    <section>
      <div className="container  mb-5">
        {visibleProperties.length > 0 ? (
          visibleProperties.map((item, index) => (
            <div key={index} className="property-cards  rounded mb-4">
              <div className="row g-0">
                <div className="col-md-4 position-relative">
                  <div className="image-wrapper position-relative">
                    <img
                      src={GetImageUrl(item.image)}
                      alt="Property"
                      className="img-fluid "
                    />

                    {/* Top Badges just like sample-label */}
                    <div className="top-badges"></div>

                    <div className="sample-label">{item.name}</div>
                  </div>
                </div>

                {/* Details Section */}
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
                        <div className="text-muted  prorety-location">
                          📅 Possession : June 2026
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-wrap  mt-3 mb-3 property-specs">
                      <div>
                        <strong>5-BHK</strong>
                      </div>
                      <div className="d-flex flex-column text-black-50 ">
                        <p className="mb-0">
                          <strong>7838-9903 Sq-ft</strong>
                        </p>
                        <p className="mb-0">(Super Built-up Area)</p>
                      </div>
                      <div className="text-black-50">
                        <strong>₹7.99 Cr - 10.1 Cr</strong>
                      </div>
                    </div>
                  </div>

                  {/* Bottom right-aligned button group */}
                  <div className="mt-auto d-flex flex-column align-items-end">
                    <div className="d-flex gap-2 flex-wrap justify-content-end mb-2">
                      <Button
                        variant="outline-success"
                        className="d-flex align-items-center gap-1"
                      >
                        <FaWhatsapp />
                      </Button>

                      <button className="text-white px-3 brochure-btn">
                        Brochure
                      </button>
                      <button className="bg-dark text-white px-3 view-details-btn">
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
