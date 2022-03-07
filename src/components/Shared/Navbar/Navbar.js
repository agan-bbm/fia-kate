import React from "react";
import logo from "../../../assets/fia-kate-logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" style={"cursor:pointer"}>
          <img src={logo} alt="logo"></img>
        </Link>
        <h2>aa</h2>
      </div>
    </>
  );
}
export default Navbar;
