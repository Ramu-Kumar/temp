import React from "react";
import PercentHand from "../../assets/static/images/title/Florida-ComponentImg@2x.png";
import "../../scss/florida/promulgate.scss";

const Promulgate = () => {
  return (
    <React.Fragment>
      <section className="promulagate-wrapper">
        <div className="promulagate-container">

        <div className="promulagate-cont-child-a">
          <p className="promulagate-lc-title-a">States-rules</p>
          <h3 className="promulagate-lc-title-b">
            What are promulgated rates?
          </h3>
          <p className="promulagate-lc-desc">
            The price of your title insurance depends on the sale price of your
            house or condo. In Florida, state regulations dictate the minimum
            amount a title company must charge for insurance and searches. This
            minimum rate is called a <b>“promulgated rate.”</b>
          </p>
          <p className="promulagate-lc-desc">
            Many title insurance providers will charge you more than the
            promulgated rate for your premium. Titlegenius won’t do that , and
            we’ll help you save wherever we can — with the Butler Rebate,
            cheaper closing costs and more all rolled up into your one-time,
            easy-to-understand premium rate.
          </p>
        </div>
        <div className="promulagate-cont-child-b">
          <div className="promulagate-cont-child-c">
            <h6 className="promulagate-rc-title">
              Learn more about what we can offer and get a quote for your
              Florida property today.
            </h6>
            <a
              href="/getQuote"
              aria-label="Get a Quote"
              className="promulagate-rc-btn"
            >
              Get a Quote
            </a>
          </div>
          <img
            className="promulagate-rc-img"
            src={PercentHand}
          />
        </div>
        </div>
        <div className="florida-page-end-space"></div>
      </section>
     
    </React.Fragment>
  );
};

export default Promulgate;
