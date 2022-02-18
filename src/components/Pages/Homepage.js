import React from "react";
import Navbar from "../Shared/Navbar";

import FirstBanner from "../Shared/Pages/Homepage/FirstBanner";

import SecondBanner from "../Shared/Pages/Homepage/SecondBanner";
import ThirdBanner from "../Shared/Pages/Homepage/ThirdBanner";
import FourthBanner from "../Shared/Pages/Homepage/FourthSection";
import Footer from "../../components/Shared/Footer/Footer";
import Howitworks from "../Shared/Pages/Homepage/Howitworks";
import Jewellery from "../Shared/Pages/Homepage/jewellery";

function Homepage() {
  return (
    <div>
      <Navbar />
      <FirstBanner />
      <SecondBanner />
      <Howitworks />
      <ThirdBanner />
      <Jewellery />
      <FourthBanner />
      <Footer />
    </div>
  );
}

export default Homepage;
