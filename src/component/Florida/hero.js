import React from "react";
import heroHomeBg from "../../assets/static/images/title/Florida-HeroImg@2x.png";
import ChevronIcon from "./../../assets/static/images/title/iconChevron.svg";
import "../../scss/florida/hero.scss";

const FloridaHero = () => {
  return (
    <React.Fragment>
      <div className="florida-hero-wrapper">
        <img
          className="florida-brand-image"
          src={heroHomeBg}
          style={{ shapeOutside: `url(${heroHomeBg})` }}
        />
        <p className="florida-hero-title-a">What You Need to Know</p>
        <h1 className="florida-hero-title-b">
          Buying Title Insurance in Florida
        </h1>
        <p className="florida-hero-title-c">
          Whether you’re a new-in-town buyer looking for a condominium or seller
          looking for a change of scenery, there a few things you need to know
          about how Title Insurance works in Florida.
        </p>

        <div className="florida-chevron-icon">
          <img src={ChevronIcon} alt="Scroll Further Icon" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FloridaHero;
