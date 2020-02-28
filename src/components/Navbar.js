import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div id="navbar">
        <ul>
          <li id="nav-logo">
            <a className="btn btn-outline-light border-0" href="#top">
              Ekko
            </a>
          </li>
          <li className="nav-i">
            <a className="btn btn-outline-light border-0" href="#runes">
              Runes
            </a>
          </li>
          <li className="nav-i">
            <a className="btn btn-outline-light border-0" href="#abilities">
              Abilities
            </a>
          </li>
          <li className="nav-i">
            <a className="btn btn-outline-light border-0" href="#videos">
              Videos
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
