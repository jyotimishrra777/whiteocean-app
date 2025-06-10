import React from "react";
import { Link } from "react-router-dom";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import ContactForm from "../components/ContactForm";
import TeamGallery from "../components/TeamGallery";
import { GetImageUrl } from "../../utils/GetImageURL";

const Property = () => {
  return (
    <>
      <section className="pages-section">
        <div className="row">
          <div className="container text-light d-flex justify-content-between align-items-start about-section-content">
            <h2 className="col-6  fw-bolder">
              We are hiring{" "}
              <img src={GetImageUrl("images/star.png")} alt="img err" />
            </h2>
            <div className="col-6">
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
      <section className="section">
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
              Why white ocean properties is a great place to work
            </h2>
            <Link to="/about" className="explore-btn px-4">
              About Us
            </Link>
          </div>
        </div>

        <div className="row">
          <di className="container d-flex flex-wrap justify-content-between">
            <div className="card property-card career-card">
              <img src={GetImageUrl("images/h1.jpg")} alt="Interior" />
              <div className="card-body ">
                <h5 className="card-title d-flex justify-content-between align-items-center mb-2 fs-5 fw-bold">
                  Growth-Driven Culture
                </h5>
                <p className="card-text d-flex gap-3 mb-1">
                  We believe in empowering our team with continuous learning,
                  clear career paths, and real opportunities to lead and grow.
                </p>
              </div>
            </div>
            <div className="card property-card career-card">
              <img src={GetImageUrl("images/h1.jpg")} alt="Interior" />
              <div className="card-body ">
                <h5 className="card-title d-flex justify-content-between align-items-center mb-2 fs-5 fw-bold">
                  Impactful Work
                </h5>
                <p className="card-text d-flex gap-3 mb-1">
                  Every role here contributes to turning dreams into homes—your
                  work directly shapes lives, communities, and cityscapes.
                </p>
              </div>
            </div>
            <div className="card property-card career-card">
              <img src={GetImageUrl("images/h1.jpg")} alt="Interior" />
              <div className="card-body ">
                <h5 className="card-title d-flex justify-content-between align-items-center mb-2 fs-5 fw-bold">
                  Supportive environment
                </h5>
                <p className="card-text d-flex gap-3 mb-1">
                  With a collaborative team and open communication, White Oceans
                  fosters a workplace where your ideas are heard and your
                  efforts are valued.
                </p>
              </div>
            </div>
          </di>
        </div>
      </section>
      {/* <TeamGallery /> */}
      <ContactForm />
    </>
  );
};

export default Property;
