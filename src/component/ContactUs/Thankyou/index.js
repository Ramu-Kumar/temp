import React from 'react';

import './../../../scss/contact_us/thankyou/index.scss';

import TyContent from './tyContent';
import TyHeroImg from './tyHeroImg';
import TyLinks from './tyLinks';

const Thankyou = () => {

    return (
        <div className='cu-ty--cntr'>

            <div className='child-a-ctc'>
                <div className='ca-child-a-ctc'>
                    <TyContent />
                </div>
                <div className='ca-child-b-ctc'>
                    <TyLinks />
                </div>
            </div>

            <div className='child-b-ctc'>
                <TyHeroImg />
            </div>

        </div>
    )
}

export default Thankyou;