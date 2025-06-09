import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLocation } from "react-icons/gr";
import { MdCurrencyRupee } from "react-icons/md";
import { GetImageUrl } from "../../utils/GetImageURL";
const Property = [
  {
    id: "1",
    location: "South Bopal Ahmedabad",
    price: "1cr",
    img: "/images/Mask1.png",
  },
  {
    id: "2",
    location: "South Bopal Ahmedabad",
    price: "1cr",
    img: "/images/Mask2.png",
  },
  {
    id: "3",
    location: "South Bopal Ahmedabad",
    price: "1cr",
    img: "/images/Mask3.png",
  },
  {
    id: "4",
    location: "South Bopal Ahmedabad",
    price: "1cr",
    img: "/images/Mask4.png",
  },
  {
    id: "5",
    location: "South Bopal Ahmedabad",
    price: "1cr",
    img: "/images/Mask3.png",
  },
  {
    id: "6",
    location: "South Bopal Ahmedabad",
    price: "1cr",
    img: "/images/Mask2.png",
  },
  {
    id: "7",
    location: "South Bopal Ahmedabad",
    price: "1cr",
    img: "/images/Mask1.png",
  },
  {
    id: "8",
    location: "South Bopal Ahmedabad",
    price: "1cr",
    img: "/images/Mask4.png",
  },
  {
    id: "9",
    location: "South Bopal Ahmedabad",
    price: "1cr",
    img: "/images/Mask3.png",
  },
  {
    id: "10",
    location: "South Bopal Ahmedabad",
    price: "1cr",
    img: "/images/Mask2.png",
  },
];
const FamousProperty = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
          slidesToScroll: 2,
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
      <div className="container">
        <Slider {...settings}>
          {Property.map((item, i) => (
            <div key={i} className="card slick-card">
              <img
                src={GetImageUrl(item.img)}
                className="card-img-top"
                alt="Interior"
              />
              <div className="card-body ">
                <p className="card-text d-flex gap-3 mb-1">
                  <span>
                    <GrLocation />
                  </span>
                  <span>{item.location}</span>
                </p>
                <h5 className="card-title d-flex gap-3 mb-4 fs-5 fw-bold">
                  <span>
                    <MdCurrencyRupee />
                  </span>
                  <span>{item.price}</span>
                </h5>
                <Link to="#" className="view-deatil-btn ">
                  view details
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FamousProperty;
