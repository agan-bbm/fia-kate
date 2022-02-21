import React from "react";
import fourthimages from "../../../../assets/fourthimages.png";

import "../../styles/Homepage/fourthbanner.css";

function FourthBanner() {
  return (
    <div className="fourthSection">
      <div className="fourthcontainer">
        <h5>About us</h5>
        <h2>Katharine + Fia + Kate</h2>
        <div>
          <div className="fourthImgs">
            <div className="fourthimages">
              <img src={fourthimages}></img>
            </div>
          </div>
        </div>

        <div className="fourth-paragraph">
          <p>
            Dia dhuit ~ Hello ~from Dingle, a magical slice of Ireland that
            bestows on us a bounty of Irish history, culture, tradition, and
            hence inspiration to share all of it with you. I created Fia + Kate,
            named after my two daughters, to bring Ireland to you in the form of
            beautiful handcrafted Celtic jewelry, made in Ireland, by the most
            talented artisan jewelers. I wished for our members to receive a
            surprise, in order to add to the excitement, every three months. So
            the treasures within Fia+Kate are always a secret until you open it
          </p>
        </div>
      </div>
    </div>
  );
}

export default FourthBanner;
