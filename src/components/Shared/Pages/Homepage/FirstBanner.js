import React from "react";
import logo from "../../../../assets/fia-kate-logo.png";
import myblogo from "../../../../assets/myirelandbox.png";
import mainbanner from "../../../../assets/mainbanner.png";
import "../../styles/Homepage/firstbanner.css";

function FirstBanner() {
  return (
    <div className="firstSection">
      <div className="leftside">
        <div className="logotext">
          <p>
            <span>Fia+Kate</span> is Comming Soon
          </p>
        </div>
        <div>
          <h2 className="main-heading-pc">
            A Surprise Box of Handcrafted <br></br> Celtic Jewelery for You and{" "}
            <br></br> Your Loved Ones
          </h2>
          <h2 className="main-heading-mobile">
            A Surprise Box of Handcrafted Celtic Jewelery for You and Your Loved
            Ones
          </h2>
        </div>

        <div className="Subscribe">
          <p> Be the first to know when fia+kate launches</p>
          <div className="subscribeinput">
            <input type="email" placeholder="Enter E-mail address"></input>
            <button className="subscribeBtn">Subscribe</button>
          </div>
        </div>
        <div className="makers">
          <p>
            From the makers of <img src={myblogo}></img>
          </p>
        </div>
      </div>
      <div className="rightside">
        <div>
          <img src={mainbanner}></img>
        </div>
      </div>
    </div>
  );
}

export default FirstBanner;
