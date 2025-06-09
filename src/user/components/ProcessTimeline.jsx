import React from "react";
const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    desc: "Understand client requirements, preferences, and budget",
    position: "bottom",
    color: "light",
  },
  {
    number: "02",
    title: "Property Search",
    desc: "Curate a list of suitable properties matching client criteria",
    position: "top",
    color: "dark",
  },
  {
    number: "03",
    title: "Property Visits",
    desc: "Arrange and accompany clients for property viewings",
    position: "bottom",
    color: "light",
  },
  {
    number: "04",
    title: "Negotiation",
    desc: "Skillfully negotiate terms and price on behalf of the client",
    position: "top",
    color: "dark",
  },
  {
    number: "05",
    title: "Documentation",
    desc: "Assist in preparing and reviewing legal documents for the transaction",
    position: "bottom",
    color: "light",
  },
  {
    number: "06",
    title: "Closing",
    desc: "Facilitate the smooth transfer of ownership, ensuring all legal and financial formalities are completed.",
    position: "top",
    color: "dark",
  },
  {
    number: "07",
    title: "Post-sale Support",
    desc: "Provide assistance with post-sale activities like property management or rental services",
    position: "bottom",
    color: "light",
  },
];

const ProcessTimeline = () => {
  return (
    <div className="container pb-5">
      <div className="timeline-wrapper">
        <div className="timeline-bar">
          <div className="segment segment-1"></div>
          <div className="segment segment-2"></div>
          <div className="segment segment-3"></div>
          <div className="segment segment-4"></div>
          <div className="segment segment-5"></div>
          <div className="segment segment-6"></div>
          <div className="segment segment-7"></div>
        </div>

        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`step ${step.position}-step`}
            style={{
              left: `calc(${(100 / steps.length) * index}% + ${
                100 / steps.length / 2
              }%)`,
            }}
          >
            {step.position === "top" && (
              <>
                <div className={`circle ${step.color}`}>{step.number}</div>
                <div className="line-connector"></div>
                <div className="triangle-down"></div>
                <div className="step-content">
                  <h6>{step.title}</h6>
                  <p>{step.desc}</p>
                </div>
              </>
            )}

            {step.position === "bottom" && (
              <>
                <div className="step-content">
                  <h6>{step.title}</h6>
                  <p>{step.desc}</p>
                </div>
                <div className="line-connector"></div>
                <div className="triangle-up"></div>
                <div className={`circle ${step.color}`}>{step.number}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
