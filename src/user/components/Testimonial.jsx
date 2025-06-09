// Testimonial.jsx
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { Container, Row, Col, Button } from "react-bootstrap";
// import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="section testomonial-section">
      <div className="testimonial-wrapper ">
        <Container>
          <Row className="align-items-center">
            <Col md={5}>
              <div className="left-content">
                <h2 className="section-title">
                  See Why Customers Love <br /> White ocean properties
                </h2>
                <p className="section-desc">
                  At White ocean properties, we believe in building lasting
                  relationships by providing exceptional service and delivering
                  dream homes. But don’t just take our word for it—hear directly
                  from our satisfied homeowners who have experienced our
                  dedication and expertise firsthand. Their stories reflect the
                  heart of what we do: turning your vision into reality.
                </p>

                <div className="nav-buttons d-flex gap-2">
                  <span className="flat-arr1 testimonial-arr">
                    <FaChevronLeft />
                  </span>
                  <span className="flat-arr1 testimonial-arr">
                    <FaAngleRight />
                  </span>
                </div>
              </div>
            </Col>

            <Col md={7}>
              <div className="testimonial-card">
                <div className="quote-icon">❝</div>
                <p className="testimonial-text">
                  And was referred to Mr. Haresh Vaja at White Oceans
                  Properties. From the start, Mr. Vaja and his team were very
                  helpful, showing me options in South Bopal and Shela. Within
                  15 days, I found the perfect home. The White Oceans Properties
                  team provided excellent support and seamless coordination
                  throughout. Their dedication was exceptional. I highly
                  recommend them for anyone looking to buy property. Thanks to
                  Mr. Vaja and the team, I’m now settled in my dream home with
                  my family.
                </p>

                <hr className="border-2 rounded-2" />

                <div className="d-flex align-items-center gap-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="user"
                    className="profile-img"
                  />
                  <div>
                    <h6 className="mb-0">Mukesh </h6>
                    <small className="text-muted">Home Owner, Ahmedabad</small>
                  </div>
                  <div className="ms-auto d-flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="star filled">
                        ★
                      </span>
                    ))}
                    <span className="star">★</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Testimonial;
