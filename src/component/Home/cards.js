import React from "react";
import Cards from "../Common/titleCard";
import "../../scss/home/card.scss";

const HeroCards = ({ CardData }) => {
  return (
    <section className="card-wrapper">
      <div className="card-wrapper-title">
        <p>The Basics</p>
        <h3>What to Know About Title Insurance</h3>
      </div>
      <div className="home-card-container">
        <div className="home-card-module">
          {CardData.map((data, key) => {
            return <Cards key={key} field={data} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroCards;
