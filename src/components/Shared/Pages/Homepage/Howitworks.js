import React from "react";
import step from "../../../../assets/howitworks.png";
import "../../styles/Homepage/howitworks.css";

function Howitworks() {
  return (
    <>
      <div className="howitworks">
        <h1>How Fia & Kate Works</h1>
        <div className="steps-img-container">
          <div className="step">
            <img src={step} alt="step-img"></img>
            <div>
              <h4>Subscribe to Fia & Kate</h4>
              <p>Choose our quarterly plan to get started!</p>
            </div>
          </div>
          <div className="step">
            <img src={step} alt="step-img"></img>
            <div>
              <h4>Recieve the Fia & Kate box</h4>
              <p>
                Every box is packed with a unique range of handcrafted jewellery
              </p>
            </div>
          </div>
          <div className="step">
            <img src={step} alt="step-img"></img>
            <div>
              <h4>Enjoy Irelands finest celtic jewllery</h4>
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
