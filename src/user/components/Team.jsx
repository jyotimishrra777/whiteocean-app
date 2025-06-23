import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
import { GetImageUrl } from "../../utils/GetImageURL";

const Team = () => {
  return (
    <>
      <section className="section">
        {/* <div className="team-container container d-flex justify-content-between align-items-center"> */}
        <div className="team-container  d-flex justify-content-between align-items-center">
          <div className="col-md-5 col-sm-12 p-0 right-container position-relative team-left">
            <img
              src={GetImageUrl("images/haresh1.jpg")}
              alt="Property"
              className="img-fluid mt-0 dream-right-img"
            />
          </div>
          <div className="col-md-7 col-sm-12 left-container">
            <h2 className="section-title">
              Future homeowners, your dream starts here
            </h2>
            <p className="section-description">
              <div className="team-quote-icon ">❝</div>
              White Oceans Property understands that for millennials, owning a
              home is more than a purchase—it's a lifelong dream. That’s why we
              offer luxurious yet homely properties in Ahmedabad-West, blending
              modern design with traditional charm.
              <br />
              Whether you're searching online or visiting in person, we’re here
              to guide you—from property selection to home loans and
              paperwork—making your journey smooth and joyful. A home is built
              on memories, milestones, and meaningful moments, and we’re proud
              to help create that foundation. With over 10 years of experience,
              we’ve helped countless families find their “Sapno Ka Ghar,” and
              we’re just getting started.
              <div className="team-quote-icon float-right mt-4">❞</div>
              <h5 className="fs-4 fw-bold mt-4 mb-1 founder-name">
                Haresh Vaja
              </h5>
              <p color="founder-text">Founder & CEO</p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
