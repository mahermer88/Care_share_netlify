import React from "react";
import HomeIntroInfo from "./Home_Intro_Info";
import HomeIntroSlider from "./Home_Intro_Slider";
import HomePromo from "./Home_Promo";
import HomeSlider from "./Home_Slider";
import "./home-intro.css";

const HomeIntro = () => {
  return (
    <>
      <div className="intro">
        <HomeIntroInfo />
        <HomeIntroSlider />
      </div>
      <div>
        <HomeSlider />
        <div className="between"></div>
        <HomePromo />
      </div>
    </>
  );
};

export default HomeIntro;
