import React from "react";

const Showcase = ({ img }) => {
  return <div id="showcase" style={{ backgroundImage: `url(${img}` }}></div>;
};

export default Showcase;
