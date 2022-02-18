import React from "react";
import "../../Shared/styles/Homepage/footer.css";
import footerlogo from "../../../assets/fia-kate-logo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footerlogo">
          <img src={footerlogo} alt="footer_logo"></img>
        </div>

        <h4>
          The worlds first subscription <br></br> box of celtic jewlery is
          coming!
        </h4>
        <div className="footer-subscribe">
          <p> Be the first to know when fia+kate launches</p>
          <div className="subscribeinput">
            <input type="email" placeholder="Enter E-mail address"></input>
            <button className="subscribeBtn">Subscribe</button>
          </div>
        </div>
        <p className="rightsreserved">
          © {new Date().getFullYear()} Fia and Kate. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
