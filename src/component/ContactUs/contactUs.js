import React, { useState } from 'react';
import Card from './card';
import Hero from './Hero/hero';
import Thankyou from './Thankyou/index';

const ContactUs = () => {

    /**
     * renderHC: Render Hero component
     */
    const [renderHC, setRenderHC] = useState(true);

    const toggelHeroCompVisibility = (status) => {

        setRenderHC(status);
        window.scroll(0, 0);
    }

    return (

        <section className="wrapper-title-body" id="title-start">
            {
                renderHC === true
                && <Hero toggelHeroCV={toggelHeroCompVisibility} />
            }
            {
                renderHC === false
                && <Thankyou />
            }

            <Card />

        </section>
    )
}

export default ContactUs;