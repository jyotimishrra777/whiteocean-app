import React from "react";
import { Link } from "react-router-dom";
import { GetImageUrl } from "../../utils/GetImageURL";

const CommonSection = () => {
  return (
    <>
      <section className="pages-section">
        <div className="row">
          <div className="container text-light d-flex  justify-content-md-between align-items-start about-section-content">
            <h2 className="col-md-6 col-sm-12  fw-bolder">
              We are hiring{" "}
              <img src={GetImageUrl("images/star.png")} alt="img err" />
            </h2>
            <div className="col-md-6 col-sm-12">
              <p>
                At White Oceans Property, we don't just build homes—we build
                careers, nurture talent, and create opportunities for passionate
                individuals to grow, lead, and make a lasting impact in the
                world of real estate.
              </p>
              <Link to="/career" className="explore-btn  px-5">
                See all open positions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommonSection;
