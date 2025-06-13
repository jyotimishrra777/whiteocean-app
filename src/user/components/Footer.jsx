import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import { PiCopyright } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { GetImageUrl } from "../../utils/GetImageURL";

const Footer = () => {
  const [shouldShowArrow, setShouldShowArrow] = useState(false);

  useEffect(() => {
    const checkArrowVisibility = () => {
      const screenHeight = window.innerHeight;
      const contentHeight = document.body.scrollHeight;
      const hasScrolled = window.scrollY > 100;

      setShouldShowArrow(contentHeight > screenHeight && hasScrolled);
    };

    checkArrowVisibility();
    window.addEventListener("resize", checkArrowVisibility);
    window.addEventListener("scroll", checkArrowVisibility);

    return () => {
      window.removeEventListener("resize", checkArrowVisibility);
      window.removeEventListener("scroll", checkArrowVisibility);
    };
  }, []);

  const currentYear = new Date().getFullYear();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section id="footer-sec">
        <div className="number-data-section">
          <div className="number-data col-6 text-start">
            <h2>Let's Make Your Real Estate Goals Happen </h2>
          </div>
          {/* <div className="mobile-number-data"> */}
          <div className="number-data">
            <div className="number-data-arrow">
              <FaArrowRightLong />
            </div>
          </div>
          <div className="number-data ">
            <Link to="#" className="explore-btn px-4">
              Get a consultation
            </Link>
          </div>
        </div>
        {/* </div> */}
        <div className="footer-section d-flex">
          <div className="container">
            <footer>
              <div className="row footer-row1 d-flex justify-content-between">
                <div className="col-md-6 col-sm-12 d-flex footer-left-content">
                  <div className="col-2">
                    <h5 className="fw-bolder  mb-4">INFO</h5>
                    <ul className="nav flex-column footer-nav">
                      <li className=" nav-item mb-2 mx-0">
                        <Link
                          to="/about"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          About us
                        </Link>
                      </li>
                      <li className=" nav-item mb-2 mx-0">
                        <Link
                          to="/career"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Career
                        </Link>
                      </li>
                      <li className=" nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-2">
                    <h5 className="fw-bolder  mb-4">PROPERTY</h5>
                    <ul className="nav flex-column footer-nav">
                      <li className="nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Commercial office
                        </Link>
                      </li>
                      <li className="nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Land
                        </Link>
                      </li>
                      <li className="nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Appartments
                        </Link>
                      </li>
                      <li className="nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Flat
                        </Link>
                      </li>
                      <li className="nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Bunglows
                        </Link>
                      </li>
                      <li className="nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Villas
                        </Link>
                      </li>
                      <li className="nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Penthouse
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 text-right footer-logo">
                  <img
                    src={GetImageUrl("/images/logo.jpg")}
                    alt="error"
                    className="pb-3"
                  />
                  <hr className="my-3 border-1 w-100 " />
                  <div id="footer-contact-detail">
                    <h5 className="text-muted">+91-7600033211</h5>
                    <p className="text-muted mb-0">haresh@whiteoceanprop.com</p>
                    <p className="text-muted mb-0">504, Shivalik Satyamev,</p>
                    <p className="text-muted mb-0">Near Vakil Saheb Bridge,</p>
                    <p className="text-muted mb-0">South Bopal, Ahmedabad,</p>
                    <p className="text-muted">380058</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center py-3 mt-4  px-5 border-top copy-right-sec">
          <div className="copy-right">
            <p className="mb-0">
              {<PiCopyright />} {currentYear} - {currentYear + 1} Copyright
              White Ocean Properties. All Rights Reserved.
            </p>
            <p className="mb-0">
              Designed & Developed By
              <Link
                to="https://www.ecodedash.com/"
                target="blank"
                className="text-white ml-2 text-decoration-none"
              >
                Ecode Dash
              </Link>
            </p>
          </div>
          {shouldShowArrow && (
            <div className="footer-arrow " onClick={handleScrollToTop}>
              <IoIosArrowRoundUp />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Footer;
