// components/NumberCounter.jsx
import React, { useState, useEffect } from "react";
import Odometer from "react-odometerjs";

const NumberCounter = ({ target, duration = 3000 }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(target);
    }, 1000);

    return () => clearTimeout(timer);
  }, [target]);

  return (
    <div className="odometer-wrapper">
      <Odometer value={value} duration={duration} format="d" />
    </div>
  );
};

export default NumberCounter;
