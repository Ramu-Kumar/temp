import React from "react";
import { CountyCardData } from "./countyData";
import "../../scss/florida/whereYouLive.scss";

const CountyByCounty = () => {
  return (
    <React.Fragment>
      <div className="county-by-county-container">
        <p className="county-by-county-desc">County-by-County</p>
        <p className="county-by-county-title">
          Where You Live Dictates Who Pays for Title Insurance
        </p>

        <div className="county-card-container">
          {CountyCardData.map((cardData, index) => {
            return (
              <div className="county-card" key={index}>
                <h1
                  className="county-card-counter"
                  style={{ color: `${cardData.Color}` }}
                >
                  {cardData.Count}
                </h1>
                <div className="county-card-desc">
                  <h3 className="county-card-title">{cardData.Title}</h3>
                  <p>{cardData.Desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountyByCounty;
