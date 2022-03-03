import React from 'react';

import './../../../scss/contact_us/hero/cuInfo.scss'

const CuInfo = ({ containerId }) => {

    return (
        <div className='cu-info--cntr' id={containerId}>
            <div className='child-a-cic'>
                Still Have Questions?
            </div>
            <div className='child-b-cic'>
                We have answers.
            </div>
            <div className='child-c-cic'>
                Contact us and receive the help you need.
            </div>
        </div>
    )
}

export default CuInfo;