import React from "react";
import { Link } from "react-router-dom";
import { GetImageUrl } from "../../utils/GetImageURL";

const SpecialProperty = () => {
  return (
    <>
      <div className="container">
        <div className="row g-5 align-items-center mb-5 ">
          <div className="col-lg-6">
            <div className="icon mb-3">
              <img src={GetImageUrl("images/explore1.png")} alt="Img" />
            </div>
            <h3 className="title">Experienced & Trained Team</h3>
            <p className="description">
              With White Ocean Property, you gain the expertise of seasoned
              professionals with 5–15 years of experience in Ahmedabad’s real
              estate market. Through ongoing training and market updates, our
              team ensures you receive the most accurate, up-to-date guidance at
              every step.
            </p>
            <Link to="/properties" className="explore-link">
              Explore More <span>↗</span>
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              src={GetImageUrl("images/Group1.png")}
              alt="Interior"
              className="explore-img rounded-4"
            />
          </div>
        </div>

        <div className="row g-5 align-items-center flex-lg-row-reverse mb-5 mt-5">
          <div className="col-lg-6">
            <div className="icon mb-3">
              <img src={GetImageUrl("images/explore2.png")} alt="Img" />
            </div>
            <h3 className="title">Personalized Consultation</h3>
            <p className="description">
              We prioritize your needs over pushy sales tactics. No unsolicited
              calls—just helpful insights via email, blogs, and expert-led
              consultations focused on your goals, not pressure.
            </p>
            <Link to="/properties" className="explore-link">
              Explore More <span>↗</span>
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              src={GetImageUrl("images/Group2.png")}
              alt="Interior"
              className="explore-img rounded-4"
            />
          </div>
        </div>

        <div className="row g-5 align-items-center mb-5 mt-5">
          <div className="col-lg-6">
            <div className="icon mb-3">
              <img src={GetImageUrl("images/explore3.png")} alt="Img" />
            </div>
            <h3 className="title">Partnerships with Top Builders</h3>
            <p className="description">
              As trusted partners of top Ahmedabad developers, we offer
              exclusive access to premier projects. Our strong builder
              relationships reflect our credibility—ensuring you're in reliable
              hands throughout your property journey.
            </p>
            <Link to="/properties" className="explore-link">
              Explore More <span>↗</span>
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              src={GetImageUrl("images/Group3.png")}
              alt="Interior"
              className="explore-img rounded-4"
            />
          </div>
        </div>

        <div className="row g-5 align-items-center flex-lg-row-reverse  mt-5 ">
          <div className="col-lg-6">
            <div className="icon mb-3">
              <img src={GetImageUrl("images/explore4.png")} alt="Img" />
            </div>
            <h3 className="title">Quality assuarance</h3>
            <p className="description">
              At White Ocean Property, we recommend only quality projects from
              trusted developers — never compromising on standards, integrity,
              or transparency.
            </p>
            <Link to="/properties" className="explore-link">
              Explore More <span>↗</span>
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              src={GetImageUrl("images/Group4.png")}
              alt="Interior"
              className="explore-img rounded-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProperty;
