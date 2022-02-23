import React from "react";
import stepone from "../../../../assets/stepone.svg";
import "../../styles/Homepage/howitworks.css";
import steptwo from "../../../../assets/steptwo.svg";
import stepthree from "../../../../assets/stepthree.svg";

function Howitworks() {
  return (
    <>
      <div className="howitworks">
        <h1>How Fia & Kate Works</h1>
        <div className="steps-img-container">
          <div className="step">
            <img src={stepone} alt="step-img"></img>
            <div>
              <h4>Subscribe to Fia & Kate</h4>
              <p>Choose our quarterly plan to get started!</p>
            </div>
          </div>
          <div className="step">
            <img src={steptwo} alt="step-img"></img>
            <div>
              <h4>Recieve the box</h4>
              <p>
                Every box is packed with a unique range of handcrafted jewellery
              </p>
            </div>
          </div>
          <div className="step">
            <img src={stepthree} alt="step-img"></img>
            <div>
              <h4>Enjoy Irelands finest celtic jewellery</h4>
              <p>
                {" "}
                Embraces the essence of Ireland with every piece of jewllery
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Howitworks;
