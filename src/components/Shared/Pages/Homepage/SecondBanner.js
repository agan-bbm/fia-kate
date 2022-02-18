import React from "react";

import "../../styles/Homepage/secondbanner.css";
import mobilejewelery from "../../../../assets/jewelery-mobile.png";

function SecondBanner() {
  return (
    <>
      <div className="secondSection">
        <div>
          <div className="celticJewelery">
            <div className="content">
              <p className="Sterling">Sterling silver & Gold Plated</p>
              <h2>Celtic Jewlery</h2>
              <p className="secondbannertext">
                On a quarterly basis, every customer will receive a box of
                celtic jewelry worth over $100, created by local artisans in
                Ireland. Whether you buy it for yourself or gift it to someone
                you love, every box will be catered to your desires!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="celticJewelryMobile">
        <div className="contentmobile">
          <img src={mobilejewelery} alt="mobilejwl"></img>
          <p className="Sterlingmobile">Sterling silver & Gold Plated</p>
          <h2>Celtic Jewlery</h2>
          <p className="secondbannertextmobile">
            On a quarterly basis, every customer will receive a box of celtic
            jewelry worth over $100, created by local artisans in Ireland.
            Whether you buy it for yourself or gift it to someone you love,
            every box will be catered to your desires!
          </p>
        </div>
      </div>
    </>
  );
}

export default SecondBanner;
