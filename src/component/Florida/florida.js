import React from "react";
import FloridaHero from "./hero";
import WhereYouLive from "./whereYouLive";
import FloridaMap from "./floridaMap";
import ButlerRebate from "./butlerRebate";
import Promulgate from "./promulgate";

const Florida = () => {
  return (
    <React.Fragment>
      <section className="wrapper-title-body" id="title-start">
        <FloridaHero />
        <WhereYouLive />
        <FloridaMap />
        <ButlerRebate />
        {/* <Promulgate /> */}
      </section>
    </React.Fragment>
  );
};

export default Florida;
