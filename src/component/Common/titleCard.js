import React from "react";
import "../../scss/common/titleCard.scss";

const TitleCards = ({ field }) => {
  const { ImgUrl, Description, Button } = field;

  return (
    <div className="title-card">
    
      <div className="title-card-img">
        <img src={ImgUrl} alt="Insurance Card" />
      </div>
     <div className="title-card-footer">
        <div className="title-card-desc">{Description}</div>
        <a
          href={`/${Button}`}
          className="btn-title btn-title-prime title-card-btn"
        >
          {Button}
        </a>
      </div>
    </div>
  );
};

export default TitleCards;
