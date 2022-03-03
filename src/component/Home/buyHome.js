import React from 'react';
import "../../scss/home/buyHome.scss";
import FloridaMap from "../../assets/static/images/home/florida.svg";

const BuyHome = () => {

    return (
        <div className="home-page-section-c-container">
            <div className="buy-home-container">

                <div className="child-a">
                    <img src={FloridaMap} className="child-a-img" />
                </div>

                <div className="child-b-container">

                    <div className="cb-child-a-container">
                        <div className="cbca-child-a">
                            <h4 className="cbca-child-a-heading-h4">
                                Looking to buy a home in Florida?
                            </h4>
                            <h6 className="cbca-child-a-heading-h6">
                                Looking to buy a home in Florida?
                            </h6>
                        </div>

                        <div className="cbca-child-b-info">
                            Florida’s Title laws may be different from where
                            you live now, we can help you understand what this means.
                        </div>
                    </div>

                    <div className="cb-child-b-container">

                        <div className="cbcb-child-a">
                            <a href='/'>Learn more</a>
                        </div>
                        <div className="cbcb-child-b">
                            <a href='/'>View other states</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default BuyHome;