import React from "react";
import PercentHand from "../../assets/static/images/title/Percent-Hand.svg";
import "../../scss/florida/butlerRebate.scss";

const ButlerRebate = () => {
  return (
    <React.Fragment>
      <section className="butler-rebate-wrapper">
        <div className="butler-rebate-right-container">
          <img className="butler-rebate-rc-img" src={PercentHand} />
          <h6 className="butler-rebate-rc-title">Butler Rebate</h6>
          <p className="butler-rebate-rc-desc">
            The Butler Rebate is a discount on a title insurance premium that
            title agents can offer their customers.
          </p>
        </div>
        <div className="butler-rebate-left-container">
          <p className="butler-rebate-lc-title-a">You can—and Should</p>
          <h3 className="butler-rebate-lc-title-b">
            Ask About the Butler Rebate
          </h3>
          <p className="butler-rebate-lc-desc">
            The state regulates how much of the premium payment goes to the
            title agent facilitating the settlement (they get 70%) and to the
            underwriter who retains the risk of the insurance policy and handles
            claims (they get 30%). The Butler Rebate can only be deducted from
            the title agent’s portion of the premium.
          </p>
          <p className="butler-rebate-lc-desc">
            While many local title agents might not offer you the Butler Rebate
            unless you request it ,{" "}
            <b>
              Radian Title includes the Butler Rebate in our quote right out of
              the gate.
            </b>
          </p>
          <p className="butler-rebate-lc-desc">
            In addition to the Butler Rebate discount, we’ll help you save on
            closing costs and other fees when you choose Radian. Our fee
            structure is <b>20%</b> lower than our average competitor in Florida
            and we offer one all-inclusive fee as opposed to multiple individual
            ones.
          </p>
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
        </div>

      </section>
    </React.Fragment>
  );
};

export default ButlerRebate;
