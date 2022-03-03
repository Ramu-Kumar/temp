import React from "react";
import HeroHomeBrand from "../../assets/static/images/title/Homepage-HeroImg@2x.png";
import ChevronIcon from "./../../assets/static/images/title/iconChevron.svg";
import "../../scss/home/hero.scss";

const HeroHomePage = ({id}) => {
  return (
    <React.Fragment>
      <div className="home-hero-wrapper" id="title-home-hero">
        <img
          className="home-hero-brand-img"
          src={HeroHomeBrand}
          style={{ shapeOutside: `url(${HeroHomeBrand})` }}
        />
        <h1 className="home-hero-title">A Genius Way to Buy Title Insurance</h1>
        <p className="home-hero-desc">
          See how much you can save with titlegenius
        </p>
        <a
          href="/getQuote"
          className="home-hero-btn"
          aria-label="Get Quote button"
        >
          Check Our Prices
        </a>

        <div className="home-hero-chevron-icon">
          <img src={ChevronIcon} alt="Scroll Further Icon" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroHomePage;
