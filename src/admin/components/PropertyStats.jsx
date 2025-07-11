import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  {
    title: "APARTMENT",
    value: 26,
    color: "#28a745", // Green
    average: "29%",
    trend: "up",
  },
  {
    title: "OFFICE",
    value: 26,
    color: "#7b61ff", // Purple
    average: "45%",
    trend: "down",
  },
  {
    title: "SHOP",
    value: 76,
    color: "#f4b942", // Yellow/Orange
    average: "75%",
    trend: "up",
  },
  {
    title: "VILLA",
    value: 88,
    color: "#00aaff", // Blue
    average: "12%",
    trend: "up",
  },
];

const TrendIcon = ({ direction }) => (
  <span>{direction === "up" ? "📈" : "📉"}</span>
);

const PropertyStats = () => {
  return (
    <div className="row g-4 mb-4 mt-4 ">
      {data.map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-3">
          <div className="card text-center p-3 shadow-sm border-1 ">
            <div className="mx-auto" style={{ width: 80, height: 80 }}>
              <CircularProgressbar
                value={item.value}
                text={`${item.value}`}
                styles={buildStyles({
                  textColor: item.color,
                  pathColor: item.color,
                  trailColor: "#eee",
                  textSize: "22px",
                })}
              />
            </div>
            <h5 className="mt-3 text-danger fw-bold text-center">
              {item.title}
            </h5>
            <p className="text-danger mb-0 text-center">
              {item.average} Average <TrendIcon direction={item.trend} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyStats;
