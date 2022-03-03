import React, { useState } from 'react';

import "./../../scss/contact_us/leftCard.scss";
import pohoneIcon from "./../../assets/static/icons/title/Phone.svg";

const LeftCard = () => {

    const [mobileNumberA] = useState('877 936 8485');

    const [mobileNumberB] = useState('800 362 2305');

    return (

        <div className="child-a">
            <div className="ca-heading-a">
                Contact a Title Insurance Specialist
            </div>
            <div className="ca-phone-container-a">
                <div className="capca-icon-container">
                    <img src={pohoneIcon} className="capca-icon" />
                </div>
                <div className="capca-number">
                    <a className="capca-number-link" href={`tel:${mobileNumberA}`}>
                        {
                            mobileNumberA
                        }
                    </a>
                </div>
            </div>
            <div className="ca-heading-b">
                Contact Radian Title Home Office
            </div>
            <div className="ca-phone-container-b">
                <div className="capcb-icon-container">
                    <img src={pohoneIcon} className="capcb-icon" />
                </div>
                <div className="capcb-number">
                    <a className="capcb-number-link" href={`tel:${mobileNumberB}`}>
                        {
                            mobileNumberB
                        }
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LeftCard;