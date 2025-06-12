// // Testimonial.jsx
// import React from "react";
// import { FaAngleRight } from "react-icons/fa6";
// import { FaChevronLeft } from "react-icons/fa6";
// import { Container, Row, Col, Button } from "react-bootstrap";
// // import "./Testimonial.css";

// const Testimonial = () => {
//   return (
//     <section className="section testomonial-section">
//       <div className="testimonial-wrapper ">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={5}>
//               <div className="left-content">
//                 <h2 className="section-title">
//                   See Why Customers Love <br /> White ocean properties
//                 </h2>
//                 <p className="section-desc">
//                   At White ocean properties, we believe in building lasting
//                   relationships by providing exceptional service and delivering
//                   dream homes. But don’t just take our word for it—hear directly
//                   from our satisfied homeowners who have experienced our
//                   dedication and expertise firsthand. Their stories reflect the
//                   heart of what we do: turning your vision into reality.
//                 </p>

//                 <div className="nav-buttons d-flex gap-2">
//                   <span className="flat-arr1 testimonial-arr">
//                     <FaChevronLeft />
//                   </span>
//                   <span className="flat-arr1 testimonial-arr">
//                     <FaAngleRight />
//                   </span>
//                 </div>
//               </div>
//             </Col>

//             <Col md={7}>
//               <div className="testimonial-card">
//                 <div className="quote-icon">❝</div>
//                 <p className="testimonial-text">
//                   And was referred to Mr. Haresh Vaja at White Oceans
//                   Properties. From the start, Mr. Vaja and his team were very
//                   helpful, showing me options in South Bopal and Shela. Within
//                   15 days, I found the perfect home. The White Oceans Properties
//                   team provided excellent support and seamless coordination
//                   throughout. Their dedication was exceptional. I highly
//                   recommend them for anyone looking to buy property. Thanks to
//                   Mr. Vaja and the team, I’m now settled in my dream home with
//                   my family.
//                 </p>

//                 <hr className="border-2 rounded-2" />

//                 <div className="d-flex align-items-center gap-3">
//                   <img
//                     src="https://randomuser.me/api/portraits/men/75.jpg"
//                     alt="user"
//                     className="profile-img"
//                   />
//                   <div>
//                     <h6 className="mb-0">Mukesh </h6>
//                     <small className="text-muted">Home Owner, Ahmedabad</small>
//                   </div>
//                   <div className="ms-auto d-flex gap-1">
//                     {[...Array(4)].map((_, i) => (
//                       <span key={i} className="star filled">
//                         ★
//                       </span>
//                     ))}
//                     <span className="star">★</span>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

import React, { useState } from "react";
import { FaAngleRight, FaChevronLeft } from "react-icons/fa6";
import { Container, Row, Col } from "react-bootstrap";
import { GetImageUrl } from "../../utils/GetImageURL";

const testimonials = [
  {
    name: "Mukesh",
    location: "Home Owner, Ahmedabad",
    image: "images/user1.jpg",
    rating: 4,
    text: `I was referred to Mr. Haresh Vaja at White Ocean Properties. They showed me great options and within 15 days I found my perfect home. Their support and dedication were exceptional.
    Thanks to the team at White Ocean, I am now a proud home owner. They guided me throughout the process and made everything stress-free`,
  },
  {
    name: "Priya Sharma",
    location: "Investor, Mumbai",
    image: "images/user2.jpg",
    rating: 5,
    text: `White Ocean Properties helped me find an ideal investment property. Their advice and assistance were invaluable. The team is trustworthy and professional.
    Thanks to the team at White Ocean, I am now a proud home owner. They guided me throughout the process and made everything stress-free.
    I was referred to Mr. Haresh Vaja at White Ocean Properties. They showed me great options and within 15 days I found my perfect home. Their support and dedication were exceptional`,
  },
  {
    name: "Rahul Patel",
    location: "Home Buyer, Vadodara",
    image: "images/user3.jpg",
    rating: 4,
    text: `Thanks to the team at White Ocean, I am now a proud home owner. They guided me throughout the process and made everything stress-free.White Ocean Properties helped me find an ideal investment property. Their advice and assistance were invaluable. The team is trustworthy and professional.
    Thanks to the team at White Ocean, I am now a proud home owner. They guided me throughout the process and made everything stress-free`,
  },
  {
    name: "Anjali Desai",
    location: "NRI Buyer, USA",
    image: "images/user4.jpg",
    rating: 5,
    text: `
    Even from overseas, the White Ocean team made my property buying experience smooth and transparent. Highly recommended for NRIs!
    Being a first-time buyer, I had a lot of questions. But the White Ocean team was patient and knowledgeable. I'm glad I chose them
    Even from overseas, the White Ocean team made my property buying experience smooth and transparent. Highly recommended for NRIs
    
    `,
  },
  {
    name: "Karan Mehta",
    location: "First-Time Buyer, Surat",
    image: "images/user5.jpg",
    rating: 4,
    text: `Being a first-time buyer, I had a lot of questions. But the White Ocean team was patient and knowledgeable. I'm glad I chose them.Even from overseas, the White Ocean team made my property buying experience smooth and transparent. Highly recommended for NRIs
    Being a first-time buyer, I had a lot of questions. But the White Ocean team was patient and knowledgeable. I'm glad I chose
    `,
  },
];
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const total = testimonials.length;

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300); // Match transition duration
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 300);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="section testomonial-section">
      <div className="testimonial-wrapper">
        <Container>
          <Row className="align-items-center">
            <Col md={5}>
              <div className="left-content">
                <h2 className="section-title">
                  See Why Customers Love <br /> White Ocean Properties
                </h2>
                <p className="section-desc">
                  At White Ocean Properties, we believe in building lasting
                  relationships by providing exceptional service and delivering
                  dream homes. But don’t just take our word for it — hear
                  directly from our satisfied homeowners.
                </p>

                <div className="nav-buttons d-flex gap-2">
                  <span
                    className="flat-arr1 testimonial-arr"
                    onClick={handlePrev}
                  >
                    <FaChevronLeft />
                  </span>
                  <span
                    className="flat-arr1 testimonial-arr"
                    onClick={handleNext}
                  >
                    <FaAngleRight />
                  </span>
                </div>
              </div>
            </Col>

            <Col md={7}>
              <div className="testimonial-card-wrapper">
                <div
                  className={`testimonial-card ${
                    isTransitioning ? "fade-out" : "fade-in"
                  }`}
                >
                  <div className="quote-icon">❝</div>
                  <p className="testimonial-text">{testimonial.text}</p>

                  <hr className="border-2 rounded-2" />

                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={GetImageUrl(testimonial.image)}
                      alt={testimonial.name}
                      className="profile-img"
                    />
                    <div>
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <small className="text-muted">
                        {testimonial.location}
                      </small>
                    </div>
                    <div className="ms-auto d-flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`star ${
                            i < testimonial.rating ? "filled" : ""
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
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
