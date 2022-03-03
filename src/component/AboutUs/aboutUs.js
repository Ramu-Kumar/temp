import React from 'react';

import "./../../scss/about_us/_title_aboutUs.scss";

import Hero from './hero';
import Mission from './mission';
import Strength from './strength';
import GetToknow from './getToknow';

const AboutUs = () => {

    return (
        <section className="wrapper-title-body" id="title-start">
            <Hero />
            <Mission />
            <Strength />
            <GetToknow />
        </section>
    )
}

export default AboutUs;