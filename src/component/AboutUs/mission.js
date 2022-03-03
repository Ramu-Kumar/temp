import React from 'react';

import "./../../scss/about_us/mission.scss";
import SectionBImage from "./../../assets/static/images/title/aboutUsSectionB.svg";

const Mission = () => {

    return (
        <div className="section-b-container">

            <div className="sb-child-a">

                <div className="sbca-heading-a">
                    We are different
                </div>
                <div className="sbca-heading-b">
                    We have a mission
                </div>
                <div className="sbca-content-a">
                    titlegenius by Radian makes closing on your home, simple, transparent and a little
                    less expensive. Our innovative platform walks you through the closing process,
                    step-by-step, from contract to keys. And if you need assistance, your local
                    expert is ready to take your call. With the right balance of people, resources,
                    and technology, we help you close with confidence.
                </div>
                {/* <div className="sbca-quote-a-container">
                    <div className="sbcaq-prefix-a">&#10077;</div>
                    <div className="sbcaqa-content">It’s the genius way to close on a home.</div>
                </div> */}
                <div className="sbca-content-b-container">
                    <div className="sbca-content-b">
                        With easy-to-use tools from remote check capture to online notarization,
                        titlegenius streamlines title services and allows both you and your agent
                        to manage your closing conveniently online.
                    </div>
                    <div className="sbca-content-b">
                        <ul>
                            <li>Manage your closing date</li>
                            <li>Receive up-to-the minute alerts&nbsp;</li>
                            <li>Securely upload and download transaction documents</li>
                            <li>Know where to go and what to bring to ensure that closing day goes as smoothly as possible</li>
                            <li>Our local staff is available to walk you through the particulars of buying or selling a home in your neighborhood.&nbsp;</li>
                        </ul>
                    </div>
                    <div className="sbca-content-b">
                        We’ve pulled back the curtain on the <a href="/title101/closing-on-your-home">closing process</a>.
                        When you receive a titlegenius quote from Radian you’ll see the breakdown of title costs,
                        settlement fees and where we can offer discounts. You’ll know exactly what you’re paying
                        for—and what you’re saving.
                    </div>
                    <div className="sbca-content-b">
                        Powered by Radian’s data and technology the titlegenius platform provides a better way to
                        close on your home with less stress and more transparency.
                    </div>
                </div>

                {/* <div className="sbca-quote-b-container">
                    <div className="sbcaq-prefix-a">&#10077;</div>
                    <div className="sbcaqb-content">
                        we’ll keep you informed, guide you through a pain-free settlement
                        and help you save money
                    </div>
                </div> */}

                {/* <div className="sbca-content-b">
                    so you can invest in your biggest asset –your home.
                </div> */}
            </div>

            <div className="sb-child-b">
                <div className="sb-img-container">
                    <img src={SectionBImage} className="sbcb-img" />
                </div>
            </div>
        </div>
    )
}

export default Mission;