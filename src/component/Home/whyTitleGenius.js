import React, { useState, useEffect } from 'react';
import window from 'global';

import "../../scss/home/whyTitleGenius.scss";
import TitleGeniusPros from './titleGeniusPros';

import CalendarHand from "../../assets/static/images/home/Calendar-Hand.svg";
import CustomerServices from "../../assets/static/images/home/Customer-Services.svg";
import MoneyTechnology from "../../assets/static/images/home/Money-Technology.svg";

function debounceFunc(expensiveFunc, delay) {

    var timer;

    return function () {
        var ctx = this;
        var args = arguments;

        clearTimeout(timer);

        timer = setTimeout(function () {
            expensiveFunc.apply(ctx, args);
        }, delay)
    }
}

const WhyTitleGenius = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [blockHeadingHeight, setBlockHeadingHeight] = useState(0);

    const [isDesktopDevice, setDesktopDevice] = useState(false);

    const [titleGeniusProsImgs] = useState({ CalendarHand, CustomerServices, MoneyTechnology });

    const [blockIdSelector] = useState(['child-a-ctrl', 'child-b-ctrl', 'child-c-ctrl']);

    const windowResizeHandler = debounceFunc(
        () => {
            setWindowWidth(window.innerWidth);
        }, 500
    );

    useEffect(() => {

        window.addEventListener('resize', windowResizeHandler);

        return () => {

            window.removeEventListener('resize', windowResizeHandler);
        }
    }, [windowResizeHandler]);

    /**
     * useEffect is used to reset height of h6 element with class `cccb-child-a` [h6.cccb-child-a] on 
     * ./titleGeniusPros.js file.
     */
    useEffect(() => {
        let btnRendReset;

        /**
         * Before subsequent request, `btnRendReset`
         * need to get cleared.
         */
        clearTimeout(btnRendReset);

        btnRendReset = setTimeout(() => {
            setDesktopDevice(false);
        }, 0);

        /**
         * Once the component gets unmount, `btnRendReset`
         * need to get cleared.
         */        
        return () => {

            clearTimeout(btnRendReset);
        }

    }, [windowWidth]);

    /**
     * A. useEffect is used to update height of h6 element with class `cccb-child-a` i.e.
     * [h6.cccb-child-a] on ./titleGeniusPros.js file.
     * 
     * B. Height of elements having ID ['child-a-ctrl', 'child-b-ctrl', 'child-c-ctrl']
     * would get updated in case of Desktop rendering only.
     * 
     * C. Updated height would be the maximum among elements having ID 
     * ['child-a-ctrl', 'child-b-ctrl', 'child-c-ctrl']
     */    
    useEffect(() => {

        if (window.innerWidth < 992) {

            return
        }

        /**
         * btnAlignDp: Button Alignment Desktop
         */
        let btnAlignDp;

        /**
         * Before subsequent request, `btnAlignDp`
         * need to get cleared.
         */        
        clearTimeout(btnAlignDp);

        btnAlignDp = setTimeout(() => {

            let maxHeight = 0;

            blockIdSelector.forEach((val) => {

                let blockHeight = document.getElementById(`${val}`).clientHeight;

                if (parseInt(maxHeight) < parseInt(blockHeight)) {
                    maxHeight = blockHeight;
                }
            });

            setBlockHeadingHeight(maxHeight);
            setDesktopDevice(true);

        }, 0);

        /**
         * Once the component gets unmount, `btnAlignDp`
         * need to get cleared.
         */
        return () => {
            clearTimeout(btnAlignDp);
        }

    }, [windowWidth]);

    return (

        <div className="home-page-section-d-container">

            <div className="child-a-heading">
                About Us
                </div>

            <div className="child-b-heading">
                Why choose titlegenius?
                </div>

            <div className="child-c-container">
                <TitleGeniusPros
                    isDesktopDevice={isDesktopDevice}
                    childClass="child-a-ctrl"
                    blockImg={titleGeniusProsImgs['CalendarHand']}
                    blockHeadingProp={blockHeadingHeight}
                    blockHeading="Our Competitive and Easy-to-Understand Pricing"
                    blockText="Learn More about Radian"
                    navigationHandler={(e) => {
                        e.preventDefault();
                        console.log('child - A');
                    }}
                />
                <TitleGeniusPros
                    isDesktopDevice={isDesktopDevice}
                    childClass="child-b-ctrl"
                    blockImg={titleGeniusProsImgs['CustomerServices']}
                    blockHeadingProp={blockHeadingHeight}
                    blockHeading="Our Technology Makes the Process Easy and Transparent."
                    blockText="See For Yourself"
                    navigationHandler={(e) => {
                        e.preventDefault();
                        console.log('child - B');
                    }}
                />
                <TitleGeniusPros
                    isDesktopDevice={isDesktopDevice}
                    childClass="child-c-ctrl"
                    blockImg={titleGeniusProsImgs['MoneyTechnology']}
                    blockHeadingProp={blockHeadingHeight}
                    blockHeading="Our Dedicated Client Services Specialists Help You Along the Way "
                    blockText="Have Questions? Contact Us "
                    navigationHandler={(e) => {
                        e.preventDefault();
                        console.log('child - C');
                    }}
                />
            </div>

        </div>
    )
}

export default WhyTitleGenius;