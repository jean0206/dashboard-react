import React, { useState, useEffect } from "react";
import "./index.css";

const Loading = (props) => {
  const [actual, setActual] = useState(1);

  useEffect(() => {
    setInterval(() => {
      if (actual + 1 < 3) {
        setActual(actual + 1);
      } else {
        setActual(0);
      }
    }, 900);
  });

  return (
    <div className="loading-container">
      {props.message}
      <div className="load-items">
        <div
          className={actual === 0 ? "circle-load-actual" : "circle-load"}
        ></div>
        <div
          className={actual === 1 ? "circle-load-actual" : "circle-load"}
        ></div>
        <div
          className={actual === 2 ? "circle-load-actual" : "circle-load"}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
