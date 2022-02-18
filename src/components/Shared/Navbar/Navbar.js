import React from "react";
import logo from "../../../assets/fia-kate-logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo"></img>
      </div>
    </>
  );
}
export default Navbar;
