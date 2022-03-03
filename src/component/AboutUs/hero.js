import React from 'react';

import "./../../scss/about_us/hero.scss";
import sectionAImage from "./../../assets/static/images/title/AboutUs-HeroImg@2x.png";
import iconChevron from "./../../assets/static/images/title/iconChevron.svg";

const Hero = () => {

    return (
        <div className='aboutus-container'>
             
                <img src={sectionAImage} className="brand-img" style={{ shapeOutside: `url(${sectionAImage})` }}/>
           
                <article>
                    <h4 className="page-title-text">
                        About titlegenius
                    </h4>
                    <h6 className="page-title-info">
                        titlegenius believes you should have more control
                        over choosing your title insurance provider
                    </h6>
                    <div className="icon-chevron-container">
                        <img src={iconChevron} className="icon-chevron" />
                    </div>
                </article>
        </div>

    )
}

export default Hero;