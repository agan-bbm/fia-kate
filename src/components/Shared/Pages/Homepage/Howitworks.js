import React from "react";
import pink from "../../../../assets/pink.png";
import "../../styles/Homepage/howitworks.css";
import blue from "../../../../assets/blue.png";
import green from "../../../../assets/green.png";

function Howitworks() {
  return (
    <>
      <div className="howitworks">
        <div className="containerWrapper">
          <h1>How Fia & Kate Works</h1>
          <div className="steps-img-container">
            <div className="step">
              <img src={pink} alt="step-img"></img>
              <div>
                <h4>Subscribe to Fia & Kate</h4>
                <p>Choose our quarterly plan to get started!</p>
              </div>
            </div>
            <div className="step">
              <img src={blue} alt="step-img"></img>
              <div>
                <h4>Recieve the box</h4>
                <p>
                  Every box is packed with a unique range of handcrafted jewelry
                </p>
              </div>
            </div>
            <div className="step">
              <img src={green} alt="step-img"></img>
              <div>
                <h4>Enjoy Irelands finest Celtic jewelry</h4>
                <p>
                  {" "}
                  Embraces the essence of Ireland with every piece of jewelry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Howitworks;
