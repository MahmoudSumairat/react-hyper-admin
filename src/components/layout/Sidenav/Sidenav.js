import React from "react";
import NavList from "./NavList/NavList";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav__branding"></div>
      <nav className="sidenav__nav">
        <ul className="sidenav__nav-list">
          <NavList />
        </ul>
      </nav>
    </div>
  );
};

export default Sidenav;
