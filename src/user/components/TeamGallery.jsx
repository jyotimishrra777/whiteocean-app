import React from "react";
import { Link } from "react-router-dom";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { GetImageUrl } from "../../utils/GetImageURL";

const images = [
  "/images/p1.png",
  "/images/p2.png",
  "/images/p3.png",
  "/images/p4.png",
  "/images/p5.png",
  "/images/p6.png",
  "/images/p7.png",
];

const TeamGallery = () => {
  return (
    <section className=" section team-gallery-section ">
      <h6 className="dealer-choose">
        {" "}
        <span>
          <TfiLayoutLineSolid />
        </span>{" "}
        Our culture
      </h6>
      <div className="dealer">
        <div className="dealer1 mb-5 col-12 px-0">
          <h2 className="col-6 px-0">
            Get a sneek peek of our memorable moments
          </h2>
          <Link to="/properties" className="explore-btn px-4">
            Explore more
          </Link>
        </div>
      </div>
      <div className="team-gallery-container">
        <div className="left-column">
          <img src={GetImageUrl(images[0])} alt="Team" className="left-top" />
          <img
            src={GetImageUrl(images[1])}
            alt="Team"
            className="left-bottom"
          />
        </div>
        <div className="right-column">
          <div className="right-top">
            <img src={GetImageUrl(images[2])} alt="Team" />
            <img src={GetImageUrl(images[3])} alt="Team" />
          </div>
          <div className="right-middle">
            <img src={GetImageUrl(images[4])} alt="Team" />
          </div>
          <div className="right-bottom">
            <img src={GetImageUrl(images[5])} alt="Team" />
            <img src={GetImageUrl(images[6])} alt="Team" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
