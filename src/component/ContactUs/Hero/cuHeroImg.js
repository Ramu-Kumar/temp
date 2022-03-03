import React from 'react';

import './../../../scss/contact_us/hero/cuHeroImg.scss';

import cuHeroImg from "./../../../assets/static/images/contact_us/contact_us_desktop.png";

const CuHeroImg = () => {

    return (
        <div className='cu-hero-img--cntr'>
            <img src={cuHeroImg}
                className='cu-hero-img'
                style={{ shapeOutside: `url(${cuHeroImg})` }}
            />
        </div>
    )
}

export default CuHeroImg;