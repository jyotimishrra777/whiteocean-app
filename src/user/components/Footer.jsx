import React from "react";
// import "./Footer.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
import { PiCopyright } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section id="footer-sec">
        <div className="number-data-section">
          <div className="number-data col-6 text-start">
            <h2>Let's Make Your Real Estate Goals Happen .</h2>
          </div>

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
        <div className="footer-section d-flex">
          <div className="container">
            <footer>
              <div className="row d-flex justify-content-between">
                <div className="col-6 d-flex justify-content-between">
                  <div className="col-2">
                    <h5 className="fw-bold fs-6 mb-4">INFO</h5>
                    <ul className="nav flex-column">
                      <li className=" nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          About us
                        </Link>
                      </li>
                      <li className=" nav-item mb-2 mx-0">
                        <Link
                          to="#"
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
                    <h5 className="fw-bold fs-6 mb-4">PROPERTY</h5>
                    <ul className="nav flex-column">
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

                  <div className="col-2">
                    <h5 className="fw-bold fs-6 mb-4">COMPANY</h5>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="nav-item mb-2 mx-0">
                        <Link
                          to="#"
                          className="footer-link nav-link p-0 text-muted"
                        >
                          Privacy policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-4 text-right">
                  <img src="/images/logo.jpg" alt="error" className="pb-3" />
                  <hr className="my-3 border-1 w-100 " />
                  <div id="footer-contact-detail">
                    <h5 className="text-muted">+91-7600033211</h5>
                    <p className="text-muted mb-0">Haresh@whiteoceanprop.com</p>
                    <p className="text-muted mb-0">504, Shivalik Satyamev,</p>
                    <p className="text-muted mb-0">Near Vakil Saheb Bridge,</p>
                    <p className="text-muted ">South Bopal, Ahmedabad,</p>
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
              {<PiCopyright />} 2024-25 Copyright White Ocean Properties. All
              Rights Reserved.
            </p>
            <p className="mb-0">Designed & Developed By Ecode Dash</p>
          </div>

          <Link className="footer-arrow " to="#">
            <IoIosArrowRoundUp />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Footer;
