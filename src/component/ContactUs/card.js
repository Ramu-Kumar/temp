import React from 'react';
import "./../../scss/contact_us/card.scss";

import LeftCard from './leftCard';
import RightCard from './rightCard';

const Card = () => {

    return (
        <div className="contact-us-section-b-container">
            <LeftCard />
            <RightCard />
        </div>
    )
}

export default Card;