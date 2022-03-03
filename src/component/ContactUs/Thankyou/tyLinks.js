import React from 'react';

import './../../../scss/contact_us/thankyou/tyLinks.scss';

const TyLinks = () => {

    return (
        <div className='ty-links--cntr'>

            <div className='child-a--tlc'>
                In the mean time:
            </div>

            <div className='child-b--tlc'>

                <div className='cb-child-a--tlc'>
                    <a className='cbca-link-a-tlc'>Explore our FAQ</a>
                </div>

                <div className='cb-child-b--tlc'>
                    <a className='cbcb-link-a-tlc'>Learn about titlegenius</a>
                </div>

            </div>

            <div className='child-c--tlc'>
                Send another message
            </div>
        </div>
    )
}

export default TyLinks