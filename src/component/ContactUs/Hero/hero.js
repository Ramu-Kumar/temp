import React from 'react';

import './../../../scss/contact_us/hero/hero.scss'

import CuInfo from './cuInfo';
import CuHeroImg from './cuHeroImg';
import CuForm from './cuForm';

const Hero = (props) => {

    return (
        <div className='cu-hero--cntr'>
            <div className='child-a'>
                <div className='ca-child-a' >
                    <CuInfo containerId='contact_us_info_cntr' />
                </div>
                <div className='ca-child-b'>
                    <CuHeroImg />
                </div>
            </div>

            <div className='child-b' id='contact_us_form_cntr'>
                <CuForm {...props} />
            </div>
        </div>
    )
}

export default Hero;