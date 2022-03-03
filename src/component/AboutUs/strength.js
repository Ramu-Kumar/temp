import React from 'react';

import "./../../scss/about_us/strength.scss";

import sectionCImage from "./../../assets/static/images/title/aboutUsSectionC.svg";
import radianLogo from '../../assets/static/images/radian-logo.svg';

const Strength = () => {

    return (

        <div className="section-c-mission-container">

            <div className="sc-child-a">
                <div className="scca-heading-a">
                    You can trust
                </div>
                <div className="scca-heading-b">
                    Our Financial Strength
                </div>
                <div className="scca-info-container">
                    <div className="sccaic-content">
                        titlegenius, a subsidiary of Radian Group Inc., is licensed and regulated by the
                        Ohio Department of Insurance.
                    </div>
                    <div className="sccaic-content">
                        We have been issuing title insurance policies since 1978 (previously under the
                        names Guardian National Title Insurance Company, and later Entitle Insurance Inc.)
                        titlegenius is rated, “A Exceptional” by Demotech Inc., one of the leading
                        independent title insurance rating agencies.
                    </div>
                    <div className="sccaic-content">
                        Each title insurance policy issued by titlegenius is reinsured for up to $4 million excess
                        of loss of $1 million through a global reinsurer with an A.M. Best Financial Strength Rating
                        of “A Excellent.”
                    </div>
                    <div className="sccaic-content">
                        We are proud to be a member of the American Land Title Association (ALTA) and we adhere to
                        ALTA Best Practices.
                    </div>
                </div>
            </div>
            <div className="sc-child-b">
                <div className="sccb-image-container">
                    <img src={sectionCImage} className="sccb-image-a" />
                </div>
                <div className="sccb-info-container">
                    <div className="sccb-info">
                        Turning today’s challenges into tomorrow’s opportunities
                        </div>
                    <div className="sccb-logo-container">
                        <img src={radianLogo} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Strength;