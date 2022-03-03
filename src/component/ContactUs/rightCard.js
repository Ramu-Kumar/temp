import React, { useState } from 'react';

import "./../../scss/contact_us/rightCard.scss";
import emailIcon from "./../../assets/static/icons/title/Email.svg";

const RightCard = () => {

    const [emailID] = useState('RTIClaims@radian.com');

    return (
        <div className="child-b">
            <address className="cb-address">

                <div className="cba-title">
                    Send a claim
                </div>
                <div className="cba-info">
                    Radian Title Insurance<br />
                    Attn: Claims Department6100<br />
                    Oak Tree Blvd<br />
                    Suite 200<br />
                    Independence,<br />
                    OH 44131
                </div>

            </address>
            <div className="cb-heading-b">
                Email
            </div>
            <div className="cb-email-container">
                <div className="cb-email-icon-container">
                    <img src={emailIcon} className="cb-email-icon" />
                </div>
                <div className="cb-email-info">
                    <a className="cb-email-id" href={`mailto:${emailID}`}>
                        {
                            emailID
                        }
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RightCard;