import React from "react";
import PropertyListing from "../components/PropertyListing";
import { FaArrowRightLong } from "react-icons/fa6";
import SpecializationSection from "../components/SpecializeCard";
import { Link } from "react-router-dom";
import DreamProperty from "../components/DreamProperty";
import { GetImageUrl } from "../../utils/GetImageURL";
import CommonSection from "../components/CommonSection";

const About = () => {
  return (
    <>
      <section className="pages-section">
        <div className="row">
          <div className="container text-light d-flex  justify-content-md-between align-items-start about-section-content">
            <h2 className="col-md-6 col-sm-12  fw-bolder">
              Get your{" "}
              {/* <img src={GetImageUrl("images/star.png")} alt="img err" /> */}
              <br />
              Sapno Ka Ghar
            </h2>
            <div className="col-md-6 col-sm-12">
              <p>
                Mesmerizing memories can be lived in your own home and the home
                of your dream is the White Oceans Property responsibility
              </p>
              <Link to="/" className="explore-btn  px-5">
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>
      <DreamProperty />
      <section className="section about-card-section">
        <div className="container">
          <div className="col-12 d-flex  about-card-container  gap-5">
            <div className="card about-card rounded-5 p-2">
              <div className="card-img">
                <img
                  src={GetImageUrl("images/vision.png")}
                  className="card-img-top"
                  alt="Interior"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">Our Vision</h5>
                <p className="card-text">
                  Make an opportunity for buying a community, a lifestyle,
                  security, and a like-minded society. Not just a piece of land,
                  house, or commercial space but connecting you to a place that
                  matches your vibes. Going to the depth of the property and
                  listing in our portfolio is to show the quality, its value
                  which matches our customer's standard.
                </p>
              </div>
            </div>
            <div className="card about-card rounded-5 p-2">
              <div className="card-img">
                <img
                  src={GetImageUrl("images/mission.png")}
                  className="card-img-top"
                  alt="Interior"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">Our Mission</h5>
                <p className="card-text">
                  Connecting with the best builders who have the properties
                  which are well maintained and managed as per the families,
                  individuals, and corporates need. From searching to document
                  work, the customer should be well satisfied with each process
                </p>
              </div>
            </div>
            <div className="card about-card rounded-5 p-2">
              <div className="card-img">
                <img
                  src={GetImageUrl("images/value.png")}
                  className="card-img-top"
                  alt="Interior"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">Our Values</h5>
                <p className="card-text">
                  We always want to perform best. For this reason, we always
                  stand at the top with our services. We take the ownership to
                  match your choice for the right home or the property.Everyone
                  comes up with their thought and hopes. We respect everyone’s
                  choices and expectations and put them in the right place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SpecializationSection />
      </section>
    </>
  );
};

export default About;
