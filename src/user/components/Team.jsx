import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";

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
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section">
        <h6 className="dealer-choose">
          {" "}
          <span>
            <TfiLayoutLineSolid />
          </span>{" "}
          Our team
        </h6>
        <div className="dealer">
          <div className="dealer1  col-12 px-0">
            <h2 className="col-6 px-0">
              Meet the Experts Behind Your Next Move
            </h2>
            <Link to="#" className="explore-btn  px-5">
              Book a call
            </Link>
          </div>
        </div>

        <div className="container" id="team-member">
          <Slider {...settings}>
            {TeamData.map((item, i) => (
              <div key={i} className="card slick-card" style="width: 18rem;">
                <img src={item.image} className="card-img-top" alt="Interior" />
                <div className="team-detail rounded-4 text-light py-2">
                  <h4 className="fs-4 fw-bold mb-0">{item.name}</h4>
                  <p className="py-0 mb-0">{item.post}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Team;
