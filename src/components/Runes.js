import React from "react";
import "./Runes.css";

const Runes = ({ title, img, desc }) => {
  return (
    <div
      className="card bg-dark text-white runecard"
      style={{ paddingBottom: "30px", padding: "40px", margin: "6.4rem" }}>
      <div className="card-header text-center">
        <h1>{title}</h1>
      </div>
      <div className="card-img top" style={{ margin: "0 auto", width: "75%" }}>
        <img src={img} alt="Rune screen shot" />
      </div>
      <p className="card-text text-justify" style={{ paddingTop: "20px" }}>
        {desc}
      </p>
    </div>
  );
};

export default Runes;
