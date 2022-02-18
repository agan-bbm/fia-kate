import React from "react";
import logo from "../../assets/fia-kate-logo.png";
import "./styles/navbar.css";
function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="allLinks"></div>
      </div>
    </div>
  );
}

export default Navbar;
