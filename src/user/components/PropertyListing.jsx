import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { MdOutlineBed } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { TbRotateRectangle } from "react-icons/tb";
import { GetImageUrl } from "../../utils/GetImageURL";
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
      <div className="container property-container mb-5">
        {visibleProperties.length > 0 ? (
          visibleProperties.map((item, index) => (
            <div className="card property-card" key={index}>
              <img src={GetImageUrl(item.image)} alt="Interior" />
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between align-items-center mb-2 fs-5 fw-bold">
                  <span>{item.name}</span>
                  <span>
                    <img
                      src={GetImageUrl("/images/whatsapp.png")}
                      alt="img err"
                      style={{ width: "25px", height: "25px" }}
                    />
                  </span>
                </h5>
                <p className="card-text d-flex gap-3 mb-1">
                  <span>
                    <GrLocation /> {item.location}
                  </span>
                </p>
                <hr />
                <div className="propertylisting-container">
                  <div className="propertylisting-card">
                    <MdOutlineBed style={{ color: "red", fontSize: "20px" }} />
                    <p className="mb-0">4 bhk</p>
                  </div>
                  <div className="propertylisting-card">
                    <TbRotateRectangle
                      style={{ color: "red", fontSize: "20px" }}
                    />
                    <p className="mb-0">{item.size}</p>
                  </div>
                  <div className="propertylisting-card">
                    <MdOutlineBed style={{ color: "red", fontSize: "20px" }} />
                    <p className="mb-0">
                      Furnished : <span>{item.furnished}</span>
                    </p>
                  </div>
                </div>
                <div className="property-like">
                  <span className="like-icon">
                    <FaRegHeart />
                  </span>
                  <Link to="#" className="view-deatil-btn">
                    view details
                  </Link>
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
