import React from "react";
import "./Abilities.css";

const Abilities = ({ abilityName, title, video, desc }) => {
  console.log(video);
  return (
    <div
      className="card bg-dark text-white border-round abilitycard"
      style={{ paddingBottom: "40px", paddingTop: "40px", margin: "6.4rem" }}>
      <div className="card-header" style={{ fontSize: "80px" }}>
        {abilityName}
      </div>
      <div className="row card-body">
        <div className="col-lg-5">
          <video src={`${video}`} width="100%" height="100%" controls></video>
        </div>
        <div className="col-lg-7" style={{ padding: "2.0rem" }}>
          <div className="card-title">{title}</div>
          <div className="card-text">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
