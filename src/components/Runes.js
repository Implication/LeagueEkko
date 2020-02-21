import React from "react";

const Runes = ({ title, img, desc }) => {
  return (
    <div
      className="card bg-dark text-white"
      style={{ paddingBottom: "30px", padding: "40px" }}>
      <div className="card-header text-center">
        <h1>{title}</h1>
      </div>
      <div className="card-img top text-center">
        <img src={img} alt="Rune screen shot" />
      </div>
      <p className="card-text text-justify" style={{ paddingTop: "20px" }}>
        {desc}
      </p>
    </div>
  );
};

export default Runes;
