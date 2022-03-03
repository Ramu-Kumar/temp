import React from 'react';

import './../../../scss/contact_us/thankyou/tyHeroImg.scss';
import cuHeroImg from "./../../../assets/static/images/contact_us/contact_us_desktop.png";

const TyHeroImg = () => {

    return (
        <div className='ty-hero-img--cntr'>
            <img src={cuHeroImg} className='ty-hero-img' />
        </div>
    )
}

export default TyHeroImg