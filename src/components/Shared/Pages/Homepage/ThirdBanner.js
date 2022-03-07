import React from "react";

import madeinclassic from "../../../../assets/madeinclassic.png";
// import mobilejewelery from "../../../../assets/mobileimgshort.png";
import "../../styles/Homepage/thirdbanner.css";

function ThirdBanner() {
  return (
    <div className="thirdSection">
      <div className="containerWrapper">
        <div className="thirdcontainer">
          <div className="thirdleft">
            <p className="madein">Made in Ireland</p>
            <h2>Crafted by Irelands Finest Artisan Jewellers</h2>
            <p className="thirdtext">
              Hand crafted jewelry that embraces the essence of Ireland Irelands
              artisan jewellers have worked with us to dream up and create
              unique pieces that embody Celtic symbols, Irish culture, heritage
              & tradition.
            </p>
          </div>
          <div className="thirdright">
            <img className="desktopimagenormal" src={madeinclassic}></img>
            <img className="mobileimageshort" src={madeinclassic}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdBanner;
