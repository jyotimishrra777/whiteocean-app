import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
import { GetImageUrl } from "../../utils/GetImageURL";

const TeamData = [
  {
    id: "1",
    name: "Haresh Vaja",
    post: "Founder & CEO",
    image: "/images/haresh.png",
  },
  {
    id: "2",
    name: "Akshat",
    post: "Sr. Sales Executive",
    image: "/images/akshat.png",
  },
  {
    id: "3",
    name: "Chirag",
    post: "Sales Executive",
    image: "/images/chirag.png",
  },
  {
    id: "4",
    name: "Akash",
    post: "Sales Executive",
    image: "/images/akash.png",
  },
];

const Team = () => {
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      {/* <Slider {...settings}>
            {TeamData.map((item, i) => (
              <div key={i} className="card slick-card" style="width: 18rem;">
                <img
                  src={GetImageUrl(item.image)}
                  className="card-img-top"
                  alt="Interior"
                />
                <div className="team-detail rounded-4 text-light py-2">
                  <h4 className="fs-4 fw-bold mb-0">{item.name}</h4>
                  <p className="py-0 mb-0">{item.post}</p>
                </div>
              </div>
            ))}
          </Slider> */}

      <section className="section">
        <div className="row  ">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="col-5 p-0 right-container position-relative team-left">
              <img
                src={GetImageUrl("images/haresh.png")}
                alt="Property"
                className="img-fluid mt-0 dream-right-img"
              />
            </div>
            <div className="col-7 left-container">
              <h2 className="section-title">
                Future homeowners, your dream starts here
              </h2>
              <p className="section-description">
                <div className="team-quote-icon ">❝</div>
                White Oceans Property understands that for millennials, owning a
                home is more than a purchase—it's a lifelong dream. That’s why
                we offer luxurious yet homely properties in Ahmedabad-West,
                blending modern design with traditional charm.
                <br />
                Whether you're searching online or visiting in person, we’re
                here to guide you—from property selection to home loans and
                paperwork—making your journey smooth and joyful. A home is built
                on memories, milestones, and meaningful moments, and we’re proud
                to help create that foundation. With over 10 years of
                experience, we’ve helped countless families find their “Sapno Ka
                Ghar,” and we’re just getting started.
                <div className="team-quote-icon float-right mt-4">❞</div>
                <h5 className="fs-4 fw-bold mt-4 mb-1 founder-name">
                  Haresh Vaja
                </h5>
                <p color="founder-text">Founder & CEO</p>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
