import React from "react";

const Abilities = ({ abilityName, title, video, desc }) => {
  console.log(video);
  return (
    <div
      className="card bg-dark text-white border-round"
      style={{ paddingBottom: "40px", paddingTop: "40px" }}>
      <div
        className="card-header text-center"
        style={{ background: "rgb(196, 126, 40)" }}>
        {abilityName}
      </div>
      <div className="row card-body">
        <div className="col-5">
          <video src={`${video}`} width="100%" height="100%" controls></video>
        </div>
        <div className="col-7">
          <div className="card-title">{title}</div>
          <div className="card-text">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Abilities;
