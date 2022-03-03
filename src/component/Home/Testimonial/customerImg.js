import React, { useEffect, useState } from 'react';

import "../../../scss/home/Testimonial/customerImg.scss";
import Speechmarks from './../../../assets/static/images/home/testimonial/Speechmarks.svg';

const CustomerImg = ({ customerInfoRef, renderUserQuoteRef }) => {

    const [customerInfo, setCustomerInfo] = useState([]);

    useEffect(() => {

        setCustomerInfo(customerInfoRef);
    }, [customerInfoRef]);

    const isFIrstImg = (idx) => {

        return idx == 0
            ? true : false;
    }

    const renderFirstImgBlock = (uId, imgSrc) => {

        return (
            <>
                <img
                    src={imgSrc}
                    className='cutomer-first-img'
                    key={`user_img_${uId}`}
                    onClick={
                        () => {
                            renderUserQuoteRef(uId)
                        }
                    }
                />
                <img
                    src={Speechmarks}
                    className='speechmark'
                    key={`speechmarks_img_${uId}`}
                    onClick={
                        () => {
                            renderUserQuoteRef(uId)
                        }
                    }
                />
            </>
        )
    }

    const renderImgBlock = (uId, imgSrc) => {

        return <img
            src={imgSrc}
            className='cutomer-img'
            key={`${uId}`}
            onClick={
                () => {
                    renderUserQuoteRef(uId)
                }
            }
        />
    }

    return (
        <div className='cutomer-imgs-tt--cntr'>

            {
                Array.isArray(customerInfo)
                && customerInfo.length > 0
                && customerInfo.map(
                    ({ uId, imgSrc }, idx) => {

                        return (
                            <div
                                className={
                                    isFIrstImg(idx) === true
                                        ? 'cutomer-first-img--tt-cntr'
                                        : 'cutomer-img--tt-cntr'
                                }
                                key={`customer_img_cntr_${uId}`}
                            >
                                {
                                    isFIrstImg(idx) === true
                                    && (
                                        renderFirstImgBlock(uId, imgSrc)
                                    )
                                }
                                {
                                    isFIrstImg(idx) === false
                                    && (
                                        renderImgBlock(uId, imgSrc)
                                    )
                                }
                            </div>
                        )
                    }
                )
            }

        </div>
    )
}

export default CustomerImg;