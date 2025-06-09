import React from "react";
import { GetImageUrl } from "../../utils/GetImageURL";

const DreamProperty = () => {
  return (
    <section className="split-section py-5">
      <div className="container">
        <div className="row d-flex justify-content-between align-items-start">
          {/* Left Container */}
          <div className="col-md-6 left-container">
            <h2 className="section-title">
              Future homeowners, your dream starts here
            </h2>
            <p className="section-description">
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
            </p>
            <div className="d-flex gap-5">
              <div>
                <h4 className="fs-5 fw-bold">10+ years</h4>
                <p>of experience </p>
              </div>
              <div>
                <h4 className="fs-5 fw-bold">50+</h4>
                <p>projects delivered </p>
              </div>
              <div>
                <h4 className="fs-5 fw-bold">24/7</h4>
                <p>Online & Offline Assistance </p>
              </div>
            </div>
          </div>

          {/* Right Container */}
          <div className="col-md-5 right-container position-relative dream-right">
            <img
              src={GetImageUrl("images/h1.jpg")}
              alt="Property"
              className="img-fluid  mb-3 dream-right-img"
            />
            <div>
              <h3 className="image-description">
                Every home tells a different story
              </h3>
              <img
                src={GetImageUrl("images/arrow1.png")}
                alt="img"
                // className="dealer1-arrow1"
              />
            </div>
            {/* <div className="arrow-icon">
              <img
                src="{GetImageUrl("images/arrow1.png"
                alt="img"
                // className="dealer1-arrow1"
              /> 
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamProperty;
