import React from "react";
import jewimg1 from "../../../../assets/jewimg1.png";
import jewimg2 from "../../../../assets/jewimg2.png";
import jewimg3 from "../../../../assets/jewimg3.png";
import "../../styles/Homepage/jewellery.css";

function Jewellery() {
  return (
    <>
      <div className="jew-section">
        <h1>
          A unique range of <br></br> handcrafted jewellery
        </h1>
        <div className="jewellery">
          <div className="single-jewellery">
            <img src={jewimg1}></img>
          </div>
          <div className="single-jewellery">
            <img src={jewimg2}></img>
          </div>
          <div className="single-jewellery">
            <img src={jewimg3}></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Jewellery;
