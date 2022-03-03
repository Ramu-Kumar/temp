import React, { useState, useEffect } from 'react';
import window from 'global';

import CustomerImg from './customerImg'
import "../../../scss/home/Testimonial/index.scss";

import { testimonialData } from './../../Utils/testimonial';

import customerImgA from './../../../assets/static/images/home/testimonial/Carousel-Img-1@2x.png';
import customerImgB from './../../../assets/static/images/home/testimonial/Carousel-Img-2@2x.png';
import customerImgC from './../../../assets/static/images/home/testimonial/Carousel-Img-3@2x.png';
import customerImgD from './../../../assets/static/images/home/testimonial/Carousel-Img-4@2x.png';

import leftArrowActive from './../../../assets/static/images/home/testimonial/CarouselArrow-Left-active.svg';
import leftArrowInactive from './../../../assets/static/images/home/testimonial/CarouselArrow-Left-inactive.svg';
import rightArrowActive from './../../../assets/static/images/home/testimonial/CarouselArrow-Right-active.svg';
import rightArrowInactive from './../../../assets/static/images/home/testimonial/CarouselArrow-Right-inactive.svg';

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

const Testimonial = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [maxImgsDisplayNum, setMaxImgsDisplayNum] = useState(0);

    const [quotes, setQuotes] = useState({});

    /**
     * cImgs: Customer Images
     */
    const [cImgs, setCImgs] = useState([]);

    const [currentIdx, setCurrentIdx] = useState(0);

    const [currentQuote, setCurrentQuote] = useState('');

    const [currentUserName, setCurrentUserName] = useState('');

    const [currentLocationName, setCurrentLocationName] = useState('');

    const setMaxImgsRenderNum = () => {

        if (windowWidth < 768) {
            setMaxImgsDisplayNum(3);

        } else if (windowWidth >= 768 && windowWidth < 992) {

            setMaxImgsDisplayNum(2);
        } else if (windowWidth >= 992) {

            setMaxImgsDisplayNum(4);
        }
    }

    const windowResizeHandler = debounceFunc(

        () => {

            setWindowWidth(window.innerWidth);
        }, 500
    );

    useEffect(() => {

        Array.isArray(quotes)
            && quotes.length > 0
            && quotes[currentIdx]
            && (setCurrentUserName(quotes[currentIdx].fields.Name.value))

        Array.isArray(quotes)
            && quotes.length > 0
            && quotes[currentIdx]
            && (setCurrentLocationName(quotes[currentIdx].fields.Location.value))

        Array.isArray(quotes)
            && quotes.length > 0
            && quotes[currentIdx]
            && (setCurrentQuote(quotes[currentIdx].fields.Quote.value))

    }, [quotes, currentIdx]);

    useEffect(() => {

        window.addEventListener('resize', windowResizeHandler);

        let quotesRef = testimonialData.Quotes;

        let customerInfo;

        customerInfo = testimonialData.Quotes
            .map(
                (quoteInfo) => {
                    return {
                        'uId': quoteInfo['id'],
                        'imgSrc': quoteInfo['fields']['Photo']['value']['src']
                    }
                });

        setQuotes(quotesRef);
        setCImgs(customerInfo);

        return () => {

            window.removeEventListener('resize', windowResizeHandler);
        }
    }, []);

    useEffect(() => {

        setMaxImgsRenderNum();

    }, [windowWidth]);


    const renderUserQuote = (userId) => {

        let uId = userId;
        let uIdx = quotes.findIndex(elm => elm.id == uId);

        if (uIdx >= 0) {

            setCurrentIdx(uIdx);
        }
    }

    const navigateLeft = () => {

        setCurrentIdx(currentIdx - 1);
    };

    const navigateRight = () => {

        setCurrentIdx(currentIdx + 1);
    };

    return (
        <div className='testimonial-root--cntr'>
            <div className='testimonial--cntr'>
                <div className='child-a-tt'>
                    You can trust us
                </div>
                <div className='child-b-tt'>
                    Hear from our customers
                </div>

                <div className='child-c-tt--cntr'>
                    <div className='cc-child-a-tt'>
                        {
                            currentQuote
                        }
                    </div>
                    <div className='cc-child-b-tt'>
                        {
                            Array.isArray(cImgs)
                            && cImgs.length > 0
                            && <CustomerImg
                                customerInfoRef={cImgs.slice(currentIdx, currentIdx + maxImgsDisplayNum)}
                                renderUserQuoteRef={renderUserQuote}
                            />
                        }
                    </div>
                </div>
                <div className='child-d-tt'>
                    {
                        currentUserName
                    }
                </div>
                <div className='child-e-tt'>
                    {
                        currentLocationName
                    }
                </div>

                <div className='child-f-tt--cntr'>
                    <div className='cf-child-a-tt'>
                        <button className={
                            'cfca-child-a'
                            +
                            (
                                currentIdx == 0
                                    ? ' disabled-link'
                                    : ''
                            )
                        }
                            onClick={navigateLeft}
                        >
                            {
                                currentIdx == 0
                                    ? (<img src={leftArrowInactive} className='cfca-img' />)
                                    : (<img src={leftArrowActive} className='cfca-img' />)
                            }
                        </button>
                    </div>
                    <div className='cf-child-b-tt'>
                        <button className={
                            'cfcb-child-a'
                            +
                            (
                                currentIdx == quotes.length - 1
                                    ? ' disabled-link'
                                    : ''
                            )
                        }
                            onClick={navigateRight}
                        >
                            {
                                currentIdx == quotes.length - 1
                                    ? (<img src={rightArrowInactive} className='cfcb-img' />)
                                    : (<img src={rightArrowActive} className='cfcb-img' />)
                            }

                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Testimonial;