import React from "react";
import jewimg1 from "../../../../assets/jewimg1.png";
import jewimg2 from "../../../../assets/jewimg2.png";
import jewimg3 from "../../../../assets/jewimg3.png";
import desktopslide1 from "../../../../assets/desktopslide1.png";
import desktopslide2 from "../../../../assets/desktopslide2.png";
import desktopslide3 from "../../../../assets/desktopslide3.png";

import "../../styles/Homepage/jewellery.css";
import LeftArrow from "../../../../assets/arrow-left.png";
import RightArrow from "../../../../assets/arrow-right.png";
import Slider from "react-slick";

function Jewellery() {
  const settings = {
    arrows: true,
    slidesToShow: 1,
    prevArrow: (
      <div id="slick-prev">
        <img src={LeftArrow} />
      </div>
    ),
    nextArrow: (
      <div id="slick-next">
        <img src={RightArrow} />
      </div>
    ),
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    autoplay: false,
    dots: true,
  };
  return (
    <>
      <div className="jew-section">
        <h1>
          A unique range of <br></br> handcrafted jewellery
        </h1>
        <div className="jew-mobile-slider">
          <Slider {...settings}>
            <img src={jewimg1} />
            <img src={jewimg2} />
            <img src={jewimg3} />
          </Slider>
        </div>
        <div className="upperimages"></div>
        <div className="jewellery">
          <div className="single-jewellery">
            <img src={desktopslide1}></img>
          </div>
          <div className="single-jewellery">
            <img src={desktopslide2}></img>
          </div>
          <div className="single-jewellery">
            <img src={desktopslide3}></img>
          </div>
        </div>
      </div>
    </>
  );
}
export default Jewellery;
