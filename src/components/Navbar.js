import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div id="navbar">
        <ul>
          <li id="nav-logo">Ekko</li>
          <li className="nav-i"> Runes</li>
          <li className="nav-i">Abilities</li>
          <li className="nav-i">Items</li>
          <li className="nav-i">Showcase</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
