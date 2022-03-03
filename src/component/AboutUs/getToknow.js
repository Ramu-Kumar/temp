import React from 'react';

import "./../../scss/about_us/getToknow.scss";

import sectionDImage from "./../../assets/static/images/title/aboutUsSectionD.png";

const GetToknow = () => {

    return (

        <div className="section-d-know-radian-container">
            <div className="child-a">
                <div className="ca-heading-a">
                    We’re visionary
                </div>
                <div className="ca-heading-b">
                    Get to know Radian
                </div>
                <div className="ca-content-a">
                    Radian is helping to ensure the American dream of homeownership
                    in even bigger and better ways with industry-leading mortgage
                    insurance and a comprehensive suite of mortgage, risk, real
                    estate and title services.
                </div>
                <div className="ca-btn-a-container">
                    <a href="#" className="ca-btn-a">
                        See Our Vision for the Future
                    </a>
                </div>
            </div>
            <div className="child-b">
                <div className="cb-img-a-container">
                    <img src={sectionDImage} className="cb-img-a" />
                </div>
            </div>
        </div>


    );
}

export default GetToknow;