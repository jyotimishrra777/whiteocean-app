import React from "react";
import { Link } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import ProcessTimeline from "../components/ProcessTimeline";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import SpecialProperty from "../components/SpecialProperty";
import FamousProperty from "../components/FamousProperty";
import { GetImageUrl } from "../../utils/GetImageURL";

const Dealer = [
  {
    id: "1",
    title: "Personalize Service",
    desc: "We craft Personalized Service to fit your unique needs",
    img: "/images/Icon.png",
  },
  {
    id: "2",
    title: "Dedicated Experts",
    desc: "Our dedicated experts offer industry-leading.knowledge.",
    img: "/images/Icon (1).png",
  },
  {
    id: "3",
    title: "Open Communication",
    desc: "We prioritize open talk with no hidden fees.",
    img: "/images/Icon (2).png",
  },
  {
    id: "4",
    title: "Overall Control",
    desc: "We deliver comprehensive plans for a seamless experience.",
    img: "/images/Icon (3).png",
  },
  {
    id: "5",
    title: "Cutting-edge Innovation",
    desc: "We leverage cutting-edge innovation to achieve results.",
    img: "/images/Icon (2).png",
  },
  {
    id: "6",
    title: " Proven Track Record",
    desc: "Our speaks for itself.proven track record speaks for itself.",
    img: "/images/Icon (3).png",
  },
];

const Home = () => {
  console.log("APP_URL:", import.meta.env.VITE_APP_URL);

  return (
    <>
      {/* first section */}
      <section className="section hero-section">
        <div className="hero">
          <div className="hero-content">
            <h1>
              Smart Property
              <br />
              Solutions. Real Results.
            </h1>
            <p>
              "Your trusted partner in every stage of real estate whether you're
              buying, selling, or renting."
            </p>

            <div className="search-box">
              <div className="tabs">
                <button className="active">Rent</button>
                <button>Buy</button>
                <button>Sell</button>
              </div>
              <div className="search-fields">
                <div className="search-items">
                  <h5 className="search-items-heading">Location</h5>
                  {/* <select> */}
                  <input placeholder="Select your city"></input>
                  {/* </select> */}
                </div>
                <div className="search-items">
                  <h6 className="search-items-heading">Property Type</h6>
                  <select>
                    <option>Choose Property Type</option>
                  </select>
                </div>
                <div className="search-items">
                  <h6 className="search-items-heading">Price Range</h6>
                  <select>
                    <option>Choose Price Range</option>
                  </select>
                </div>

                <button className="search-btn">
                  <FiSearch />
                </button>
              </div>
            </div>

            <Link to="#" className="explore-btn px-4">
              Explore All Properties
            </Link>
          </div>

          <div className="hero-images">
            <img
              // src={`${import.meta.env.VITE_APP_URL}images/h3.jpg`}
              src={GetImageUrl("/images/h3.jpg")}
              alt="Main Property"
              className="main-img"
            />
            <div className="thumbs">
              <img src={GetImageUrl("/images/h1.jpg")} alt="Interior" />
              <img src={GetImageUrl("/images/h2.jpg")} alt="Interior" />
            </div>
            <div className="badge">
              <img
                src="images/bestproperty.png"
                alt=""
                width="100"
                height="100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className="section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Who Choose Us
        </h6>
        <div className="dealer">
          <div className="dealer1 mb-5">
            <h2>We are Trusted Property Dealer in Ahmedabad.</h2>
            <p>
              At White Properties, we believe finding the right home is more
              than a transaction — it’s a deeply personal journey built on
              trust, care, and understanding. From your first consultation to
              the final closing, we’re by your side with expert guidance and
              truly personalized service. We take the time to listen, tailor
              every step to your needs, and celebrate your success as if it were
              our own.
            </p>
          </div>

          <div className="dealer2 ">
            <div className="dealer-explore">
              <img
                src={GetImageUrl("/images/kitchen.png")}
                alt="img"
                className="rounded-5"
              />
              <img
                src="../../public/images/arrow1.png"
                alt="img"
                className="dealer1-arrow1"
              />
            </div>
            <div className="card-columns card-container">
              {Dealer.map((item, i) => (
                <div key={i} className="card dealer-card ">
                  <div className="card-body text-start">
                    <img src={item.img} alt="" className="mb-3" />
                    <h5 className="card-title mb-3 font-weight-bolder">
                      {item.title}
                    </h5>
                    <p className="card-text">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* third section */}
      <section className="number-data-section">
        <div className="number-data">
          <h2>2000 +</h2>
          <p>Happy Customers</p>
        </div>
        <div className="number-data">
          <h2>283 +</h2>
          <p>New Projects</p>
        </div>
        <div className="number-data">
          <h2>12 +</h2>
          <p>Unit sold</p>
        </div>
        <div className="number-data">
          <div className="number-data-arrow">
            <FaArrowRightLong />
          </div>
        </div>
        <div className="number-data">
          <img src="/public/images/a1.png" alt="" height="50" width="400" />
        </div>
      </section>

      {/* fourth section */}
      <section className="section explore-section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Our specialization
        </h6>
        <div className="dealer">
          <div className="dealer1 mb-5 col-12 px-0">
            <h2 className="col-6 px-0">
              Whether buying or investing, we’ll help you find the right
              property
            </h2>
            <Link to="#" className="explore-btn px-4">
              Explore All Properties
            </Link>
          </div>
        </div>
        <SpecialProperty />
      </section>

      {/* fivth section */}

      <section className="number-data-section">
        <div className="number-data">
          <h2>Looking for a dream Home ?</h2>
          <p>We can help you realize your dream of a new home</p>
        </div>

        <div className="number-data">
          <div className="number-data-arrow">
            <FaArrowRightLong />
          </div>
        </div>
        <div className="number-data">
          <Link to="#" className="explore-btn px-5">
            Book a call
          </Link>
          {/* <img src="/public/images/a1.png" alt="" height="50" width="400" /> */}
        </div>
      </section>

      {/* sixth section */}

      <section className="section property-section">
        <div className="dealer">
          <div className="dealer1 mb-5 col-12">
            <h2 className="col-6">
              The most famous rent properties across ahmedabad
            </h2>
            <div className="d-flex gap-3">
              <Link to="#" className="flat-btn active">
                Offices
              </Link>
              <Link to="#" className="flat-btn ">
                Flats
              </Link>
              <span className="flat-arr1">
                <FaChevronRight />
              </span>
            </div>
          </div>
        </div>
        <FamousProperty />
      </section>

      {/* seven section */}

      <section className="section service-section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Services
        </h6>
        <div className="dealer">
          <div className="dealer1 mb-5 col-12 px-0">
            <h2 className="col-6 px-0">
              Whether buying or investing, we’ll help you find the right
              property
            </h2>
            <Link to="#" className="explore-btn px-4">
              View all Services
            </Link>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="col-12 d-flex gap-5">
              <div className="card services-card rounded-5 p-2">
                <div className="card-img">
                  <img
                    src={GetImageUrl("/images/service1.png")}
                    className="card-img-top"
                    alt="Interior"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    Property Buy, Rent, Sell Assistance
                  </h5>
                  <p className="card-text">
                    Expert guidance for buying, renting, or selling properties
                    tailored to your needs and preferences.
                  </p>
                  <Link to="#" className="explore-link">
                    Let's Gets Started<span>↗</span>
                  </Link>
                </div>
              </div>
              <div className="card services-card rounded-5 p-2">
                <div className="card-img">
                  <img
                    src={GetImageUrl("/images/service2.png")}
                    className="card-img-top"
                    alt="Interior"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    Property Management Services
                  </h5>
                  <p className="card-text">
                    Professional management of properties to maximize returns
                    and minimize hassles for property owners.
                  </p>
                  <Link to="#" className="explore-link">
                    Let's Gets Started<span>↗</span>
                  </Link>
                </div>
              </div>
              <div className="card services-card rounded-5 p-2">
                <div className="card-img">
                  <img
                    src={GetImageUrl("/images/service3.png")}
                    className="card-img-top"
                    alt="Interior"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-3">
                    Property Valuation and Appraisal
                  </h5>
                  <p className="card-text">
                    Accurate assessment of property value to ensure the fair
                    deals and informed decisions.
                  </p>
                  <Link to="#" className="explore-link">
                    Let's Gets Started<span>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* eight section */}

      <section className="section timeline-section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Our process
        </h6>
        <div className="dealer">
          <div className="dealer1 mb-5 col-12 px-0">
            <h2 className="col-6 px-0 ">
              Customer satisfication is our key of Motivation.
            </h2>
            <Link to="#" className="explore-btn px-4">
              Connect with us
            </Link>
          </div>
        </div>

        <ProcessTimeline />
      </section>

      {/* nine section */}

      <Testimonial />
      <Team />
    </>
  );
};

export default Home;
