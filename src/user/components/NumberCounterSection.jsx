import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import NumberCounter from "./NumberCounter";
import { GetImageUrl } from "../../utils/GetImageURL";

const NumberDataSection = () => {
  return (
    <section className="number-data-section">
      <div className="number-data">
        <h2>
          <NumberCounter target={2000} />+
        </h2>
        <p className="fs-5">Happy Customers</p>
      </div>
      <div className="number-data">
        <h2>
          <NumberCounter target={250} />+
        </h2>
        <p className="fs-5">New Projects</p>
      </div>
      <div className="number-data">
        <h2>
          <NumberCounter target={100} />+
        </h2>
        <p className="fs-5">Unit sold</p>
      </div>
      <div className="number-data">
        <Link className="number-data-arrow">
          <FaArrowRightLong />
        </Link>
      </div>
      <div className="number-data">
        <img
          src={GetImageUrl("/images/a1.png")}
          alt=""
          height="50"
          width="400"
        />
      </div>
    </section>
  );
};

export default NumberDataSection;
